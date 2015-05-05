$(document).ready(function(){
	$("#gallery-nav li a").mouseenter(function(){
		$(this).animate({
			color: "green"});
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
		$(this).addClass("big");
		$(this).children(".hover-content").css({"backgroundColor": "orange", "opacity":".5"});
		console.log("regular click only");
	});
		$(".big").click(function(){
		$(this).removeClass("big");
		$(this).children(".hover-content").css({"backgroundColor": "#49433c", "opacity":".9"});
		console.log("big class clicked");
	});
});