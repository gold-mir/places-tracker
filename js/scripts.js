// CONSTRUCTOR
function Place (name, location){
  this.name = name;
  this.location = location;
  this.landmarks = [];
  this.notes = [];
}

//New object instance of 'Place' constructor
var losAngeles = new Place("Los Angeles", "California");
losAngeles.landmarks.push("Hollywood walk of fame", "The Hollywood Sign");
losAngeles.notes.push("Fun place");



//FRONT-END LOGIC
//create a function to display information about Place
function displayPlaceInfo(place){
  $(".place-display h2").text(place.name); // will display name in h2
  $(".place-display h3:first-of-type").text(place.location); // will display location in h3
  place.landmarks.forEach(function(item){ // create a forEach function to loop over the landmarks array
    $(".place-display ul:first-of-type").append("<li>" + item + "</li>"); // and add the items to the landmarks ul (first-of-type) in a list
  });
  place.notes.forEach(function(item){ // create a forEach function to loop over the notes array
    $(".place-display ul:last-of-type").append("<li>" + item + "</li>");// and add the items to the notes ul (last-of-type since we don't have a 3rd <ul>)in a list
  });
  $(".place-display").show();
}

$(document).ready(function(){
  $("form#places-input").submit(function(event){
    event.preventDefault();
    var name = $("#name-of-place").val();
    var location = $("#location-of-place").val();

    var place2 = new Place(name, location);
    displayPlaceInfo(place2);
    });
  //displayPlaceInfo(losAngeles); //calls the losAngeles object
});
