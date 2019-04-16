function getUrlParameter() {
	var sPageURL = window.location.search.substring(1);
	if (sPageURL !== '') {
		var location = sPageURL.indexOf("=");
		return sPageURL.substring(location + 1);
	} else {
		return false;
	}
}

require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/GeoJSONLayer"
], function(Map, MapView, GeoJSONLayer) {

	var url = getUrlParameter('url');
	if (url !== false) {
		$("#entryFormWrapper").remove();

		var geojsonLayer = new GeoJSONLayer({
			url: url
		});

		geojsonLayer.watch('loadStatus', function(status) {
			if(status === 'failed') {
				alert("Error. Please check the URL and click 'Try Another'.");
			}
		});

		
		geojsonLayer.when(function(){
			view.extent = geojsonLayer.fullExtent;
			geojsonLayer.popupTemplate = geojsonLayer.createPopupTemplate();
		});

		var map = new Map({
			basemap: "gray",
			layers: [geojsonLayer]
		});
	
		var view = new MapView({
			container: "viewDiv",
			map: map,
			center: [0,0],
			zoom: 3
		});

		
	} else {
		$("#map").remove();

		$("#lookupUrlButton").click(function(event) {
			event.preventDefault();
			var newUrl = window.location.href + '?url=' + $("#urlInput").val();
			window.location.replace(newUrl);
		});
	}

});

