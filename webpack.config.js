var path = require("path");

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve("./dist"),
		libraryTarget: "umd",
		filename: "index.js",
		library: "cssSelect"
	}
};
