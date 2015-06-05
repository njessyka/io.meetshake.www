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

// 	function swipeleftHandler(elem){
// 		var angle_init = 45;

// /*		$(elem).rotate({
//           angle: angle_init,
//           animateTo:110
//        });*/

// 			$(elem).rotate(45);

// 		// angle_init = angle_init + 5; // incrémentation

// 		$(elem).parent().next().find("img").css({display:"block"});

// 	}

	$("img").on("swipeleft", function(){

		// $(this).hide().parent().next().find("img").show();
		$(this).addClass("swipeToLeft").parent().next().find("img").show().addClass("currentImg");

	});

	$("img").on("swiperight", function(){
		// $(this).hide().parent().prev().find("img").show();
		$(this).addClass("swipeToRight").parent().prev("img").show().addClass("currentImg");

	});

});