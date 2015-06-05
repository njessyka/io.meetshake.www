$(function(){
	
	
	var users = [
     	[3, 'Marina','img/users/marina_3/marina_3_profile.jpg',24],
			[2, 'Pauline','img/users/pauline_2/pauline_2_profile.jpg',19],
			[ 1,'Sandra','img/users/sandra_1/sandra_1_profile.jpg',28]
    ];

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
	  var currentId = locations[i][3];
  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latit, longit),
        map: map,
        title: locations[i][0]
      });
 
      google.maps.event.addListener(marker, 'click', (function(marker, i) {

		var imgUrl, user, age, content ,idUser, prenom;

		for(var j=0; j < users.length; j++ ){
			user = users[j];
			idUser = user[0] ;			
			
			if(idUser === currentId){
				prenom =  user[1];   //user's first name
				imgUrl = user[2];   //url image user
				age = user[3];   // user age
			}			
		}
		
		// content = "<div><img src='"+ imgUrl +"' class='img_miniat'><a href='profile_view.php?idReq="+ currentId +"' class='ui-icon-eye ui-btn-icon-right'></a><p>Prénom : "+ prenom +"<br>Age : "+ age +" ans <br></p></div>";		
		// content = "<div><img src='"+ imgUrl +"' class='img_miniat'><form method='GET' action='profile_view.php'><input type='hidden' value='"+ currentId+"'> <input type='submit' id='view_profile' class='ui-icon-eye ui-btn-icon-right'></form><a  href='#' class='ui-icon-eye ui-btn-icon-right' id='view_profile'></a><p>Prénom : "+ prenom +"<br>Age : "+ age +" ans <br></p></div>";		
		content = "<div><img src='"+ imgUrl +"' class='img_miniat'><input type='hidden' id='id_user' value='"+ currentId+"'><a id='view_profile' data-icon='eye' class='ui-icon-eye ui-btn-icon-right'></a><p>Prénom : "+ prenom +"<br>Age : "+ age +" ans <br></p></div>";		
	
          return function() {
			// window.location.replace("profile_view.php?idReq="+ currentId);
            infowindow.setContent(content);
            infowindow.open(map, marker);
          };
      })(marker, i));
    }
  

});