const RPC = require("discord-rpc");
const http = require("http");

// env.json variables
const version = process.env.WRAPPER_VER;

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
	// connect rpc to app
	rpc
		.login({ clientId: "866340172874383370" })
		.catch((e) => console.log("RPC connection failed."));
}
