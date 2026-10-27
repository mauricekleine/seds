type Kind = "contact" | "collaborate";
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
export async function inquiry(kind: Kind, fields: Record<string, unknown>) {
  const required =
    kind === "collaborate"
      ? ["email", "message", "name", "organization", "role", "focus"]
      : ["email", "message", "name"];
  if (required.some((key) => typeof fields[key] !== "string" || !(fields[key] as string).trim()))
    return { success: false };
  const values = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, typeof value === "string" ? value : ""]),
  );
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return { success: false };
  const apiKey = process.env.MANDRILL_API_KEY;
  const captchaKey = process.env.RECAPTCHA_SECRET_KEY;
  // Fail closed when credentials are unavailable, including the unprovisioned preview.
  if (!apiKey || !captchaKey || !values.token) return { success: false };
  try {
    const captcha = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: new URLSearchParams({ response: values.token, secret: captchaKey }),
    });
    if (!captcha.ok || !((await captcha.json()) as { success: boolean }).success) return { success: false };
    const address = "info@sedsngo.org";
    const labels: Record<string, string> = {
      name: "Name",
      email: "Email",
      organization: "Organization",
      role: "Role",
      focus: "Focus area",
      phonenumber: "Phone number",
    };
    const rows = Object.entries(labels)
      .filter(([key]) => values[key])
      .map(([key, label]) => `<tr><td>${label}:</td><td>${escapeHtml(values[key])}</td></tr>`)
      .join("");
    const message = {
      to: [
        { email: address, type: "to" },
        { email: values.email, name: values.name, type: "cc" },
      ],
      from_email: address,
      from_name: kind === "contact" ? "SEDS Contact Form" : "SEDS Collaboration Form",
      subject: `${kind === "contact" ? "New message" : "New collaboration inquiry"} from ${values.name} <${values.email}>`,
      text: values.message,
      html: `<div><h3>Details</h3><table>${rows}</table><h3>${kind === "contact" ? "Message" : "Collaboration idea"}</h3><p>${escapeHtml(values.message)}</p></div>`,
    };
    const response = await fetch("https://mandrillapp.com/api/1.0/messages/send.json", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ key: apiKey, message }),
    });
    if (!response.ok) return { success: false };
    const result = (await response.json()) as { status: string }[];
    return {
      success:
        Array.isArray(result) &&
        result.length > 0 &&
        result.every((recipient) => ["sent", "queued", "scheduled"].includes(recipient.status)),
    };
  } catch {
    return { success: false };
  }
}
