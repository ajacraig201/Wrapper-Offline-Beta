/* Looking for a written form of the themes list?
"action"
"akon"
"animal"
"anime"
"ben10"
"bizmodels"
"botdf"
"bunny"
"business"
"cc_store"
"chibi"
"chowder"
"christmas"
"common"
"commoncraft"
"custom"
"domo"
"fullenergy"
"infographics"
"monkeytalk"
"monstermsh"
"ninja"
"ninjaanime"
"politic"
"politics2"
"retro"
"sf"
"space"
"spacecitizen"
"startrek"
"stick"
"sticklybiz"
"street"
"underdog"
"vietnam"
"whiteboard"
"willie"
*/

const http = require("http");
const fUtil = require("../misc/file");
const folder = process.env.THEME_FOLDER;
const fs = require("fs");
const extrathemes = `
	<theme id="toonadv" name="Toon Adventure" enable="N" />
	<theme id="underdog" name="Saturday Morning TV" enable="N" />
	<theme id="willie" name="Willie Nelson" enable="N" />
	<theme id="underdog" name="Saturday Morning TV" enable="N" />
	<theme id="willie" name="Willie Nelson" enable="N" />
	<theme id="fullenergy" name="Full Energy" thumb=""/>
	<theme id="akon" name="AKON" />
	<theme id="ben10" name="Ben 10" />
	<theme id="botdf" name="Blood on the Dance Floor" cc_theme_id="botdf" />
	<theme id="bunny" name="It's Happy Bunny" enable="N" />
	<theme id="chowder" name="Chowder" enable="N" />
	<theme id="domo" name="Domo" enable="N" />
	<theme id="monkeytalk" name="SuperRica &amp; Rashy" enable="N" />
	<theme id="christmas" name="Holiday &amp; Seasonal" thumb="santa-stand.swf" />
	<theme id="animal" name="Lil' Petz" thumb="" />
	<theme id="bizmodels" name="Business Models" thumb="" />
	<theme id="sticklybiz" name="Stickly Business" thumb="" />
	<theme id="vietnam" name="Jungle Warfare" thumb="" />
	<theme id="monstermsh" name="Monsters Mayhem" thumb="" />
`;

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */

module.exports = function (req, res, url) {
	if (req.method != "POST" || url.path != "/goapi/getThemeList/") return;
	let buffer = fs.readFileSync(`${folder}/_themelist.xml}`);
	if (process.env.TRUNCATE_THEMES == "y") {
		let buffer = buffer.replace(/%THEMEEXTRA/g, ``);
	} else {
		let buffer = buffer.replace(/%THEMEEXTRA/g, `\n${extrathemes}`);
	}
	res.setHeader("Content-Type", "application/zip");
	fUtil.makeZip(0, "themelist.xml", buffer).then((b) => res.end(b));
	return true;
};
