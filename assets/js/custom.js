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



(function ($) {



	// var source = $("#speakersTemplate").html();
	// var template = Handlebars.compile(source);

	// $(".mu-speakers-slider").html(template(speakerData));

	

	var keynoteSource = $("#keynoteTemplate").html();
	var keynotetemplate = Handlebars.compile(keynoteSource);

	$(".mu-keynote-slider").html(keynotetemplate(keynoteData));
	
	var featuredSpeakerSource = $("#featuredSpeakerTemplate").html();
	var featuredSpeakertemplate = Handlebars.compile(featuredSpeakerSource);

	$("#dvFeaturedSpeakers").html(featuredSpeakertemplate(featuredSpeakerData));


	var day1DevAgendaSource = $("#day1DevAgendaTemplate").html();
	var day1DevAgendaTemplate = Handlebars.compile(day1DevAgendaSource);
	$("#ulDay1DevAgendaTemplate").html(day1DevAgendaTemplate(day1AgendaData));

	var day1DevOSSAgendaSource = $("#day1DevOSSAgendaTemplate").html();
	var day1DevOSSAgendaTemplate = Handlebars.compile(day1DevOSSAgendaSource);
	$("#ulDay1DevOSSAgendaTemplate").html(day1DevOSSAgendaTemplate(day1AgendaData));
	
	var day1ItProAgendaSource = $("#day1ItProAgendaTemplate").html();
	var day1ItProAgendaTemplate = Handlebars.compile(day1ItProAgendaSource);
	$("#ulDay1ItProAgendaTemplate").html(day1ItProAgendaTemplate(day1AgendaData));
	
	var day1SharepointAgendaSource = $("#day1SharepointAgendaTemplate").html();
	var day1SharepointAgendaTemplate = Handlebars.compile(day1SharepointAgendaSource);
	$("#ulDay1SharepointAgendaTemplate").html(day1SharepointAgendaTemplate(day1AgendaData));


	var day1OfficeAgendaSource = $("#day1OfficeAgendaTemplate").html();
	var day1OfficeAgendaTemplate = Handlebars.compile(day1OfficeAgendaSource);
	$("#ulDay1OfficeAgendaTemplate").html(day1OfficeAgendaTemplate(day1AgendaData));

	/* ----------------------------------------------------------- */
	/*  1. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
		if ($(window).scrollTop() > 150) {
			$('.mu-navbar').addClass('mu-nav-show');

		} else {
			$('.mu-navbar').removeClass('mu-nav-show');
		}
	});

	/* ----------------------------------------------------------- */
	/*  2. EVENT TIME COUNTER
	/* ----------------------------------------------------------- */

	$('#mu-event-counter').countdown('2018/02/02').on('update.countdown', function (event) {

		var $this = $(this).html(event.strftime(''
			+ '<span class="mu-event-counter-block"><span>%D</span> Days</span> '
			+ '<span class="mu-event-counter-block"><span>%H</span> Hours</span> '
			+ '<span class="mu-event-counter-block"><span>%M</span> Mins</span> '
			+ '<span class="mu-event-counter-block"><span>%S</span> Secs</span>'));
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
	/*  4. VIDEO POPUP
	/* ----------------------------------------------------------- */

	$('.mu-video-play-btn').on('click', function (event) {

		event.preventDefault();

		$('.mu-video-iframe-area').addClass('mu-video-iframe-display');

	});

	// when click the close btn

	// disappear iframe window

	$('.mu-video-close-btn').on('click', function (event) {

		event.preventDefault();

		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

	});

	// stop iframe if it is play while close the iframe window

	$('.mu-video-close-btn').click(function () {

		$('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

	});

	// when click overlay area

	$('.mu-video-iframe-area').on('click', function (event) {

		event.preventDefault();

		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

	});

	$('.mu-video-iframe-area, .mu-video-iframe').on('click', function (e) {
		e.stopPropagation();
	});


	/* ----------------------------------------------------------- */
	/*  5. SPEAKERS SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

	$('.mu-speakers-slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					slidesToShow: 1
				}
			}
		]
	});





	/* ----------------------------------------------------------- */
	/*  6. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */

	/* Start for accordion #1*/
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
	});

	//The reverse of the above on hidden event:

	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
	});


	/* ----------------------------------------------------------- */
	/*  7. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */

	jQuery('.mu-menu').on('click', 'li a', function () {
		$('.mu-navbar .in').collapse('hide');
	});



	// var div = document.createElement("div");

	// document.getElementsByTagName('body')[0].appendChild(div);
	// div.outerHTML = "<div  id='botDiv'  style='margin-left:80%; height: 38px; position: fixed; bottom: 0; z-index: 1000; background-color: #fff'><div id='botTitleBar' style='height: 38px; width: 250px; position:fixed; cursor: pointer;'></div><iframe width='250px' height='400px' src='https://webchat.botframework.com/embed/mvpconfbot_HFDddVnjHWr?s=sgfp1RLelXk.cwA.4u8.zGpyx65YNM6UyQaRJQW3TL6HghkDz4dn8l248NtRQBI'></iframe></div>";

	// document.querySelector('body').addEventListener('click', function (e) {
	// 	e.target.matches = e.target.matches || e.target.msMatchesSelector;
	// 	if (e.target.matches(style = '#botTitleBar')) {
	// 		var botDiv = document.querySelector('#botDiv');
	// 		botDiv.style.height = botDiv.style.height == '400px' ? '38px' : '400px';
	// 	};
	// });



	$("#chat-bot .bot-header").click(function (e) {
		e.preventDefault();
		var t = $("#chat-bot");
		parseInt(t.css("bottom").substring(0, t.css("bottom").lastIndexOf("px"))) < -100 && ($("#chat-bot").animate({
			bottom: "-5px"
		}), $("#chat-bot .bot-header button").show(), $(this).removeClass("hvr-bob-hover"))
	});

	$("#chat-bot .bot-header .btn-min").click(function () {
		$("#chat-bot").animate({
			bottom: "-523px"
		}), $("#chat-bot .bot-header button").hide(), $("#chat-bot .bot-header").addClass("hvr-bob-hover")
	});

	$("#chat-bot .bot-header .btn-refresh").click(function () { });

	$(".round, .minimize").click(function () {
		$(".chatContainer").toggleClass("chatContainer-rotate")
	});

	$(".clear-re").click(function () {
		$(".app-container iframe").attr("src", $(".app-container iframe").attr("src"));
	});

	$('#botDiv').load(function() {

		$("#botDiv").contents().find(".wc-header").hide();
	});
	
	
	 $("form#frmSignup button#btnSignupForUpdates").bind("click",function(){
	 	var emailAddress = $("form#frmSignup input#txtEmailAddress").val();
	 	remoteServices.OnSignupForUpdates(emailAddress);
	 });

	 $("#btnViewAllSpeakers").bind("click",function(){
		window.location="speakers.html";
	 });
})(jQuery);




