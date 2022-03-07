/***
 * discord rich presence
 */
// get version number
const version = process.env.WRAPPER_VER;
const http = require("http");
const rpc = process.env.drpc;

function setActivity(text) { // sets rpc activity
	rpc.setActivity({
		state: text,
		details: `Version ${version}`,
		startTimestamp: new Date(),
		largeImageKey: "icon",
		largeImageText: "Wrapper: Offline",
		smallImageKey: "Wrapper: Offline",
		smallImagetext: "Wrapper: Offline",
	});
}

module.exports = function (req, res, url) {
	if (process.env.RPC != "y") return;
	
	switch (url.path) {
		case "/pages/html/create.html":
		case "/pages/html/list.html":
		case "/index.html":
		case "/": {
			setActivity("Idle");
			break;
		}
		case "/go_full": {
			setActivity("Video Editor");
			break;
		}
		case "/player": {
			setActivity("Video Player");
			break;
		}
		case "/cc": {
			setActivity("Character Creator");
			break;
		}
		case "/cc_browser": {
			setActivity("Character Browser");
			break;
		}
		default: {
			return;
		}
	}
}
