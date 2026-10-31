import { spawn } from "node:child_process";
// Accept both Next.js and the managed preview runner's host/port flags.
const incoming = process.argv.slice(2);
const value = (flag, fallback) =>
  incoming.includes(flag) ? incoming[incoming.indexOf(flag) + 1] : fallback;
const port = value("--port", process.env.PORT || "3000");
const host = value("--host", value("--hostname", "0.0.0.0"));
const child = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "dev",
    "--hostname",
    host,
    "--port",
    port,
  ],
  { stdio: "inherit", env: process.env },
);
for (const signal of ["SIGTERM", "SIGINT"])
  process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 0));
