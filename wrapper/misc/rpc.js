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
/***
 * discord rich presence
 */
// get version number
const version = process.env.WRAPPER_VER;
const http = require("http");
const rpc = process.env.drpc;
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
=======
const RPC = require("discord-rpc");
const http = require("http");
>>>>>>> parent of 6304cbfa (updated rpc)
=======
>>>>>>> parent of d9366706 (Update rpc.js)

=======
>>>>>>> parent of 625136aa (better)
// env.json variables
let version = env.WRAPPER_VER;

// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});
=======

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

// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});

module.exports = {
	setActivity(page) {
		if (env.RPC == "y") {
			switch (page) {
				case "vl": { 
					var state = 'Video List'; 
					break; 
				}
				case "vm": { 
					var state = 'Making a Video'; 
					break; 
				}
				case "cc": { 
					var state = 'Creating a Character'; 
					break; 
				}
				case "ccb": { 
					var state = 'Browsing Characters'; 
					break; 
				}
				case "vp": { 
					var state = 'Watching a Video'; 
					break; 
				}
			}
			// Sets RPC activity
			rpc.setActivity({
				state: state,
				details: "Version " + version,
				startTimestamp: new Date(),
				largeImageKey: "icon",
				largeImageText: "Wrapper: Offline",
				smallImageKey: "Wrapper: Offline",
				smallImagetext: "Wrapper: Offline",
			});
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
=======
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
=======
>>>>>>> parent of 6304cbfa (updated rpc)
=======
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 6304cbfa (updated rpc)

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
=======
>>>>>>> parent of 6ba7e693 (Update rpc.js)
=======
>>>>>>> parent of 7f139607 (Update rpc.js)
=======
>>>>>>> parent of 625136aa (better)
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
=======
=======
>>>>>>> parent of 6304cbfa (updated rpc)
	// connect rpc to app
	rpc
		.login({ clientId: "866340172874383370" })
		.catch((e) => console.log("RPC connection failed."));
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
}
>>>>>>> parent of 6304cbfa (updated rpc)
