// ==UserScript==
// @name         Favicons in Google Search
// @namespace    https://github.com/glachancecmaisonneuve/UserScripts/
// @version      0.1
// @description  Faviconize google search
// @author       glachancecmaisonneuve
// @require      http://code.jquery.com/jquery-latest.js
// @icon         https://github.com/glachancecmaisonneuve/UserScripts/raw/master/FaviconsGoogleSearch.png
// @updateurl    https://github.com/glachancecmaisonneuve/UserScripts/raw/master/FaviconsGoogleSearch.user.js
// @match        https://www.google.ca/*
// @match        https://www.google.com/*
// @match        https://encrypted.google.com/*
// @match        https://encrypted.google.ca/*
// @match        https://*.google.*/*
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
