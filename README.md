geojson-viewer
==============

View GeoJSON based on a URL param

Usage
=====
Pass a GeoJSON url to the parameter in the form http://yourdomain.com?url=XYZ. Example:

`http://gavinr.com/geojson/?url=http://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/US_National_Parks/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Meter&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&f=pgeojson&token=`

Technologies
============
  * https://github.com/Leaflet/Leaflet
  * https://github.com/Esri/esri-leaflet