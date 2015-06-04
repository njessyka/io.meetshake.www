$(function(){

  var locations = [
     	[ 'Marina', 48.796778, 2.310031,3],
			[ 'Pauline', 48.792364, 2.312713,2],
			[ 'Sandra',48.793350, 2.303604,1]
    ];
    
    
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 13,
      center: new google.maps.LatLng(48.79638, 2.31159),
      mapTypeControl: false,
      scaleControl: true,
    streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
 

  var infowindow = new google.maps.InfoWindow();
 
  var i;
 
  for (i = 0 ; i < locations.length ; i++) {  
      var latit = locations[i][1];
      var longit = locations[i][2];
  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latit, longit),
        map: map,
        title: locations[i][0]
      });
 
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          };
      })(marker, i));
    }
  

});