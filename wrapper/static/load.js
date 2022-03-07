const stuff = require("./info");
const http = require("http");
const fs = require("fs");
const { rejects } = require("assert");

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	var methodLinks = stuff[req.method];
	for (let linkIndex in methodLinks) {
		var regex = new RegExp(linkIndex);
		if (regex.test(url.path)) {
			var t = methodLinks[linkIndex];
			var link = t.regexLink ? url.path.replace(regex, t.regexLink) : t.link || url.path;
			var headers = t.headers;
			var path = `./${link}`;

			try {
				for (var headerName in headers || {}) {
					res.setHeader(headerName, headers[headerName]);
				}
				res.statusCode = t.statusCode || 200;
				if (t.content !== undefined) {
					res.end(t.content);
				} else if (fs.existsSync(path)) {
					if (t.contentReplace) {
						content = fs.readFileSync(path, "utf8");
						content = content.replace(/WRAPPER_VER/g, version);
						content = content.replace(/WRAPPER_BLD/g, build);
						if (env.DARK_MODE == "y") {
							content = content.replace(/LIST_CSS/g, '../css/list.css');
							content = content.replace(/GLOBAL_CSS/g, '../css/global.css');
							content = content.replace(/CREATE_CSS/g, '../css/create.css');
							content = content.replace(/SWF_CSS/g, '../css/swf.css');
						} else {
							content = content.replace(/LIST_CSS/g, '../css/list-light.css');
							content = content.replace(/GLOBAL_CSS/g, '../css/global-light.css');
							content = content.replace(/CREATE_CSS/g, '../css/create-light.css');
							content = content.replace(/SWF_CSS/g, '../css/swf-light.css');
						}
						if (env.TRUNCATE_THEMES == "n") {
							content = content.replace(/<!--EXTRATHEME/g, '');
							content = content.replace(/EXTRATHEME-->/g, '');
						}
						res.end(content);
					} else {
						fs.createReadStream(path).pipe(res);
					}
				} else throw null;
			} catch (e) {
				res.statusCode = t.statusCode || 404;
				res.end();
			}
			return true;
		}
	}
	return false;
};
