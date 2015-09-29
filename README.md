geojson-viewer
==============

View GeoJSON based on a URL param

Usage
=====
Pass a GeoJSON url to the parameter in the form http://yourdomain.com?url=________ 

Examples:

* [Demo 1 - US National Parks](http://gavinr.github.io/geojson-viewer/?url=http://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/US_National_Parks/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&f=pgeojson&token=)
* [Demo 2 - US Nuclear Plants](http://gavinr.github.io/geojson-viewer/?url=https://raw.githubusercontent.com/gavinr/usa-nuclear-energy-plants/master/usa-nuclear-energy-plants.geojson)
* [Demo 3 - Munich traffic light locations](http://gavinr.github.io/geojson-viewer/?url=https://smartlane.io/dataset/34ff4726-a576-49d4-b3e7-fc54491d7815/resource/a4e397ad-cbd9-48bf-a77a-296c5fcc9559/download/output.geojson)

Technologies
============
  * https://github.com/Leaflet/Leaflet
  * https://github.com/Esri/esri-leaflet
