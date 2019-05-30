function initMap() {
  var portland = {lat: 45.523064, lng: -122.676483};

  // init the map
  var map = new google.maps.Map(
    document.getElementById('map'), 
    {zoom: 12, center: portland}
  );

  // function to add markers to map
  function addMarker(location, map) {  
      var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
  }

  for(var i in cats) {
    console.log(cats[i].color + cats[i].dateFound + cats[i].breed + cats[i].size);
  }
}