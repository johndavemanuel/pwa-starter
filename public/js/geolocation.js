// Function that gets the location and returns it
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, locationError);
  } else {
    console.log("Geo Location not supported by browser");
  }
}
// Function that retrieves the position
function showPosition(position) {
  var location = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude
  }
  console.log(location)
}

// Function for error getting location
function locationError(error) {
	switch(error.code) {
			case error.PERMISSION_DENIED:
					return console.log("User denied the request for Geolocation.");
					break;
			case error.POSITION_UNAVAILABLE:
					return console.log("Location information is unavailable.");
					break;
			case error.TIMEOUT:
					return console.log("The request to get user location timed out.");
					break;
			case error.UNKNOWN_ERROR:
					return console.log("An unknown error occurred.");
					break;
	}
}

// Show location in a app
function showInMap(pos) {
	var latlon = pos.coords.latitude + "," + pos.coords.longitude;
	var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
	var map = document.querySelector("mapholder");
	map.innerHTML = "<img src='"+img_url+"'>";
}

//request for location
getLocation();