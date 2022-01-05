const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const JavaScriptObfuscator = require("webpack-obfuscator");
const path = require("path");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		minimize: true,
	},
	plugins: [
		new JavaScriptObfuscator(
			{
				rotateStringArray: true,
			},
			[path.join(__dirname, "/build/app.js")]
		),
	],
});