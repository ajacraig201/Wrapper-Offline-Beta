/***
 * wrapper: offline
 */
// start server
require("./server");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of a1625064 (Update main.js)
=======
>>>>>>> parent of fa63e302 (Update main.js)

/**
 * rich presence
 */
if (process.env.RPC && process.env.RPC == "y") {
	// get version number
	const version = process.env.WRAPPER_VER;
	const RPC = require("discord-rpc");
	const process.env.drpc = new RPC.Client({
		transport: "ipc"
	});

	// sets rpc activity when ready
	process.env.drpc.on("ready", () => {
		process.env.drpc.setActivity({
			details: `Version ${version}`,
			startTimestamp: new Date(),
			largeImageKey: "icon",
			largeImageText: "Wrapper: Offline",
			smallImageKey: "Wrapper: Offline",
			smallImagetext: "Wrapper: Offline",
		});
	});

	// connect rpc to app
	process.env.drpc
		.login({ clientId: "866340172874383370" })
		.catch((e) => console.log("RPC connection failed."));
}
<<<<<<< HEAD
=======
>>>>>>> parent of 97ceef0c (Update main.js)
<<<<<<< HEAD
=======
>>>>>>> parent of 97ceef0c (Update main.js)
=======
>>>>>>> parent of a1625064 (Update main.js)
=======
>>>>>>> parent of fa63e302 (Update main.js)
=======
>>>>>>> parent of 97ceef0c (Update main.js)
