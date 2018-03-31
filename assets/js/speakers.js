
$(function () {


    Handlebars.registerHelper("counter", function (index){
        return index + 1;
    });
    
    var allSpeakersSource = $("#allSpeakersTemplate").html();
    var allSpeakersTemplate = Handlebars.compile(allSpeakersSource);

    $("#lstAllSpeakers").html(allSpeakersTemplate(allSpeakersData));
    

    var speakerDetailSource = $("#speakersDetailTemplate").html();
    var speakerDetailTemplate = Handlebars.compile(speakerDetailSource);

    

    $("#speakerDetailContent").html(speakerDetailTemplate(allSpeakersData));
    
    

   // Call Gridder
   $('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 30,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,                      // Show Navigation
        nextText: "<i class=\"fa fa-arrow-right\"></i>",
        prevText: "<i class=\"fa fa-arrow-left\"></i>",
        closeText: "<i class=\"fa fa-times\"></i>",
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
        }
    });




});