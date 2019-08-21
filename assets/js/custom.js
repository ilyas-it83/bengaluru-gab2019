/**	
	* Template Name: Eventoz
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FIXED MENU
	2. EVENT TIME COUNTER
	3. MENU SMOOTH SCROLLING
	4. VIDEO POPUP
	5. SPEAKERS SLIDEER ( SLICK SLIDER )
	6. BOOTSTRAP ACCORDION 
	7. MOBILE MENU CLOSE  
	
	
**/
$("#DateCountdown").TimeCircles({
	animation: "smooth",
	bg_width: 0.3,
	fg_width: 0.03333333333333333,
	circle_bg_color: "#60686F",
	time: {
	  Days: {
		text: "Days",
		color: "#FFCC66",
		show: true
	  },
	  Hours: {
		text: "Hours",
		color: "#99CCFF",
		show: true
	  },
	  Minutes: {
		text: "Minutes",
		color: "#BBFFBB",
		show: true
	  },
	  Seconds: {
		text: "Seconds",
		color: "#FF9999",
		show: true
	  }
	}
});

Handlebars.registerHelper("ifEquals", function(arg1, arg2, options) { // Use Correct Social Media Icon Link for Speakers
	return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

(function ($) {


	var speakers = [ { 						           
		fullName: "Sanjeev Sharma",
		tagLine: "ABB India Head [KeyNote]",
		profilePicture: "assets/images/2019/Sanjeev.jpg",  
		links: [
			{
				"title": "Twitter",
				"url": "https://twitter.com/aaa",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/bb/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "ccc",
				"linkType": "Blog"
			  }
		]
	}
	];

	var organizers =  [ { 						           
		fullName: "Sanjeev Sharma",
		bio: null,
		tagLine: "ABB India Head [KeyNote]",
		profilePicture: "assets/images/2019/Sanjeev.jpg",  
		isTopSpeaker: false,
		links: [
			{
				"title": "Twitter",
				"url": "https://twitter.com/aaa",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/bb/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "ccc",
				"linkType": "Blog"
			  }
		]
	}
	];
	var featuredSpeakertemplate = Handlebars.compile($("#featuredSpeakerTemplate").html());
	speakers = {speakers: speakers};
	var featuredSpeakerList = featuredSpeakertemplate(speakers);
	$("#dvFeaturedSpeakers").html(featuredSpeakerList);

	var organizersTemplate = Handlebars.compile($("#organizersTemplate").html());
	organizers = {organizers: organizers};
	var organizersList = organizersTemplate(organizers);
	$("#dvorganizers").append(organizersList);

	
	jQuery(window).bind('scroll', function () {
		if ($(window).scrollTop() > 150) {
			$('.mu-navbar').addClass('mu-nav-show');

		} else {
			$('.mu-navbar').removeClass('mu-nav-show');
		}
	});



	/* ----------------------------------------------------------- */
	/*  3. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
		topMenu = $(".mu-menu"),
		topMenuHeight = topMenu.outerHeight() + 13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 22;
		jQuery('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1500);
		e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass("active")
				.end().filter("[href=\\#" + id + "]").parent().addClass("active");
		}
	})
	


	/* ----------------------------------------------------------- */
	/*  7. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */

	jQuery('.mu-menu').on('click', 'li a', function () {
		$('.mu-navbar .in').collapse('hide');
	});
})(jQuery);