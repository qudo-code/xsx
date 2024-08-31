export const parseArgs = (args, idx, script = [], options = {
    "--option-1": null,
    "--option-2": null
}) => {
    const arg = args[idx];
    const isOption = typeof options[arg] !== "undefined";
    if (isOption) {
        const value = args[idx + 1];
        options[arg] = value;
        const next = idx + 2;
        if (args[next])
            return parseArgs(args, next, script, options);
    }
    script.push(arg);
    const next = idx + 1;
    if (args[next])
        return parseArgs(args, next, script, options);
    return {
        script,
        options
    };
};
