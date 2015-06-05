<?php

if(isset($_POST['nom'])){
	$name = (string) $_POST['nom'];
}


if(isset($_SESSION['name'])){
	$name = $_SESSION['name'];
	$msg = "Bienvenue " . $name . " !!";
}else{
	$msg= "Pour accéder à l'ensemble des incroyables service Meet'Shake, 
	veuillez vous connecter !";
}

