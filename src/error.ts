export const error = (message: any) => {
    console.error("[xsx error]", String(message));
    process.exit(1);
};