const fUtil = require("../misc/file");
const stuff = require("./info");
const http = require("http");

function toAttrString(table) {
	return typeof table == "object"
		? Object.keys(table)
				.filter((key) => table[key] !== null)
				.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(table[key])}`)
				.join("&")
		: table.replace(/"/g, '\\"');
}
function toParamString(table) {
	return Object.keys(table)
		.map((key) => `<param name="${key}" value="${toAttrString(table[key])}">`)
		.join(" ");
}
function toObjectString(attrs, params) {
	return `<object ${Object.keys(attrs)
		.map((key) => `${key}="${attrs[key].replace(/"/g, '\\"')}"`)
		.join(" ")}>${toParamString(params)}</object>`;
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "GET") return;
	const query = url.query;

	var attrs, params, title;
	switch (url.pathname) {
		case "/testing": {
			let presave =
				query.movieId && query.movieId.startsWith("m")
					? query.movieId
					: `m-${fUtil[query.noAutosave ? "getNextFileId" : "fillNextFileId"]("movie-", ".xml")}`;
			title = "Video Editor";
			attrs = {
				data: process.env.SWF_URL + "/go_full.swf",
				type: "application/x-shockwave-flash",
				id: "video_maker",
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: process.env.STORE_URL + "/<store>",
					isEmbed: 1,
					ctc: "go",
					ut: 60,
					bs: "default",
					appCode: "go",
					page: "",
					siteId: "go",
					lid: 13,
					isLogin: "Y",
					retut: 0,
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					themeId: "custom",
					tlang: "en_US",
					presaveId: presave,
					goteam_draft_only: 1,
					isWide: 1,
					collab: 0,
					nextUrl: "../pages/html/list.html",
					noSkipTutorial: 1,
                    loadas: 0,
                    bgload: process.env.SWF_URL + "/go_full.swf",
                    templateshow: "false",
                    forceshow: "false",
                    lang: "en",
                    initcb: "studioLoaded",  
				},
				allowScriptAccess: "always",
				allowFullScreen: "true",
			};
			break;
		}
		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(`
    <html><head>
    <script>
        document.title='Video Editor',flashvars={"apiserver":"/","storePath":"https://localhost:4664/store/3a981f5cb2739137/<store>","isEmbed":1,"ctc":"go","ut":60,"bs":"default","appCode":"go","page":"","siteId":"go","lid":13,"isLogin":"Y","retut":0,"clientThemePath":"https://localhost:4664/static/ad44370a650793d9/<client_theme>","themeId":"custom","tlang":"en_US","presaveId":"m-0","goteam_draft_only":1,"isWide":1,"collab":0,"nextUrl":"../pages/html/list.html","noSkipTutorial":1}
    </script><title>Video Editor</title>
    <script src="/pages/js/stuff.js"></script>
    <link rel="stylesheet" type="text/css" href="/pages/css/swf.css">
    <link rel="stylesheet" type="text/css" href="/pages/css/modern-normalize.css">
    <link rel="stylesheet" type="text/css" href="/pages/css/global.css">
</head>

<body>
    <main>
        ${toObjectString(attrs, params)}
    </main>
    <div id="previewPlayerContainer" style="display: none;">
    <div class="preview-player" id="previewPlayer">
        <h2>Preview Video</h2>
        <div id="playerdiv"></div>
        <div id="h5-playerdiv"></div>
        <div class="buttons clearfix">
            <button class="preview-button edit" type="button" onclick="switchBackToStudio();">Back to editing</button>
            <button class="preview-button save" type="button" onclick="publishStudio();">Save Now</button>            </div>
            <a class="close_btn" href="#" onclick="switchBackToStudio(); return false;">×</a>
        </div>

    </div>
</div>
<script>

    interactiveTutorial = {
        neverDisplay:function() {
            return true
        }
    };
    function studioLoaded(arg) {
        console.log(arg)
    }
    function savePreviewData(a) {
        previewPlayerTempData = a
    }

    function retrievePreviewPlayerData() {
        var a = previewPlayerTempData;
        previewPlayerTempData = "";
        return a
    }

    function switchBackToStudio() {
        $('#previewPlayerContainer').hide();
        $('#playerdiv').empty();
        $('#video_maker').height('100%')
        $('#video_maker').width('100%')
    }

    function loadLegacyPreview() {

        if (movieDataXmlStr === null) {
            return;
        }
    
        savePreviewData(movieDataXmlStr);
        createPreviewPlayer("playerdiv", {
            height: 360,
            width: 640,
            player_url: "https://localhost:4664/animation/414827163ad4eb60/player.swf",
            quality: "high",
            wmode: "transparent",
        }, {
            movieId: "1", 
            ut: "60",
            movieLid: "13", 
            apiserver: "/", 
            copyable: "0", 
            isPublished: "0", 
            ctc: "go", 
            tlang: "en_US", 
            autostart: "1", 
            appCode: "go", 
            is_slideshow: "0", 
            originalId: "0", 
            is_emessage: "0", 
            isEmbed: "1", 
            refuser: "",
            utm_source: "", 
            uid: "", 
            isTemplate: "1", 
            showButtons: "1", 
            chain_mids: "", 
            showshare: "1", 
            averageRating: "",
            ratingCount: "", 
            numContact: 0, 
            isInitFromExternal: 1, 
            storePath: "https://localhost:4664/store/3a981f5cb2739137/<store>", 
            clientThemePath: "https://localhost:4664/static/ad44370a650793d9/<client_theme>", 
            startFrame: previewStartFrame
        });
        $('body').css('background-color: #0f0f0f');
        $('#video_maker').height('1px')
        $('#video_maker').width('1px')
    }

    function checkPreviewServer() {
        return previewPlayer._connectionState === PreviewPlayerConstants.STATE_READY;
    }

    function initPreviewPlayer(dataXmlStr, startFrame, containsChapter, themeList) {
        movieDataXmlStr = dataXmlStr;
        previewStartFrame = startFrame;
    
        filmXmlStr = dataXmlStr.split("<filmxml>")[1].split("</filmxml>")[0];
    
        if (typeof startFrame == 'undefined') {
            startFrame = 1;
        } else {
            startFrame = Math.max(1, parseInt(startFrame));
        }

        document.getElementById('previewPlayerContainer').setAttribute('style', '');

        loadLegacyPreview();
        if (!checkPreviewServer() && (previewPlayerRetryCount > 0)) { // Retry on WebSocket connection problem
            previewPlayer.connect();
            previewPlayerRetryCount--;
        }
    }
    function exitStudio() {
        window.location='pages/html/list.html'
    } 
</script></body></html>
    `)
	return true;
};