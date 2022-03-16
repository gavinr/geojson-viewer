# GeoJSON Viewer

View GeoJSON based on a URL param

## Usage

Pass a GeoJSON url to the parameter in the form https://gavinr.github.io/geojson-viewer/?url=________ 

Examples:

* [Demo 1 - US National Parks](https://gavinr.github.io/geojson-viewer/?url=http://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/US_National_Parks/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&f=pgeojson&token=)
* [Demo 2 - Washington DC Bike Lanes](https://gavinr.github.io/geojson-viewer/?url=https://cdn.jsdelivr.net/gh/Esri/geojson-layer-js@master/data/dc-bike-lanes.json)
* [Demo 3 - Allegheny County Blazed Trails Locations](https://gavinr.github.io/geojson-viewer/?url=https://opendata.arcgis.com/datasets/d182439a9a6344fca2c5bf717b9cace8_0.geojson)

## Technologies

* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) - [GeoJSONLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#)
