import { spawn } from "node:child_process";

// The preview service supplies Vite-style flags; translate them for Next.js.
const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const hostIndex = args.indexOf("--host");
const port = portIndex >= 0 ? args[portIndex + 1] : "3000";
const host = hostIndex >= 0 ? args[hostIndex + 1] : "localhost";
const child = spawn("node", ["node_modules/next/dist/bin/next", "dev", "--hostname", host, "--port", port], { stdio: "inherit" });
child.on("exit", (code) => { process.exitCode = code ?? 1; });
