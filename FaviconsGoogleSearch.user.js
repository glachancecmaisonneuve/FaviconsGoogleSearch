// ==UserScript==
// @name         Favicons Google Search (easy javascript version)
// @namespace    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/
// @version      0.6.2
// @description  Faviconize Google Search
// @author       glachancecmaisonneuve
// @icon         https://raw.githubusercontent.com/glachancecmaisonneuve/FaviconsGoogleSearch/master/FaviconsGoogleSearchIcon.png
// @updateurl    https://github.com/glachancecmaisonneuve/FaviconsGoogleSearch/raw/master/FaviconsGoogleSearch.user.js
// @match        *://www.google.ca/search*
// @match        *://www.google.de/search*
// @match        *://www.google.com/search*
// @match        *://www.google.*/search*
// // ==/UserScript==

function imgHTML(href) {
    let imgurl = new URL(href);
    if (imgurl.origin.includes('translate')) {
        if (imgurl.hasAttribute('u')) {
            imgurl = new URL(imgurl.getAttribute('u'));
        }
    }
    return `<img style='position:absolute; overflow:hidden; width:32px; left:-40px; top:0px;' src='https://www.google.com/s2/favicons?domain=${imgurl.origin}' />`;
}

Array.from(document.querySelectorAll("div.r > a")).forEach(function(e) {
    if (e.hasAttribute('hreforiginal')) {
		console.log(imgHTML(e.getAttribute('hreforiginal')));
        e.insertAdjacentHTML("beforeBegin", imgHTML(e.getAttribute('hreforiginal')));
    }
    else if (e.hasAttribute('href')) {
		console.log(imgHTML(e.getAttribute('href')));
        e.insertAdjacentHTML("beforeBegin", imgHTML(e.getAttribute('href')));
    }
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
