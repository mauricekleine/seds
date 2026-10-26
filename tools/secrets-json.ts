// Turn `op inject` output (KEY=value lines) into the JSON `cf workers secrets bulk` reads,
// so secret values move through a pipe and never touch disk.
const secrets: Record<string, { type: "secret_text"; text: string }> = {};
for (const line of (await Bun.stdin.text()).split("\n")) {
  const match = /^([A-Z][A-Z0-9_]*)=(.*)$/.exec(line.trim());
  if (match) secrets[match[1]] = { type: "secret_text", text: match[2] };
}
if (Object.keys(secrets).length === 0) throw new Error("no KEY=value lines on stdin");
process.stdout.write(JSON.stringify(secrets));

export {};
