

var keynoteData = {
  speakers: [
    { name: "Akilur Rahman", imageURL: "assets/images/speakers/akilur.jpg", title: "Chief Technology Officer, ABB" },
    { name: "Wilhelm Weise", imageURL: "assets/images/speakers/wilhelm.jpeg", title: "Head of India Development Center at ABB Global Industries and Services Private Limited" }
  ]
};

var featuredSpeakerData = {
  featuredSpeakers: [
    { name: "Anand Gothe", imageURL: "assets/images/speakers/anand.jpg", title: "Chief Architect at Prowareness" , linkedin:"https://www.linkedin.com/in/anandgothe/", facebook:"https://www.facebook.com/anandgothe", twitter:"https://twitter.com/anandgothe" },
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/Anoop.jpg", title: "ITPro Expert/Microsoft MVP" , linkedin:"https://www.linkedin.com/in/anoopcnair/", facebook:"https://www.facebook.com/ConfigMgr2012/", twitter:"https://twitter.com/anoopmannur" },
    { name: "Deepthi Anantharaman", imageURL: "assets/images/speakers/deepthi.jpg", title: "Sr, Technology Evangelist" , linkedin:"https://www.linkedin.com/in/deepthianantharam/", facebook:"https://www.facebook.com/deepthi.anantharam", twitter:"#https://twitter.com/Deananth" },
    { name: "Girish Goudar", imageURL: "assets/images/speakers/girish.jpeg", title: "DevOps Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Mohit Chhabra", imageURL: "assets/images/speakers/mohit.jpg", title: "Microsoft Azure MVP/ Senior Software Engineer Harman International" , linkedin:"https://www.linkedin.com/in/mohitchhabraazure/", facebook:"https://fb.com/mohitmc2", twitter:"https://twitter.com/mohit_techy" },
    { name: "Murugan Andezuthu Dharmaratnam", imageURL: "assets/images/speakers/murugan.png", title: "Consultant Architect Microsoft Azure & Enterprise Applications" , linkedin:"https://www.linkedin.com/in/muruganad/", facebook:"https://www.facebook.com/muruganad", twitter:"https://twitter.com/murugan_ad" },
    { name: "Manoj Kumar Mittal", imageURL: "assets/images/speakers/manoj.jpg", title: "Technical Architect @ Mindtree Ltd" , linkedin:"https://www.linkedin.com/in/manoj-mittal-mcp-mcts-oca-mcsa/", facebook:"https://www.facebook.com/manoj.mcans", twitter:"https://twitter.com/manojmcans" },
    { name: "Nish Anil", imageURL: "assets/images/speakers/Nish.jpg", title: "Senior Program Manager, Visual Studio & Xamarin" , linkedin:"http://linkedin.com/in/nanil/", facebook:"#", twitter:"http://twitter.com/NishAnil" },
    { name: "Ilyas", imageURL: "assets/images/speakers/ilyas.png", title: "IoT Evangelist" , linkedin:"https://www.linkedin.com/in/ilyasf/", facebook:"https://www.facebook.com/IlyasTheWebizen", twitter:"https://twitter.com/ilyas_tweets" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "Microsoft MVP/ Lead Engineer JCPenney" , linkedin:"https://www.linkedin.com/in/swaminathanvetri/", facebook:"https://www.facebook.com/swaminathan.vetri", twitter:"https://twitter.com/svswaminathan" },
    { name: "Vishnu", imageURL: "assets/images/speakers/vishnu.jpeg", title: "DevOps Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Praveen Srivatsa", imageURL: "assets/images/speakers/Praveen.jpeg", title: "Cloud Consultant, Public Speaker, and Microsoft Regional Director", linkedin:"https://www.linkedin.com/in/srivatsapraveen", facebook:"https://facebook.com/srivatsapraveen", twitter:"https://twitter.com/srivatsapraveen" },
    { name: "Vignesh Ganesan", imageURL: "assets/images/speakers/vignesh.jpg", title: "Sharepoint Architect" , linkedin:"https://www.linkedin.com/in/vignesh-ganesan-mcp-mcitp-mcts-itil-v3-9246384a/", facebook:"https://www.facebook.com/vignesh.ganesan.14", twitter:"https://twitter.com/sharepointnerd" },
    { name: "Wriju Ghosh", imageURL: "assets/images/speakers/Wriju.jpeg", title: "Azure Solution Architect" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Bijaya Kumar Sahoo", imageURL: "assets/images/speakers/Bijay.jpg", title: "SharePoint Consultant, TSInfo Technologies" , linkedin:"http://in.linkedin.com/in/fewlines4biju/", facebook:"https://www.facebook.com/fewlines4biju", twitter:"http://www.twitter.com/fewlines4biju" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/dhami.jpg", title: "ITPro Expert" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Ajay", imageURL: "assets/images/speakers/Ajay.jpg", title: "Microsoft MVP", linkedin:"https://www.linkedin.com/in/ajkakkar/", facebook:"https://www.facebook.com/ajaykakkar88", twitter:"https://twitter.com/kakkaraj" },
    { name: "Adil", imageURL: "assets/images/speakers/Adil.jpg", title: "Senior Technical Support Engineer @ Rubrik" , linkedin:"https://in.linkedin.com/in/adil-arif-030a225b", facebook:"https://www.facebook.com/adil.arif001", twitter:"https://twitter.com/adilarif001" },
    { name: "Mahesh", imageURL: "assets/images/speakers/mahesh.png", title: "Senior Technical Evangelist" , linkedin:"https://www.linkedin.com/in/mfcmahesh/", facebook:"#", twitter:"https://twitter.com/MahesKBlr" },
    { name: "Sudheesh", imageURL: "assets/images/speakers/Sudeesh.jpg", title: "Support Escalation Engineer SCCM - Star Blogger" , linkedin:"https://www.linkedin.com/in/sudheesh-narayanaswamy-b49716114/", facebook:"https://www.facebook.com/sudheesh.narayanaswamy", twitter:"#" },
    { name: "Rajul", imageURL: "assets/images/speakers/Rajul.jpg", title: "SCCM Consultant" , linkedin:"https://www.linkedin.com/in/rajulros/", facebook:"https://www.facebook.com/rajul.os", twitter:"https://twitter.com/wanderingros" },
    { name: "Vimal", imageURL: "assets/images/speakers/vimal.jpeg", title: "Principle Consultant", linkedin:"https://www.linkedin.com/in/vimal-das-4b706a29/", facebook:"https://www.facebook.com/vimal.ds.3", twitter:"https://twitter.com/VimalVmd" },
    { name: "Sarvesh Goyal", imageURL: "assets/images/speakers/Sarvesh.jpg", title: "Architect - Cloud & Infrastructure", linkedin:"https://www.linkedin.com/in/sarveshgoel/", facebook:"https://www.facebook.com/sarveshgoel82", twitter:"https://twitter.com/sarveshgoyal" },
    { name: "Jeeva Chelladhurai", imageURL: "assets/images/speakers/Jeeva.jpeg", title: "Open Source Expert" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Amit Kumar", imageURL: "assets/images/speakers/Amit.jpg", title: "Senior Director of Engineering @ Qubole" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Veer Bahadur", imageURL: "assets/images/speakers/Veer.png", title: "Azure Pricing  Expert" , linkedin:"https://in.linkedin.com/in/veerbahadur", facebook:"#", twitter:"#" }

  ]
};

var speakerData = {
  speakers: [
    
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/anoop.jpg", title: "Enterprise Mobility Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "" },
    { name: "Vic Parmar", imageURL: "assets/images/speakers/vic.jpeg", title: "IoT Architect" , linkedin:"#", facebook:"#", twitter:"#" }
  ]
};

var allSpeakersData = {};

allSpeakersData.speakers = [];

allSpeakersData.speakers =
  keynoteData.speakers.concat(
    featuredSpeakerData.featuredSpeakers.concat(
      speakerData.speakers));
