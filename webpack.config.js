var path = require("path");

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve("./"),
		libraryTarget: "umd",
		filename: "css-select.js",
		library: "cssSelect"
	}
};
