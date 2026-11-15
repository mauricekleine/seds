// Turn `op inject` output (KEY=value lines) into the JSON `cf workers secrets bulk` reads.
// upload-secrets.sh pipes the values in and writes this JSON to a private temporary file it removes on exit.
const secrets: Record<string, { type: "secret_text"; text: string }> = {};
for (const line of (await Bun.stdin.text()).split("\n")) {
  const match = /^([A-Z][A-Z0-9_]*)=(.*)$/.exec(line.trim());
  if (match) secrets[match[1]] = { type: "secret_text", text: match[2] };
}
if (Object.keys(secrets).length === 0) throw new Error("no KEY=value lines on stdin");
process.stdout.write(JSON.stringify(secrets));

export {};
