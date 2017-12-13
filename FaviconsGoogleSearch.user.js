// ==UserScript==
// @name         Favicons in Google Search
// @namespace    https://github.com/glachancecmaisonneuve/UserScripts/
// @version      0.1
// @description  Faviconize google search
// @author       glachance
// @require      http://code.jquery.com/jquery-latest.js
// @icon         https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png
// @updateurl    https://github.com/glachancecmaisonneuve/UserScripts/raw/master/FaviconsGoogleSearch.user.js
// @match        https://www.google.ca/*
// @match        https://www.google.com/*
// @match        https://encrypted.google.com/*
// @match        https://encrypted.google.ca/*
// @grant        unsafeWindow
// ==/UserScript==

var favicon_src;

favicon_src = function(url) {
  return "https://www.google.com/s2/favicons?domain=" + url;
};

$(function() {
  return $('h3.r > a').each(function() {
    return $(this).prepend("<img style='position:absolute; overflow:hidden; width: 32px; left: -40px; top: 0px;' src=" + favicon_src($(this).attr("href") + " />"));
  });
});
