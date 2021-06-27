function getUrlParameter() {
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
], function (Map, MapView, GeoJSONLayer) {
  var url = getUrlParameter("url");
  if (url !== false) {
    const element = document.querySelectorAll("#entryFormWrapper")[0];
    element.parentNode.removeChild(element);

    var geojsonLayer = new GeoJSONLayer({
      url: url,
    });

    geojsonLayer.watch("loadStatus", function (status) {
      if (status === "failed") {
        alert("Error. Please check the URL and click 'Try Another'.");
      }
    });

    geojsonLayer.when(function () {
      view.extent = geojsonLayer.fullExtent;
      geojsonLayer.popupTemplate = geojsonLayer.createPopupTemplate();
    });

    var map = new Map({
      basemap: "gray",
      layers: [geojsonLayer],
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [0, 0],
      zoom: 3,
    });
  } else {
    const element = document.querySelectorAll("#map")[0];
    element.parentNode.removeChild(element);

    const urlInput = document.querySelectorAll("#urlInput")[0];
    document
      .querySelectorAll("#lookupUrlButton")[0]
      .addEventListener("click", function (event) {
        event.preventDefault();
        var newUrl = window.location.href + "?url=" + urlInput.value;
        window.location.replace(newUrl);
      });
  }
});
