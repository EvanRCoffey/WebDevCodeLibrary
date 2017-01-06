//Pull zip code with user's location, logs it and returns it
function pullZip() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			
			var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyB5gO1fP3gEusaJcOv3dnIEiVIEIbZKALU";

	    	$.ajax({ url: queryURL, method: "GET" }).done(function(response) {
				for (var i = 0; i < response.results[0].address_components.length; i++) {
					if (response.results[0].address_components[i].types[0] === "postal_code") {
						var zipCode = response.results[0].address_components[i].long_name
						console.log("Zip code = " + zipCode);
						return zipCode;
					}
				}
	    	})
	    })
	}
}

//Call the function
pullZip();