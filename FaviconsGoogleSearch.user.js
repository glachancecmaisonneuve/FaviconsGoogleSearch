// ==UserScript==
// @name         Favicons Google Search (easy javascript version)
// @namespace    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/
// @version      0.8
// @description  Faviconize Google Search
// @author       glachancecmaisonneuve
// @icon         https://raw.githubusercontent.com/glachancecmaisonneuve/FaviconsGoogleSearch/master/FaviconsGoogleSearchIcon.png
// @updateurl    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/blob/master/FaviconsGoogleSearch.user.js
// @match        *://www.google.ca/search*
// @match        *://www.google.de/search*
// @match        *://www.google.com/search*
// @match        *://www.google.*/search*
// @grant        GM_getValue
// @grant        GM_setValue
// // ==/UserScript==

function imgHTML(hostname) {
    if (hostname.includes('github.com')) {
      return `<img style='position:absolute; overflow:hidden; width:32px; left:-40px;' src='https://github.com/apple-touch-icon.png' />`;
    }
    else if (hostname.includes('wikipedia.org')) {
      return `<img style='position:absolute; overflow:hidden; width:32px; left:-40px;' src='https://en.wikipedia.org/apple-touch-icon.png' />`;
    }
  
    return `<img style='position:absolute; overflow:hidden; width:32px; left:-40px;' src='https://www.google.com/s2/favicons?domain=${hostname}' />`;
}

function besticon(hostname) {
    req = `https://besticon-demo.herokuapp.com/icon?size=80..120..200&url=${hostname}`;
    return `<img style="position:absolute; overflow:hidden; width:32px; left:-40px; top:0px;" src="${req}" />`;
}

Array.from(document.querySelectorAll("div.g > div > div > a")).forEach(function(e) {
    let href = e.hreforiginal || e.href;
    let url = new URL(href);
    if (url.origin.includes('translate') && (url.searchParams.has('u'))) {
        url = new URL(url.searchParams.get('u'));
    }
    e.closest("div.g").insertAdjacentHTML("afterBegin", imgHTML(url.hostname));
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
