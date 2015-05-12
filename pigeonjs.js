$(document).ready(function(){
	// menu anamations 
	$("#gallery-nav li a").mouseenter(function(){
		$(this).animate({
			color: "green"
		});
		console.log("mouse over nav link");
	});
	$("#gallery-nav li a").mouseleave(function(){
		$(this).animate({
			color:"#7fd47f"
		});
		console.log("mouseleave nav link");
	});
	$("#services-nav li a").mouseenter(function(){
		$(this).animate({
			color: "#4d1b7b"});

		console.log("mouse over nav link");
	});
	$("#services-nav li a").mouseleave(function(){
		$(this).animate({
			color:"#ac6fc7"
		});
			console.log("mouseleave nav link");
	});
	$("nav li a").mouseenter(function(){
		$(this).css("font-size","40px");

		console.log("css event");
		});
	$("nav li a").mouseleave(function(){
		$(this).css("font-size","35px");

		console.log("css event");
		});
	// gallery events
	$(".gallery").mouseenter(function(){
		 $(this).children(".hover-content").show("fade", 500);
			console.log("mouse is in");
		});
	$(".gallery").mouseleave(function(){
			$(this).children(".hover-content").hide("fade", 500);
			console.log("mouse is out");
		});
	//  gallery expand
		$(".gallery").click(function(){
			$(this).toggleClass("big",1000);
			$(this).children(".hover-content").css({"backgroundColor": "orange", "opacity":".7"});
			$(this).children(".bio").css({"display": "show"});
			console.log("clicked");
		});
	// services forms
	// var $weight = $("#shipping-weight").val();
	// var $item = $("#shipping-item").val(); tried setting var but did not work

	$("#calculate-button").click(function(){
		console.log("clicked Calculate");
		if ( $("#shipping-weight").val()< 2){
			alert("yes we can ship that" + " " + $("#shipping-item").val() + "!");
		}
		else if ($("#shipping-weight").val() > 3){
			alert("We might be able to ship that" + " " + $("#shipping-item").val() + " " + "if we attach a few pigeons together...");
		}
		else if ($("#shipping-weight").val()> 5) {
			alert("Nope, we can't ship that" + " " + $("#shipping-item" + "."));
		}else { alert("I don't think so.")};
	});
	// tracking number

	$("#track-button").click(function(){
		console.log("clicked tracking");
		// var trackingLength = document.getElementById('tracking-number').value;
		// if (trackingLength.length < 8) {
		// 	alert("Invalid Tracking number.");
		// 	return false;
		// } else{ return true;};
		// if true...	
	if ($("#tracking-number").val() % 2){
            console.log($("#tracking-number").val());
            alert("Your package is sedentary at Bryant Park.");
        }
        else if ($("#tracking-number").val() % 3){
            console.log($("#tracking-number").val());
            alert("Your package is probably definitely broken.");
            }
        else if ($("#tracking-number").val() % 5){
            console.log($("#tracking-number").val());
            alert("Your package is currently in the East River.");
        }else { alert("umm...")};
            });
});