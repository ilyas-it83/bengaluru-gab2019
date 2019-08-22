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


	var speakers = [ 
		{
			
			"fullName": "Gurucharan Subramani",
			"bio": null,
			"tagLine": "Azure, DevOps, IoT at ABB",
			"profilePicture": "",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "https://www.twitter.com/gurucharan94",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://in.linkedin.com/in/gurucharan94",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "https://medium.com/@gurucharan94",
				"linkType": "Blog"
			  }
			],
		  },
		  {
			
			"fullName": "Ilyas F",
			"bio": null,
			"tagLine": "IoT Evangelist at ABB",
			"profilePicture": "./assets/images/speakers/ilyas.png",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "https://www.twitter.com/ilyas_tweets",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/ilyasf/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "http://bornoncloud.com/",
				"linkType": "Blog"
			  }
			],
		  },
		  {
			
			"fullName": "Neependra Khare",
			"bio": null,
			"tagLine": "Founder at CloudYuga, CNCF Ambassador, Corporate Trainer on Container Technologies",
			"profilePicture": "./assets/images/speakers/neependra.jpg",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "#",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/neependra/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "#",
				"linkType": "Blog"
			  }
			],
		  },
		  {
			
			"fullName": "Sandeep Alur",
			"bio": null,
			"tagLine": "AI Enthusiast, an Aspiring Data Scientist & a Cloud Practitioner. Driving Digital Transformation for Customers in India.",
			"profilePicture": "./assets/images/speakers/sandeep.jpeg",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "#",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/sandeepalur/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "#",
				"linkType": "Blog"
			  }
			],
		  },
		  {
			
			"fullName": "Swaminathan Vetri",
			"bio": null,
			"tagLine": "Technical Architect at Maersk Global Service Centres | Microsoft MVP",
			"profilePicture": "./assets/images/speakers/Swami_Latest.jpg",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "https://twitter.com/svswaminathan",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/swaminathanvetri/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "https://wannabeegeek.com/",
				"linkType": "Blog"
			  }
			],
		  },
		  {
			
			"fullName": "Nish Anil",
			"bio": null,
			"tagLine": "Senior PM .NET",
			"profilePicture": "./assets/images/speakers/nish.jpg",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "https://twitter.com/nishanil",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/nanil/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "https://blog.nishanil.com/",
				"linkType": "Blog"
			  }
			],
		  },
		  {
			
			"fullName": "Ritesh Modi",
			"bio": null,
			"tagLine": "Hon. Microsoft Regional Director, Author of 8 Best Seller books on Blockchain, Azure, Bots and DevOps",
			"profilePicture": "./assets/images/speakers/Ritesh.jpg",
			"isTopSpeaker": true,
			"links": [
			  {
				"title": "Twitter",
				"url": "#",
				"linkType": "Twitter"
			  },
			  {
				"title": "LinkedIn",
				"url": "https://www.linkedin.com/in/ritesh-modi/",
				"linkType": "LinkedIn"
			  },
			  {
				"title": "Blog",
				"url": "#",
				"linkType": "Blog"
			  }
			],
		  }
	];

	var organizers =  [	{
		"firstName": "Gurucharan",
		"lastName": "Subramani",
		"fullName": "Gurucharan Subramani",
		"bio": null,
		"tagLine": "E-Mobility @ ABB | Member of the .NET Foundation | Azure Community Buff",
		"profilePicture": "",
		"isTopSpeaker": true,
		"links": [
		  {
			"title": "Twitter",
			"url": "https://www.twitter.com/gurucharan94",
			"linkType": "Twitter"
		  },
		  {
			"title": "LinkedIn",
			"url": "https://in.linkedin.com/in/gurucharan94",
			"linkType": "LinkedIn"
		  },
		  {
			"title": "Blog",
			"url": "https://medium.com/@gurucharan94",
			"linkType": "Blog"
		  }
		],
	  },
	  {
			
		"fullName": "Ilyas F",
		"bio": null,
		"tagLine": "IoT Evangelist at ABB",
		"profilePicture": "./assets/images/speakers/ilyas.png",
		"isTopSpeaker": true,
		"links": [
		  {
			"title": "Twitter",
			"url": "https://www.twitter.com/ilyas_tweets",
			"linkType": "Twitter"
		  },
		  {
			"title": "LinkedIn",
			"url": "https://www.linkedin.com/in/ilyasf/",
			"linkType": "LinkedIn"
		  },
		  {
			"title": "Blog",
			"url": "http://bornoncloud.com/",
			"linkType": "Blog"
		  }
		],
	  },
	  {
			
		"fullName": "Swaminathan Vetri",
		"bio": null,
		"tagLine": "Technical Architect at Maersk Global Service Centres | Microsoft MVP",
		"profilePicture": "./assets/images/speakers/Swami_Latest.jpg",
		"isTopSpeaker": true,
		"links": [
		  {
			"title": "Twitter",
			"url": "https://twitter.com/svswaminathan",
			"linkType": "Twitter"
		  },
		  {
			"title": "LinkedIn",
			"url": "https://www.linkedin.com/in/swaminathanvetri/",
			"linkType": "LinkedIn"
		  },
		  {
			"title": "Blog",
			"url": "https://wannabeegeek.com/",
			"linkType": "Blog"
		  }
		],
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