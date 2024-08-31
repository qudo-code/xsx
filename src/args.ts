import type { Option, Options, Args, Script } from "./types.js";

export const parseArgs = (
    args: string[],
    idx: number,
    script: Script = [],
    options: Options = {
        "--option-1": null,
        "--option-2": null
    }
): Args => {
    const arg = args[idx] as Option;
    const isOption  = typeof options[arg] !== "undefined";

    if(isOption) {
        const value = args[idx + 1];
        
        options[arg] = value;

        const next = idx + 2;

        if(args[next]) return parseArgs(args, next, script, options);
    }

    script.push(arg);

    const next = idx + 1;

    if(args[next]) return parseArgs(args, next, script, options);

    return {
        script,
        options
    };
};
