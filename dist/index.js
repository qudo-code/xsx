#!/usr/bin/env node
import { parseArgs } from "./args.js";
import { run } from "./run.js";
import { error } from "./error.js";
const [_, __, ...restArgs] = process.argv;
try {
    const args = parseArgs(restArgs, 0);
    run(args);
}
catch (err) {
    error(err);
}
