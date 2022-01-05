const path = require("path");

module.exports = {
    entry: {
        app: "./src/app/index.js",
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
        },
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "./build"),
        clean: false,
    },
};
