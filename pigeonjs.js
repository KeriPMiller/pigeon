$(document).ready(function(){
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
		
	$(".gallery").mouseenter(function(){
		 $(this).children(".hover-content").show("fade", 500);
			console.log("mouse is in");
		});
	$(".gallery").mouseleave(function(){
			$(this).children(".hover-content").hide("fade", 500);
			console.log("mouse is out");
		});
	// expand
		$(".gallery").click(function(){
			$(this).toggleClass("big",1000);
			$(this).children(".hover-content").css({"backgroundColor": "orange", "opacity":".7"});
			console.log("clicked");
		});
});