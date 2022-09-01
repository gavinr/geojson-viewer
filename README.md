# GeoJSON Viewer

View GeoJSON based on a URL param

## Usage

Pass a GeoJSON url to the parameter in the form <https://gavinr.github.io/geojson-viewer/?url=________>

Examples:

* [Demo 1 - US National Parks](https://gavinr.github.io/geojson-viewer/?url=http%3A%2F%2Fservices1.arcgis.com%2Fg2TonOxuRkIqSOFx%2Farcgis%2Frest%2Fservices%2FUS_National_Parks%2FFeatureServer%2F0%2Fquery%3Fwhere%3D1%253D1%26objectIds%3D%26time%3D%26geometry%3D%26geometryType%3DesriGeometryEnvelope%26inSR%3D%26spatialRel%3DesriSpatialRelIntersects%26distance%3D%26units%3DesriSRUnit_Meter%26outFields%3D*%26returnGeometry%3Dtrue%26maxAllowableOffset%3D%26geometryPrecision%3D%26outSR%3D4326%26returnIdsOnly%3Dfalse%26returnCountOnly%3Dfalse%26returnExtentOnly%3Dfalse%26orderByFields%3D%26groupByFieldsForStatistics%3D%26outStatistics%3D%26resultOffset%3D%26resultRecordCount%3D%26returnZ%3Dfalse%26returnM%3Dfalse%26quantizationParameters%3D%26f%3Dpgeojson%26token%3D)
* [Demo 2 - Washington DC Bike Lanes](https://gavinr.github.io/geojson-viewer/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FEsri%2Fgeojson-layer-js%40master%2Fdata%2Fdc-bike-lanes.json)
* [Demo 3 - Allegheny County Blazed Trails Locations](https://gavinr.github.io/geojson-viewer/?url=https%3A%2F%2Fopendata.arcgis.com%2Fdatasets%2Fd182439a9a6344fca2c5bf717b9cace8_0.geojson)

## Technologies

* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) - [GeoJSONLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#)

## Advanced Usage

Some additional URL parameters you can use:

* `silent=true` - do not show the buttons or GitHub banner. [Example](https://gavinr.github.io/geojson-viewer/?silent=true&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FEsri%2Fgeojson-layer-js%40master%2Fdata%2Fdc-bike-lanes.json)
* `swipeLayer=<url>` - second layer to show as a swipe. [Example](https://gavinr.github.io/geojson-viewer/?url=https%3A%2F%2Fservices.arcgis.com%2FP3ePLMYs2RVChkJx%2Farcgis%2Frest%2Fservices%2FUSA_States_Generalized%2FFeatureServer%2F0%2Fquery%3Fwhere%3D1%253D1%26outFields%3D*%26f%3Dgeojson&swipeLayer=https%3A%2F%2Fservices.arcgis.com%2FP3ePLMYs2RVChkJx%2Farcgis%2Frest%2Fservices%2FUSA_Counties_Generalized%2FFeatureServer%2F0%2Fquery%3Fwhere%3DPOP_SQMI%3E50%26outFields%3D*%26f%3Dgeojson)
