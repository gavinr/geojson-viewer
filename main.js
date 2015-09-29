function getUrlParameter() {
	var sPageURL = window.location.search.substring(1);
	if (sPageURL !== '') {
		var location = sPageURL.indexOf("=");
		return sPageURL.substring(location + 1);
	} else {
		return false;
	}
}



var url = getUrlParameter('url');
if (url !== false) {
	$("#entryFormWrapper").remove();

	var map = L.map('map').setView([51.505, -0.09], 2);

	L.esri.basemapLayer('Gray').addTo(map);
	$.ajax({
		url: url,
		success: function(res) {
			var lyr = L.geoJson(res, {
				onEachFeature: function(feature, layer) {
					layer.bindPopup(JSON.stringify(feature.properties));
				}
			}).addTo(map);
			map.fitBounds(lyr.getBounds());
			$(".spinner").remove();
		}.bind(this),
		dataType: 'json',

		error: function(err) {
			$(".spinner").remove();
			console.error('Error:', err);
			alert("Error. Please check the URL and click 'Try Another'.");
		},
		timeout: function(err) {
			$(".spinner").remove();
			console.error('timeout:', err);
			alert("Timeout. Try again later?");
		}
	});
} else {
	$("#map").remove();

	$("#lookupUrlButton").click(function(event) {
		event.preventDefault();
		var newUrl = window.location.href + '?url=' + $("#urlInput").val();
		console.log('newUrl', newUrl);
		window.location.replace(newUrl);
	});
}