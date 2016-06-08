$(function () {
	// Owl Carousel
	var owl = $('.slider');
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		navContainer: "arrow"
	});

	$(".arrow").click(function () {
		owl.trigger("next.owl.carousel");
	});

	// my-menu

	$(".top-menu").after("<div id='my-menu'>");
	$(".top-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").mmenu({
		extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: "Menu"
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	// Toggle-mnu
	$(".mobile-mnu").click(function () {
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	
});
