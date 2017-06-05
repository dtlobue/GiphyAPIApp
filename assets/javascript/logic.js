// need initial document on body line of code to ensure page loads first before code runs (I think?)

//declaration of global variables, incl array of initial buttons
var topics = ["Shawn Kemp", "Michael Jordan", "Dominique Wilkins", "Julius Erving", "Vince Carter", 
"Jason Richardson", "Shaquille O'Neal", "Spud Webb", "Scottie Pippen", "Darryl Dawkins", "Clyde Drexler", 
"Blake Griffin"];

var APIKey = "&api_key=dc6zaTOxFJmzC";
//Do I need to put the queryURL here? Might be below
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[0] + APIKey;

// jQuery document ready function to make sure DOM has loaded completely before running this page
$(document).ready(function() {
	console.log("good to go");
	console.log(topics);

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
		//Grabbing and storing the data-name property value in a variable
		var dunkerName = $(this).attr("data-name");
		// Constructing a QueryURL using the dunker name
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dunkerName + APIKey + "&limit=10";
		//I'm unsure where the AJAX GET request should go but I've seen others put it first...
		//It still seems to make more sense to put it AFTER the for loop.
		//AJAX GET Request:
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		//Data should now be back from request
		.done(function(response) {
			console.log(response);
			//Storing response data in a variable for easier use
			var results = response.data;

			// Looping through each result item
          	for (var i = 0; i < results.length; i++) {

            	// Creating and storing a div tag
            	var dunkDiv = $("<div>");

            	// Creating a paragraph tag with the result item's rating
            	var p = $("<p>").text("Rating: " + results[i].rating);

            	// Creating and storing an image tag
            	var dunkImage = $("<img>");
            	// Setting the src attribute of the image to a property pulled off the result item
            	//It should be: dunkImage.attr("src", results[i].images_fixed_height_still.url);
            	dunkImage.attr("src", results[i].images.fixed_height_still.url);
            	//Setting the data-state attribute of the image to still
            	dunkImage.attr("data-state", "still");
            	//Giving each image a class, which will be used below
            	dunkImage.addClass("dunk-video");

            	// Appending the paragraph and image tag to the dunkDiv
            	dunkDiv.append(p);
            	dunkDiv.append(dunkImage);

            	// Prependng the dunkDiv to the HTML page in the "#dunkers" div
            	$("#dunkers").prepend(dunkDiv);
			}

		});
	});

//When clicking on one of the static GIFs, it animates. When clicked again, it reverts to static.
	var state = $(this).attr("data-state");

	$("dunk-video").on("click", function() {

		if (state === "still") {
			$(this).attr("src", response.data[n].images.fixed_height.url);
			$(this).attr("data-state", "animate");
		} else {
			$(this).attr("src", response.data[n].images.fixed_height_still.url);
			$(this).attr("data-state", "still");
		} 

	});


			 // if/else statement
		//	 if (state === "still") {
		//	 	$("dunk-video").on("click", function() {
		//	 		$(this).attr("src", response.data[n].images.fixed_height.url);
		//	 		$(this).attr("data-state", "animate");
		//	 	    else if (state === "animate") {
		//	 		$(this).attr("src", response.data[n].images.fixed_height_still.url);
		//	 		$(this).attr("data-state", "still");
			// 		else {
		//	 			console.log("Hmm, very interesting!");
		//	 		}
		//	 	}
			 	
			 

	
		

		

	

	

});


//Search box takes submitted data, adds it to array, and goes through same process as other buttons

//function initializations?







