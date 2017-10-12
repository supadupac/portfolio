var anchor;

$(document).ready(function() {
	$("a").on("click", function(e) {
		e.preventDefault();
		anchor = $(this).attr("href");
		console.log($(anchor));
		console.log(anchor);
		$(".dot-ul a").removeClass("active");
		$(this).addClass("active");
		console.log('hello');
		$("html, body").animate(
			{
				scrollTop: $(anchor).offset().top
			},
			1000
		);
	});

	// init controller
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: { duration: "100%" }
	});

	// build scenes
	new ScrollMagic.Scene({ triggerElement: "#about" })
		.setClassToggle("#first", "active") // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({ triggerElement: "#photos" })
		.setClassToggle("#second", "active") // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({ triggerElement: "#contact" })
		.setClassToggle("#third", "active") // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});
