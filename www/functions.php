<?php

if(isset($_POST['nom'])){
	$_SESSION['name'] = (string) $_POST['nom'];
}

if(isset($_SESSION['name'])){
	$name = $_SESSION['name'];
	
	if(in_array($name, $_SESSION['users'])){
		$msg = "Bienvenue " . $name . " !!";
	}else{
		$msg= "Pseudo ou mot de passe erroné";
		session_destroy();
	}
}else{
		$msg= "Pour accéder à l'ensemble des incroyables service Meet'Shake, 
			veuillez vous connecter !";
}

