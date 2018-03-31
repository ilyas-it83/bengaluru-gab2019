

var keynoteData = {
  speakers: [
    { name: "To be Announced", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud Architect, Expert" }
  ]
};

var featuredSpeakerData = {
  featuredSpeakers: [
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/dhami.jpg", title: "" },
    { name: "Ilyas", imageURL: "assets/images/speakers/ilyas.png", title: " " },
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/anoop.jpg", title: "" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "" }
   
  ]
};

var speakerData = {
  speakers: [
    
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/anoop.jpg", title: "Enterprise Mobility Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "" }

  ]
};

var allSpeakersData = {};

allSpeakersData.speakers = [];

allSpeakersData.speakers =
  keynoteData.speakers.concat(
    featuredSpeakerData.featuredSpeakers.concat(
      speakerData.speakers));
