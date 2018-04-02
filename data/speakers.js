

var keynoteData = {
  speakers: [
    { name: "Wilhelm Weise", imageURL: "assets/images/speakers/wilhelm.jpeg", title: "Head of India Development Center at ABB Global Industries and Services Private Limited" },
    { name: "Sandeep Alur", imageURL: "assets/images/speakers/sandeep.jpeg", title: "Director - Partner Technology Engagements at Microsoft" },
  ]
};

var featuredSpeakerData = {
  featuredSpeakers: [
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/dhami.jpg", title: "" },
    { name: "Ilyas", imageURL: "assets/images/speakers/ilyas.png", title: " " },
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/anoop.jpg", title: "" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "" },
    { name: "Anand Gothe", imageURL: "assets/images/speakers/anand.jpg", title: "" }
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
