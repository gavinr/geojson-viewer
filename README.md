geojson-viewer
==============

View GeoJSON based on a URL param

Usage
=====
Pass a GeoJSON url to the parameter in the form http://yourdomain.com?url=________ 

Examples:

* [Demo 1 - US National Parks](http://gavinr.github.io/geojson-viewer/?url=http://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/US_National_Parks/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&f=pgeojson&token=)
* [Demo 2 - US Nuclear Plants](http://gavinr.github.io/geojson-viewer/?url=https://raw.githubusercontent.com/gavinr/usa-nuclear-energy-plants/master/usa-nuclear-energy-plants.geojson)
* [Demo 3 - Washington DC Bike Lanes](http://gavinr.github.io/geojson-viewer/?url=https://rawgit.com/Esri/geojson-layer-js/master/data/dc-bike-lanes.json)
* [Demo 4 - Allegheny County Blazed Trails Locations](http://gavinr.github.io/geojson-viewer/?url=http://openac-alcogis.opendata.arcgis.com/datasets/d3b0c229af014912a957c6b9a1e46a50_0.geojson)

Technologies
============
  * https://github.com/Leaflet/Leaflet
  * https://github.com/Esri/esri-leaflet
