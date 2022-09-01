function getUrlParameter(c) {
  const url = new URL(window.location);
  return url.searchParams.get(c);
}

function getUrlParameterOld() {
  var sPageURL = window.location.search.substring(1);
  if (sPageURL !== "") {
    var location = sPageURL.indexOf("=");
    return sPageURL.substring(location + 1);
  } else {
    return false;
  }
}

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/GeoJSONLayer",
  "esri/widgets/Swipe",
], function (Map, MapView, GeoJSONLayer, Swipe) {
  var url = getUrlParameter("url");
  var silent = getUrlParameter("silent");
  var swipeLayerParam = getUrlParameter("swipeLayer");

  const finishLoadingMap = (geojsonLayer, swipeLayerUrl) => {
    geojsonLayer.when(function () {
      view.extent = geojsonLayer.fullExtent;
      geojsonLayer.popupTemplate = geojsonLayer.createPopupTemplate();
    });

    var map = new Map({
      basemap: "gray-vector",
      layers: [geojsonLayer],
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [0, 0],
      zoom: 3,
    });

    if (swipeLayerUrl) {
      const swipeLayer = new GeoJSONLayer({
        url: swipeLayerUrl,
      });
      map.add(swipeLayer);
      let swipe = new Swipe({
        view: view,
        leadingLayers: [geojsonLayer],
        trailingLayers: [geojsonLayer, swipeLayer],
        // direction: "vertical", // swipe widget will move from top to bottom of view
        position: 50, // position set to middle of the view (50%)
      });
      view.ui.add(swipe);
    }
  };

  const tryToMakeLayer = (url) => {
    return new Promise((resolve, reject) => {
      const geojsonLayer = new GeoJSONLayer({
        url: url,
      });

      geojsonLayer.watch("loadStatus", function (status) {
        if (status === "failed") {
          reject();
        } else if (status === "loaded") {
          resolve(geojsonLayer);
        }
      });

      geojsonLayer.load();
    });
  };

  if (url !== false && url !== null) {
    const element = document.querySelectorAll("#entryFormWrapper")[0];
    element.parentNode.removeChild(element);

    tryToMakeLayer(url).then(
      (layer) => {
        finishLoadingMap(layer, swipeLayerParam);
      },
      () => {
        // error - could not load
        const url2 = getUrlParameterOld();
        tryToMakeLayer(url2).then(
          (layer) => {
            console.warn(
              "PLEASE URL ENCODE YOUR URLS - THIS URL FORMAT WILL STOP WORKING SOON - https://meyerweb.com/eric/tools/dencoder/"
            );
            finishLoadingMap(layer, swipeLayerParam);
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
    document
      .querySelectorAll("#lookupUrlButton")[0]
      .addEventListener("click", function (event) {
        event.preventDefault();
        var newUrl =
          window.location.href + "?url=" + encodeURIComponent(urlInput.value);
        window.location.replace(newUrl);
      });
  }

  if (silent === "true") {
    const idsToHide = ["githubFlagLink", "buttonWrapper"];
    idsToHide.forEach((id) => {
      document.getElementById(id).classList.add("hidden");
    });
  }
});
