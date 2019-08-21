
$(function () {


    Handlebars.registerHelper("counter", function (index){
        return index + 1;
    });
    
    var allSpeakersSource = $("#allSpeakersTemplate").html();
    //var allSpeakersTemplate = Handlebars.compile(allSpeakersSource);

    $("#lstAllSpeakers").html(allSpeakersTemplate(allSpeakersData));    

    var speakerDetailSource = $("#speakersDetailTemplate").html();
    //var speakerDetailTemplate = Handlebars.compile(speakerDetailSource);    

    $("#speakerDetailContent").html(speakerDetailTemplate(allSpeakersData));    
});