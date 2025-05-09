module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "commonjs",
            globals: {
                Atomics: "readonly",
                SharedArrayBuffer: "readonly"
            }
        }
    }
];