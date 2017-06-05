// need initial document on body line of code to ensure page loads first before code runs (I think?)

//declaration of global variables, incl array of initial buttons
var topics = ["Shawn Kemp", "Michael Jordan", "Dominique Wilkins", "Julius Erving", "Vince Carter", 
"Jason Richardson", "Shaquille O'Neal", "Spud Webb", "Scottie Pippen", "Darryl Dawkins", "Clyde Drexler", 
"Blake Griffin"];

var APIKey = "&api_key=dc6zaTOxFJmzC";

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[0] + APIKey;

// jQuery document ready function to make sure DOM has loaded completely before running this page
$(document).ready(function() {
	console.log("good to go");
	console.log(topics);

	//I'm unsure where the AJAX GET request should go but I've seen others put it first...
	//It still seems to make more sense to put it AFTER the for loop.
	//AJAX GET Request:
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		
	})


	//for loop running through variable holding the array and dynamically populating buttons on DOM
	//must also put string at index location into the created button
	for (i = 0; i < topics.length; i++) {
	// Attaches variable to jQuery code that will dynamically create a button
		var a = $("<button>");
	// adds class of dunker to each dynamically created button from above
		a.addClass("dunker");
	// adding a data-attribute
		a.attr("data-name", topics[i]);
	// providing button text
		a.text(topics[i]);
	// adding the buttons to the correct <div> in the DOM
		$("#dunkerButtons").append(a);

	}

	//Clicking on a button makes it go to the Giphy API and pull 10 *static* GIFs:
	// So, an on.click event. Make sure to include $(this) in it, which makes sure only the button clicked sends
	// it's VALUE to Giphy API.

// Selecting all elements with class dunker (the buttons created above) and adding on click event
	$(".dunker").on("click", function(event) {


	})
});
//When clicking on one of the static GIFs, it animates. When clicked again, it reverts to static.
// So: on click event(s)? See: giphy-example-hw-6.html

//Search box takes submitted data, adds it to array, and goes through same process as other buttons

//function initializations?







