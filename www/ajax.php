<?php 

	$civilite = $_GET['civilite'];  // message qui sera renvoyé dans l'alert

	if($civilite=="monsieur"){
		echo "Bonjour monsieur";
	}elseif ($civilite=="madame") {
		echo "Bonjour madame";
	}
	else{
		echo "Bonjour mademoiselle";
	}

 ?>