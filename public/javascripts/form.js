// Populate breed array from JSON file
var breed_arr = [];
$(function () {
  $.ajax({
    'type': 'GET',
    'url': '../cat_breeds.json',
    'success': function (data) {
      for (i in data)
        breed_arr.push(data[i]);
    }
  })
});

// Autocomplete breed element with breed array as source
$("#breed").autocomplete({
  source: breed_arr
});

// Get current location and add it to long/lat form inputs 
function getLocation() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(getPosition, error);
  else
    alert("Browser doesn't support location services.");
}

function getPosition(position) {
  $("#lat").val(position.coords.latitude);
  $("#long").val(position.coords.longitude);
}

function error() {
  alert("Location services not enabled on browser");
} 