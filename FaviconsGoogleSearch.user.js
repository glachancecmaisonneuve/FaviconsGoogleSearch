// ==UserScript==
// @name         Favicons Google Search (easy javascript version)
// @namespace    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/
// @version      0.4
// @description  Faviconize Google Search
// @author       glachancecmaisonneuve
// @icon         https://raw.githubusercontent.com/glachancecmaisonneuve/FaviconsGoogleSearch/master/FaviconsGoogleSearchIcon.png
// @updateurl    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/raw/master/FaviconsGoogleSearch.user.js
// @match        *://www.google.ca/search*
// @match        *://www.google.com/search*
// // ==/UserScript==

// ==UserScript==
// @name         Favicons Google Search (easy javascript version)
// @namespace    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/
// @version      0.4
// @description  Faviconize Google Search
// @author       glachancecmaisonneuve
// @icon         https://raw.githubusercontent.com/glachancecmaisonneuve/FaviconsGoogleSearch/master/FaviconsGoogleSearchIcon.png
// @updateurl    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/raw/master/FaviconsGoogleSearch.user.js
// @match        *://www.google.ca/search*
// @match        *://www.google.com/search*
// // ==/UserScript==

function favicon_src(url) {
    try {
        var domain = new URL(url).host;
        return "https://www.google.com/s2/favicons?domain=" + domain;
    } catch (err) {}
    return "";
}

function imgHTML(urlsite) {
    return `<img style='position:absolute; overflow:hidden; width:32px; left:-40px; top:0px;' src='${favicon_src(urlsite)}' />`;
}

Array.from(document.querySelectorAll("h3.r > a")).forEach(function(e) {
    e.insertAdjacentHTML("beforeBegin", imgHTML(e.href));
});
/*
Array.from(document.querySelectorAll("h3.r > a")).forEach(function(e) {
    try {
        var domain = new URL(e.href).host;
        fetch(`https://www.google.com/s2/favicons?domain=${domain}`, { method: "GET", mode: "cors", cache: "force-cache" })
            .then(function(response) {
                if (response.ok) return response.arrayBuffer();
            })
            .then(function(ab) {
                ab = new TextDecoder("utf-8").decode(ab); //to UTF-8 text.
                ab = unescape(encodeURIComponent(ab)); //to binary-string.
                return btoa(ab); //BASE64.
            })
            .then(function(base64ImgSrc) {
                let img = document.createElement("img");
                img.src = base64ImgSrc;
                img.style = "position:absolute; overflow:hidden; width: 32px; left: -40px; top: 0px;";
                e.insertAdjacentHTML("beforeBegin", imagehref(e.href));
            });
    } catch (err) {
        console.log(`fail for ${e.href}.  exception: ${err}`);
    }
});
*/
