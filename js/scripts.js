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

// adds click functionality to the add landmarks button
  $("#new-landmark").click(function(){
    $("#places-input input[name=landmarks]:last-of-type").after('<input type="text" class="form-control" name="landmarks">'); //.after() will put the new landmark after the last one
  });

// adds click functionality to the add notes button
  $("#new-note").click(function() {
    $("#places-input input[name=notes]:last-of-type").after('<input type="text" class="form-control" name="notes">'); //.after() will put the new notes after the last one
  });

  $("form#places-input").submit(function(event){
    event.preventDefault();
    var name = $("#name-of-place").val(); //variable to store the value of name
    var location = $("#location-of-place").val(); //variable to store the value of location

    var newPlace = new Place(name, location); // new instance of Place Object

    // function to loop over the landmarks input in the form
    $("#places-input input[name=landmarks]").each(function () {
      var newLandmark = $(this).val(); // //variable to store the value of landmarks
      newPlace.landmarks.push(newLandmark); // pushes each value of landmark into the landmarks array
    });

    // function to loop over the notes input in the form
    $("#places-input input[name=notes]").each(function () {
      var newNote = $(this).val(); // //variable to store the value of notes
      newPlace.notes.push(newNote); // pushes each value of note into the notes array
    });

    // displayPlaceInfo(place);
    displayPlaceInfo(newPlace); //calls the newPlace object
    $("#places-input").hide(); // hides the form once the ser clicks the submit button
    });
});
