import { join } from "path";
import fs from "fs";
import { execSync } from "child_process";
import { error } from "./error.js";
const exec = (cmd) => {
    execSync(cmd, { stdio: 'inherit' });
};
export const run = async (args) => {
    const scriptPathIndex = args.script.findIndex(arg => arg.startsWith("--"));
    const scriptSegments = args.script.slice(0, scriptPathIndex > -1 ? scriptPathIndex : args.script.length);
    const inputPath = scriptSegments.join("/");
    const scriptPath = join(process.cwd(), "scripts", `${inputPath}.sh`);
    const scriptExists = fs.existsSync(scriptPath);
    if (!scriptExists) {
        return error(`Script '${scriptSegments.join(" ")}' not found (${scriptPath})`);
    }
    let scriptArgs = "";
    if (scriptPathIndex > -1) {
        scriptArgs = args.script.slice(scriptPathIndex).join(" ");
    }
    const cmd = `sh ${scriptPath} ${scriptArgs}`.trim();
    console.log("⚙️", scriptSegments.join(" → "));
    console.log("├", cmd, "\n");
    exec(cmd);
};
