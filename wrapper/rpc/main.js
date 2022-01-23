const RPC = require("discord-rpc");
const http = require("http");

// Loads env.json for Wrapper version and build number
const env = Object.assign(process.env,
	require('../env'));
// env.json variables
let version = env.WRAPPER_VER;


// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});

async function setActivity(toState) {
	// Sets RPC activity
	rpc.setActivity({
		state: toState,
		details: "Version " + version,
		startTimestamp: new Date(),
		largeImageKey: "icon",
		largeImageText: "Wrapper: Offline",
		smallImageKey: "Wrapper: Offline",
		smallImagetext: "Wrapper: Offline",
	});
}

rpc.on("ready", () => {
	setActivity('Starting');
});
// Connects RPC to app
try {
	rpc.login({
		clientId: "866340172874383370"
	});
	console.log('Rich prescense is on!')
} catch (e) {
	console.log(e);
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
 module.exports = function (req, res, url) {
	if (!url.path.startsWith("/setRPC/")) return;
	switch (url.query.page) {
		case "list": { var state = 'Video List'; break; }
		case "vm": { var state = 'Making a Video'; break; }
		case "cc": { var state = 'Creating a Character'; break; }
		case "ccb": { var state = 'Browsing Characters'; break; }
		case "vp": { var state = 'Watching a Video'; break; }
	}
	setActivity(state);
	res.end(`Activity set to "${state}"`);
	return true;
}