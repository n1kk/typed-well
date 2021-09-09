module.exports = {
    tabWidth: 4,
    printWidth: 100,
    semi: true,
    arrowParens: "avoid",
    bracketSpacing: true,
    endOfLine: "lf",
    overrides: [
        {
            files: ["*.json", "*.md"],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ["*.specd.ts"],
            options: {
                printWidth: 120,
            },
        },
    ],
};
