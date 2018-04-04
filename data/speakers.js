

var keynoteData = {
  speakers: [
    { name: "Wilhelm Weise", imageURL: "assets/images/speakers/wilhelm.jpeg", title: "Head of India Development Center at ABB Global Industries and Services Private Limited" },
    { name: "Sandeep Alur", imageURL: "assets/images/speakers/sandeep.jpeg", title: "Director - Partner Technology Engagements at Microsoft" },
  ]
};

var featuredSpeakerData = {
  featuredSpeakers: [
    { name: "Anand Gothe", imageURL: "assets/images/speakers/anand.jpg", title: "Chief Architect at Prowareness" , linkedin:"https://www.linkedin.com/in/anandgothe/", facebook:"https://www.facebook.com/anandgothe", twitter:"https://twitter.com/anandgothe" },
    { name: "Akilur Rahman", imageURL: "assets/images/speakers/akilur.jpg", title: "Chief Technology Office, ABB" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/Anoop.jpg", title: "ITPro Expert" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Expert" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Deepthi Anantharaman", imageURL: "assets/images/speakers/default-speaker.png", title: "Sr, Technology Evangelist" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Wriju Ghosh", imageURL: "assets/images/speakers/Wriju.jpeg", title: "Azure Solution Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Jeeva Chelladhurai", imageURL: "assets/images/speakers/default-speaker.png", title: "Open Soource Expert" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Mohit Chhabra", imageURL: "assets/images/speakers/mohit.jpg", title: "Microsoft Azure MVP/ Senior Software Engineer Harman International" , linkedin:"https://www.linkedin.com/in/mohitchhabraazure/", facebook:"https://fb.com/mohitmc2", twitter:"https://twitter.com/mohit_techy" },
    { name: "Nish Anil", imageURL: "assets/images/speakers/Nish.jpeg", title: "Xamarin Solution Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Mahesh", imageURL: "assets/images/speakers/default-speaker.png", title: "" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Ilyas", imageURL: "assets/images/speakers/ilyas.png", title: "IoT Evangelist" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "Microsoft MVP/ Lead Engineer JCPenney" , linkedin:"https://www.linkedin.com/in/swaminathanvetri/", facebook:"https://www.facebook.com/swaminathan.vetri", twitter:"https://twitter.com/svswaminathan" },
    { name: "Murugan Andezuthu Dharmaratnam", imageURL: "assets/images/speakers/murugan.jpeg", title: "Consultant Architect Microsoft Azure & Enterprise Applications" , linkedin:"https://www.linkedin.com/in/muruganad/", facebook:"https://www.facebook.com/muruganad", twitter:"https://twitter.com/murugan_ad" },
    { name: "Vishnu", imageURL: "assets/images/speakers/default-speaker.png", title: "DevOps Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Gireesh", imageURL: "assets/images/speakers/default-speaker.png", title: "DevOps Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Sudheesh", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Rajul", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Ritesh Modi", imageURL: "assets/images/speakers/Ritesh.jpg", title: "Cloud Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Praveen Srivatsa", imageURL: "assets/images/speakers/Praveen.jpeg", title: "Cloud Consultant, Public Speaker, and Microsoft Regional Director", linkedin:"https://www.linkedin.com/in/srivatsapraveen", facebook:"https://facebook.com/srivatsapraveen", twitter:"https://twitter.com/srivatsapraveen" },
    { name: "Vimal", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect", linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Ajay", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect", linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Adil", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Vic Parmar", imageURL: "assets/images/speakers/vic.jpeg", title: "IoT Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Vignesh Ganesan", imageURL: "assets/images/speakers/vignesh.jpg", title: "Sharepoint Architect" , linkedin:"https://www.linkedin.com/in/vignesh-ganesan-mcp-mcitp-mcts-itil-v3-9246384a/", facebook:"https://www.facebook.com/vignesh.ganesan.14", twitter:"https://twitter.com/sharepointnerd" },
    { name: "Bijaya Kumar Sahoo", imageURL: "assets/images/speakers/default-speaker.png", title: "SharePoint Consultant, TSInfo Technologies" , linkedin:"http://in.linkedin.com/in/fewlines4biju/", facebook:"https://www.facebook.com/fewlines4biju", twitter:"http://www.twitter.com/fewlines4biju" },
    { name: "Manoj Kumar Mittal", imageURL: "assets/images/speakers/manoj.jpg", title: "Technical Architect @ Mindtree Ltd" , linkedin:"https://www.linkedin.com/in/manoj-mittal-mcp-mcts-oca-mcsa/", facebook:"https://www.facebook.com/manoj.mcans", twitter:"https://twitter.com/manojmcans" }
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
