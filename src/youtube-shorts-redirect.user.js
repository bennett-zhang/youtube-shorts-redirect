// ==UserScript==
// @name         YouTube Shorts Redirect
// @namespace    https://github.com/bennett-zhang
// @version      0.1
// @description  Redirect YouTube shorts to default player
// @author       Bennett Zhang
// @match        *://*.youtube.com/*
// @icon         /icons/icon32.png
// @icon64       /icons/icon64.png
// ==/UserScript==

{
  const redirect = function(url) {
    if (url.includes("shorts/")) {
      window.location.replace(url.replace("shorts/", "watch?v="));
    }
  }

  // Desktop YouTube
  window.addEventListener("yt-navigate-start", evt => {
    redirect(evt.target.baseURI);
  });

  // Mobile YouTube
  window.addEventListener("state-navigatestart", evt => {
    redirect(evt.detail.href);
  });

  redirect(window.location.href);
}