const chars = require("../character/main");
const fUtil = require("../misc/file");
const caché = require("./caché");
const mp3Duration = require("mp3-duration");

module.exports = {
	load(mId, aId) {
		return caché.load(mId, aId);
	},
	save(buffer, mId, mode, ext) {
		var suffix = `-${mode}.${ext}`;
		return caché.newItem(buffer, mId, "", suffix);
	},
	list(mId, mode) {
		var ret = [];
		var files = caché.list(mId);
		files.forEach((aId) => {
			var dot = aId.lastIndexOf(".");
			var dash = aId.lastIndexOf("-");
			var name = aId.substr(0, dash);
			var ext = aId.substr(dot + 1);
			var fMode = aId.substr(dash + 1, dot - dash - 1);
			switch (fMode) {
				case "soundeffect":
				case "voiceover":
				case "bgmusic": {
					var subtype = fMode
					var fMode = 'sound'
					break;
				}
				default: {
					break;
				}
			}
			if (fMode == mode) {
				if (fMode == "sound") {
					this.load(mId, aId).then(([buffer]) => {
						mp3Duration(buffer, (e, d) => {
							var dur = d * 1e3;
							if (e || !dur) {
								console.log('Asset loading failed');
							}
							ret.push({ id: aId, ext: ext, name: name, mode: fMode, subtype: subtype, duration: dur });
						});
					}).catch((e) => {
						console.log('Asset loading failed');
					});
				} else {
					ret.push({ id: aId, ext: ext, name: name, mode: fMode});
				}
			}
		});
		return ret;
	},
	listAll(mId) {
		var ret = [];
		var files = caché.list(mId);
		files.forEach((aId) => {
			var dot = aId.lastIndexOf(".");
			var dash = aId.lastIndexOf("-");
			var name = aId.substr(0, dash);
			var ext = aId.substr(dot + 1);
			var fMode = aId.substr(dash + 1, dot - dash - 1);
			switch (fMode) {
				case "soundeffect":
				case "voiceover":
				case "bgmusic": {
					var subtype = fMode;
					var fMode = "sound";
					break;
				}
				default: { 
					break;
				}
			}
			if (fMode == "sound") {
				this.load(mId, aId).then(([buffer]) => {
					mp3Duration(buffer, (e, d) => {
						var dur = d * 1e3;
						if (e || !dur) {
							var dur = '5000'
						}
						ret.push({ id: aId, ext: ext, name: name, mode: fMode, subtype: subtype, duration: dur });
					});
				}).catch((e) => {
					console.log('Asset loading failed');
				});
			} else {
				ret.push({ id: aId, ext: ext, name: name, mode: fMode });
			}
		});
		return ret;
	},
	chars(theme) {
		return new Promise(async (res, rej) => {
			switch (theme) {
				case "custom":
					theme = "family";
					break;
				case "action":
				case "animal":
				case "space":
				case "vietnam":
					theme = "cc2";
					break;
			}

			var table = [];
			var ids = fUtil.getValidFileIndicies("char-", ".xml");
			for (const i in ids) {
				var id = `c-${ids[i]}`;
				if (!theme || theme == (await chars.getTheme(id))) {
					table.unshift({ theme: theme, id: id });
				}
			}
			res(table);
		});
	},
};
