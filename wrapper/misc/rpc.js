<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
/***
 * discord rich presence
 */
// get version number
const version = process.env.WRAPPER_VER;
const http = require("http");
const rpc = process.env.drpc;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const RPC = require("discord-rpc");
const http = require("http");

// Loads env.json for Wrapper version and build number
const env = Object.assign(process.env,
	require('../env'));
<<<<<<< HEAD
// env.json variables
let version = env.WRAPPER_VER;
>>>>>>> parent of 625136aa (better)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const RPC = require("discord-rpc");
const http = require("http");
>>>>>>> parent of 6304cbfa (updated rpc)
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of d9366706 (Update rpc.js)

=======
>>>>>>> parent of 625136aa (better)
// env.json variables
let version = env.WRAPPER_VER;

<<<<<<< HEAD
// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});
=======
=======
>>>>>>> parent of d9366706 (Update rpc.js)

<<<<<<< HEAD
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
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
const RPC = require("discord-rpc");
const http = require("http");

// env.json variables
const version = process.env.WRAPPER_VER;
>>>>>>> parent of 6304cbfa (updated rpc)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)

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
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
=======
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of 6304cbfa (updated rpc)
=======
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)

if (env.RPC == "y") {
	rpc.on("ready", () => {
		rpc.setActivity({
			state: 'Waiting for RPC input...',
			details: "Version " + version,
			startTimestamp: new Date(),
			largeImageKey: "icon",
			largeImageText: "Wrapper: Offline",
			smallImageKey: "Wrapper: Offline",
			smallImagetext: "Wrapper: Offline",
		});
	});
}
// Connects RPC to app
if (env.RPC == "y") {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of 625136aa (better)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
	try {
		rpc.login({
			clientId: "866340172874383370"
		});
		console.log('Rich presence is on!')
	} catch (e) {
		console.log(e);
	}
<<<<<<< HEAD
}
>>>>>>> parent of 625136aa (better)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
	// connect rpc to app
	rpc
		.login({ clientId: "866340172874383370" })
		.catch((e) => console.log("RPC connection failed."));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 625136aa (better)
}
>>>>>>> parent of 6304cbfa (updated rpc)
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
}
>>>>>>> parent of 6304cbfa (updated rpc)
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of d9366706 (Update rpc.js)
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
