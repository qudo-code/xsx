export type Option = "--option-1" | "--option-2";

export type Options = {
    [key in Option]: string | number | null;
};

export type Script = string[];

export type Args = {
    script: Script;
    options: Options;
}