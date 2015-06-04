$(function(){

	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(afficher_carte); 
	} 
	else { 
		alert("Désolé, votre navigateur ne supporte pas la géolocalisation"); 
	} 

	function afficher_carte(position){ 
		var latitude = position.coords.latitude; 
		var longitude= position.coords.longitude; 
		// création d’une nouvelle carte par Google Maps s’effectue simplement par le code suivant auquel on fournit comme paramètres la latitude et la longitude trouvées par l’API de géolocalisation. 
		var latlng = new google.maps.LatLng(latitude, longitude); 
		// configuration d'un tableau contenant les paramètres 
		 var myOptions = { 
					             zoom: 15, 
					             center: latlng, 
					             mapTypeId: google.maps.MapTypeId.ROADMAP 
									};    
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
		var marker = new google.maps.Marker({ 
		             position: latlng,  
		             map: map,  
		             title:"Vous êtes ici"  
		}); 
	}




	
});