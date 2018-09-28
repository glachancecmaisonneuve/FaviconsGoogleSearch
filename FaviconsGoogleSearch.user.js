// ==UserScript==
// @name         Favicons Google Search (easy javascript version)
// @namespace    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/
// @version      0.6
// @description  Faviconize Google Search
// @author       glachancecmaisonneuve
// @icon         https://raw.githubusercontent.com/glachancecmaisonneuve/FaviconsGoogleSearch/master/FaviconsGoogleSearchIcon.png
// @updateurl    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/raw/master/FaviconsGoogleSearch.user.js
// @match        *://www.google.ca/search*
// @match        *://www.google.de/search*
// @match        *://www.google.com/search*
// @match        *://www.google.*/search*
// // ==/UserScript==

function imgHTML(domain) {
    let imgurl = ``;
    return `<img style='position:absolute; overflow:hidden; width:32px; left:-40px; top:0px;' src='https://www.google.com/s2/favicons?domain=${domain}' />`;
}

Array.from(document.querySelectorAll("div.r > a")).forEach(function(e) {
    e.insertAdjacentHTML("beforeBegin", imgHTML(e.href));
});


//TODO: implement cache, use another service
/*function favicon_src(url) {
    try {
        var domain = new URL(url).host;
        fetch(`${domain}`, {mode:"no-cors"})
          .then(function(response){if(response.ok){return response.data();}})
          .then(function(data){return data});
    } catch (err) {}
    return "";
}*/
