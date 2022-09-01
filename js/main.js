import { finishLoadingMap, tryToMakeLayer } from "./mapUtils.js";
import { getUrlParameter, getUrlParameterOld } from "./urlUtils.js";

const urlParam = getUrlParameter("url");
const colorParam = getUrlParameter("color");
const silentParam = getUrlParameter("silent");
const swipeLayerParam = getUrlParameter("swipeLayer");
const swipeLayerColorParam = getUrlParameter("swipeLayerColor");

if (urlParam !== false && urlParam !== null) {
  const element = document.querySelectorAll("#entryFormWrapper")[0];
  element.parentNode.removeChild(element);

  tryToMakeLayer(urlParam).then(
    (layer) => {
      finishLoadingMap(layer, colorParam, swipeLayerParam, swipeLayerColorParam);
    },
    () => {
      // error - could not load
      const url2 = getUrlParameterOld();
      tryToMakeLayer(url2).then(
        (layer) => {
          console.warn(
            "PLEASE URL ENCODE YOUR URLS - THIS URL FORMAT WILL STOP WORKING SOON - https://meyerweb.com/eric/tools/dencoder/"
          );
          finishLoadingMap(layer, colorParam, swipeLayerParam, swipeLayerColorParam);
        },
        () => {
          // error after try 2
          alert("Error. Please check the URL and click 'Try Another'.");
        }
      );
    }
  );
} else {
  const element = document.querySelectorAll("#map")[0];
  element.parentNode.removeChild(element);

  const urlInput = document.querySelectorAll("#urlInput")[0];
  document.querySelectorAll("#lookupUrlButton")[0].addEventListener("click", function (event) {
    event.preventDefault();
    var newUrl = window.location.href + "?url=" + encodeURIComponent(urlInput.value);
    window.location.replace(newUrl);
  });
}

if (silentParam === "true") {
  const idsToHide = ["githubFlagLink", "buttonWrapper"];
  idsToHide.forEach((id) => {
    document.getElementById(id).classList.add("hidden");
  });
}
