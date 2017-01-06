//Perfoming an AJAX GET request to our queryURL
var queryURL = "URL_GOES_HERE_WITH_ANY_NECESSARY_VARIABLES";

$.ajax({
    url: queryURL,
    method: "GET"
}) 

.done(function(response) {

	//Log the response
	console.log(response);

	//...
	//Do something here with your JSON response
	//...

});