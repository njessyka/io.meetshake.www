$(function(){

	$("#bt_submit").click(function() {

		var civ = $("input:radio:checked").val();
		var nom = $("#nom").val();
		var prenom = $("#prenom").val();
		var email = $("#email").val();
		var comment = $("#comment").val();

		$.ajax({
			method:"GET",
			url:"ajax.php",
			data: {
				civilite: civ
			}

		}).done(function(msg){
			alert(msg);
		});

	});
});