// In general, you should not use importing as modules from the CDN for
// production apps, but here we are doing it to keep the code as simple as
// possible for this demo.
import MapView from "https://js.arcgis.com/4.24/@arcgis/core/views/MapView.js";
import GeoJSONLayer from "https://js.arcgis.com/4.24/@arcgis/core/layers/GeoJSONLayer.js";
import Swipe from "https://js.arcgis.com/4.24/@arcgis/core/widgets/Swipe.js";

export const finishLoadingMap = (geojsonLayer, geojsonLayerColor, swipeLayerUrl, swipeLayerColor) => {
  geojsonLayer.when(function () {
    view.extent = geojsonLayer.fullExtent;
    geojsonLayer.popupTemplate = geojsonLayer.createPopupTemplate();
  });

  if (geojsonLayerColor) {
    geojsonLayer.renderer.symbol.color = geojsonLayerColor;
  }

  var view = new MapView({
    container: "viewDiv",
    map: {
      basemap: "gray-vector",
      layers: [geojsonLayer],
    },
    center: [0, 0],
    zoom: 3,
  });

  if (swipeLayerUrl) {
    tryToMakeLayer(swipeLayerUrl).then((swipeLayer) => {
      if (swipeLayerColor) {
        swipeLayer.renderer.symbol.color = swipeLayerColor;
      }

      view.map.add(swipeLayer);
      let swipe = new Swipe({
        view: view,
        leadingLayers: [geojsonLayer],
        trailingLayers: [geojsonLayer, swipeLayer],
        // direction: "vertical", // swipe widget will move from top to bottom of view
        position: 50, // position set to middle of the view (50%)
      });
      view.ui.add(swipe);
    });
  }
};

export const tryToMakeLayer = (url) => {
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
