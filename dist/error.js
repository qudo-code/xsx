export const error = (message) => {
    console.error("[xsx error]", String(message));
    process.exit(1);
};
