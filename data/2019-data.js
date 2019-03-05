

var keynoteData = {
  speakers: [
    { name: "Akilur Rahman", imageURL: "assets/images/speakers/akilur.jpg", title: "Chief Technology Officer, ABB" },
    { name: "Wilhelm Wiese", imageURL: "assets/images/speakers/wilhelm.jpeg", title: "Head of India Development Center at ABB Global Industries and Services Private Limited" }
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
    { name: "Nandan Rao", imageURL: "assets/images/speakers/Nandan.jpeg", title: "Principal Security Architect at ABB" , linkedin:"https://www.linkedin.com/in/nandanrao/", facebook:"#", twitter:"#" },
    { name: "Vic Parmar", imageURL: "assets/images/speakers/vic.jpeg", title: "Director IT Operations" , linkedin:"https://www.linkedin.com/in/vicparmar", facebook:"https://www.facebook.com/vic.parmar", twitter:"https://twitter.com/VicParmar" },
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
    { name: "Shreekanth KS", imageURL: "assets/images/speakers/Sree.jpg", title: "Cloud Security @ ABB", linkedin:"https://www.linkedin.com/in/sreekanth-sukumaran-49a8965a/", facebook:"", twitter:"" },
    { name: "Amit Kumar", imageURL: "assets/images/speakers/Amit.jpg", title: "Senior Director - Sales, Qubole" , linkedin:"#", facebook:"#", twitter:"#" },
    { name: "Veer Bahadur", imageURL: "assets/images/speakers/Veer.png", title: "Azure Pricing  Expert" , linkedin:"https://in.linkedin.com/in/veerbahadur", facebook:"#", twitter:"#" },
    { name: "Hemanth Bidare", imageURL: "assets/images/speakers/Hemanth.jpg", title: "Technical Lead/Manager @ Euromonitor International" , linkedin:"https://www.linkedin.com/in/hemanthbidare/", facebook:"https://www.facebook.com/hemanthbidare", twitter:"https://twitter.com/hemanthbidare" },
    { name: "Ajaya Agarwal", imageURL: "assets/images/speakers/Ajaya.jpg", title: "Software Engineer, Qubole" , linkedin:"https://www.linkedin.com/in/ajayaa/", facebook:"#", twitter:"https://twitter.com/aj_agr" },
    { name: "Rohan Garg", imageURL: "assets/images/speakers/rohan.jpeg", title: "Tech @ Qubole" , linkedin:"https://www.linkedin.com/in/rohangarg411/", facebook:"#", twitter:"#" }
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


var day1AgendaData={ 
  dev:[
      { title:"Opening Note",speaker:"Wilhelm Wiese",imageURL: "assets/images/speakers/wilhelm.jpeg",desc:"ABB's Leadership in the digital revolution", time:"09.00 AM - 09.20 AM"},
      { title:"Key Note",speaker:"Akilur Rahman",imageURL: "assets/images/speakers/Akilur.jpg",desc:"Industrial IoT - Challenges and Opportunities for Developers", time:"09.20 AM - 09.50 AM"},
      { title:"A picture is worth a thousand Tag's - AI with Computer Vision",speaker:"Vic Parmar",imageURL:"assets/images/speakers/Vic.jpeg",desc:"In this session we will dive into using AI for multimedia and understand how we can use the different sources like Picture and Video.", time:"10.00 AM - 10.50 AM"},
      { title:"Break",speaker:"",imageURL: "assets/images/coffee.png",desc:"", time:"10.50 AM - 11.00 AM"},
      { title:"Zero to Hero with Devops on Azure",imageURL: "assets/images/speakers/vishnu.jpeg",desc:"Zero to Hero with Devops on Azure",speaker:"Vishnu Babu", time:"11.00 AM - 11.50 AM"},
      { title:"Demystifying the graph APIs in Cosmos DB ",speaker:"Mohit Chhabra",imageURL:"assets/images/speakers/mohit.jpg",desc:"I Will be talking about the different type of dbs supported in Cosmos Db and which one to use in what scenario backed by a demo.", time:"12.00 PM - 12.50 PM"},
      { title:"Lunch",speaker:"",imageURL:"assets/images/food.png",desc:"", time:"1.00 PM - 2.00 PM"},
      { title:"Go Mobile with Xamarin and Azure",speaker:"Nish Anil",imageURL:"assets/images/speakers/Nish.jpg",desc:"Learn to build intelligent apps with scalable mobile backends using Xamarin and Azure",speaker:"Nish Anil", time:"02.00 PM - 02.50 PM"},
      { title:"Microservices are easy with Azure Service Fabric",speaker:"",imageURL: "assets/images/speakers/anand.jpg",desc:"Azure Service Fabric makes it easy to code, deploy and manage your Microservices on cloud or on-premise. It's the underlying technology used by lot of Microsoft services as well. We'll cover the basics and I'll squeeze in some demos too",speaker:"Anand Gothe", time:"03.00 PM -03.50 PM"},
      { title:"Break",imageURL: "assets/images/coffee.png", time:"003.50 PM - 04.00 PM"},
      { title:"AI 4 Beginner - Web & Mobile",imageURL: "assets/images/speakers/murugan.png",desc:"A brief introduction to artificial intelligence and neural networks. Build your first AI enabled web and mobile app in 30 mins or less using cloud services.", speaker:"Murugan Andezuthu Dharmaratnam", time:"04.00 PM - 04.50 PM"},
      { title:"Conclusion & Vote of Thanks",imageURL: "assets/images/speakers/swami.jpg",speaker:"Swaminathan Vetri", time:"05.00 PM - 05.15 PM"}
  ],
  devOSS:[
      { title:"Opening Note",speaker:"Wilhelm Wiese",imageURL: "assets/images/speakers/wilhelm.jpeg",desc:"ABB's Leadership in the digital revolution", time:"09.00 AM - 09.20 AM"},
      { title:"Key Note",speaker:"Akilur Rahman",imageURL: "assets/images/speakers/Akilur.jpg",desc:"Industrial IoT - Challenges and Opportunities for Developers", time:"09.20 AM - 09.50 AM"},
      { title:"Open Tools for Azure Development",speaker:"Swaminathan Vetri",imageURL: "assets/images/speakers/swami.jpg",desc:"Learn how to easily build, debug, deploy, diagnose, and manage multi-platform, scalable apps and services using the rich set of developer tools", time:"10.00 AM - 10.50 AM"},
      { title:"Break",imageURL: "assets/images/coffee.png", time:"10.50 AM - 11.00 AM"},
      { title:"Docker Deep Dive",speaker:"Jeeva Chelladurai",imageURL: "assets/images/speakers/Jeeva.jpeg",desc:"In this talk we will introduce you to the containerization technology and help you glean some insight on how Docker achieves containerization", time:"11.00 AM - 11.50 AM"},
      { title:"Windows Containers",speaker:"Hemanth Bidare",imageURL: "assets/images/speakers/Hemanth.jpg",desc:"The world of containerization has seen some pretty incredible innovation over the past couple of years. Yet there has been a whole class of applications that have been absent from the conversation – applications that run in containers on a Windows operating system. In this talk we go over basics of Docker and how to use Docker on windows. We'll also see how to run an ASP..NET web application inside a Windows Container.", time:"12.00 PM - 12.50 PM"},
      { title:"Lunch",imageURL:"assets/images/food.png", time:"1.00 PM - 2.00 PM"},
      { title:"Designing a Serverless Platform using Kubernetes",speaker:"Ajaya Agarwal",imageURL: "assets/images/speakers/Ajaya.jpg",desc:"The need of a serverless platform at Qubole! Why Kubernetes? What kind of problems did Qubole solve using Kubernetes? Challenges in running Kubernetes across multiple clouds.", time:"02.00 PM - 02.50 PM"},
      { title:"Logging, Security and Analytics on Azure with Elastic Stack",speaker:"Aravind Putrevu",imageURL: "assets/images/speakers/aravind.jpeg",desc:"This talk gives a brief understanding of What is Elastic Stack and How it can be used on Azure Cloud.", time:"03.00 PM -03.50 PM"},
      { title:"Break",imageURL: "assets/images/coffee.png", time:"003.50 PM - 04.00 PM"},
      { title:"New Stack in .Net World(Docker, Kubernetes,Helm,Istio)",speaker:"Girish Goudar",imageURL: "assets/images/speakers/girish.jpeg",desc:"We will look at some of the new tools and tech emerging which were used in opensource can now also be applied to .net application.It will be a demo based session which will cover the basic concepts and see what are the solution these tools solve.we will first look at how to dockerize the .net core application and then run the containers in Kuberenetes and use helm to do deployments and finally go through service mesh technology.", time:"04.00 PM - 04.50 PM"},
      { title:"Conclusion & Vote of Thanks",speaker:"Jeeva Chelladurai",imageURL: "assets/images/speakers/Jeeva.jpeg", time:"05.00 PM - 05.15 PM"}
  ],
  itPro:[
      { title:"Opening Note",speaker:"Wilhelm Wiese",imageURL: "assets/images/speakers/wilhelm.jpeg",desc:"ABB's Leadership in the digital revolution", time:"09.00 AM - 09.20 AM"},
      { title:"Key Note",speaker:"Akilur Rahman",imageURL: "assets/images/speakers/Akilur.jpg",desc:"Industrial IoT - Challenges and Opportunities for Developers", time:"09.20 AM - 09.50 AM"},
      { title:"Design & Secure Your Cloud Infrastructure",speaker:"Sarvesh Goel",imageURL: "assets/images/speakers/Sarvesh.jpg",desc:"A case study of migrate your large business critical application to Microsoft Azure Cloud Platform (co-Presenting with Ajay Kakkar)", time:"10.00 AM - 10.50 AM"},
      { title:"Break", imageURL: "assets/images/coffee.png",time:"10.50 AM - 11.00 AM"},
      { title:"SCCM with Azure PaaS services (CDP and CMG) - Troubleshooting Tips",speaker:"Sudheesh Narayanaswamy",imageURL: "assets/images/speakers/Sudeesh.jpg",desc:"Cloud Management Gateway and Cloud Distribution Point Troubleshooting", time:"11.00 AM - 11.50 AM"},
      { title:"Azure Automation with PowerShell",speaker:"Deepak dhami",imageURL: "assets/images/speakers/dhami.jpg",desc:"", time:"12.00 AM - 12.50 AM"},
      { title:"Lunch",imageURL:"assets/images/food.png", time:"1.00 PM - 2.00 PM"},
      { title:"Modern Management with Intune – Migrate the Group Policy to CSP",speaker:"Vimal Das",speaker2:"Anoop Nair",imageURL: "assets/images/speakers/vimal.jpeg",imageURL2: "assets/images/speakers/Anoop.jpg",desc:"Modern Management with Intune – Migrate the Group Policy to CSP", time:"02.00 PM - 02.50 PM"},
      { title:"Azure Backup and Restore Best Practices",speaker:"Adil Arif",imageURL: "assets/images/speakers/Adil.jpg",desc:"As organizations go with cloud strategy, one of the most compelling use case is to use as Disaster Recovery solution because of the economics and pay as you go model. ", time:"03.00 PM -03.50 PM"},
      { title:"Break",imageURL: "assets/images/coffee.png", time:"003.50 PM - 04.00 PM"},
      { title:"Windows 10 co management benefits and real-world experience",speaker:"Rajul",imageURL: "assets/images/speakers/Rajul.jpg",desc:"Co-Management delivers a bridge that simplifies planning and reduces the risks as organizations transition workloads from traditional to modern management", time:"04.00 PM - 04.50 PM"},
      { title:"Conclusion & Vote of Thanks",imageURL: "assets/images/speakers/Anoop.jpg", time:"05.00 PM - 05.15 PM"}
  ],
  sharePoint:[
      { title:"Opening Note",speaker:"Wilhelm Wiese",imageURL: "assets/images/speakers/wilhelm.jpeg",desc:"ABB's Leadership in the digital revolution", time:"09.00 AM - 09.20 AM"},
      { title:"Key Note",speaker:"Akilur Rahman",imageURL: "assets/images/speakers/Akilur.jpg",desc:"Industrial IoT - Challenges and Opportunities for Developers", time:"09.20 AM - 09.50 AM"},
      { title:"AI for Medical rehabilitation",speaker:"Praveen Srivatsa",imageURL: "assets/images/speakers/Praveen.jpeg",desc:"AI can be a key assistive factor for medical rehabilitation. By collective data from sensors and from videos, a complete cognitive analysis of the patients rehabilitation post operation can be done. In this session, we will talk about how a specific rehab device uses cognitive analysis and machine learning to help build custom rehabilitation sessions for faster recovery of patients", time:"10.00 AM - 10.50 AM"},
        { title:"Break", imageURL: "assets/images/coffee.png",time:"10.50 AM - 11.00 AM"},
        { title:"Azure ML/Cognitive Services Deep dive",speaker:"Mahesh",imageURL: "assets/images/speakers/mahesh.png",desc:"A fully-managed cloud service that enables you to easily build, deploy, and share predictive analytics solutions", time:"11.00 AM - 11.50 AM"},
        { title:"Datacenter Transformation",speaker:"Wriju Ghosh",imageURL: "assets/images/speakers/Wriju.jpeg",desc:"Lessons learned while migrating hundreds of applications to Azure", time:"12.00 AM - 12.50 AM"},
        { title:"Lunch",imageURL:"assets/images/food.png", time:"1.00 PM - 2.00 PM"},
        { title:"Intelligent Edge/Cloud",speaker:"Ilyas",imageURL: "assets/images/speakers/Ilyas.png",desc:"This session introduces you to a brand new era of computing, bringing humans closer with intelligent cloud and edge computing.", time:"02.00 PM - 02.50 PM"},
        { title:"Big Data with HDInsight  on Azure",speaker:"Deepthi Anantharam",imageURL: "assets/images/speakers/deepthi.jpg",desc:"Big Data with HDInsight  on Azure", time:"03.00 PM -03.50 PM"},
        { title:"Break",imageURL: "assets/images/coffee.png", time:"003.50 PM - 04.00 PM"},
        { title:"Scaling beyond a Data Warehouse, to a Data Lake architecture on Azure, to meet with rising Customer Demands",speaker:"Amit Kumar",imageURL: "assets/images/speakers/Amit.jpg",desc:"How to operationalize data lake and data science / ML using Qubole on Azure", time:"04.00 PM - 04.50 PM"},
        { title:"Conclusion & Vote of Thanks",speaker:"Ilyas",imageURL: "assets/images/speakers/ilyas.png", time:"05.00 PM - 05.15 PM"}
    ],
    office:[
        { title:"Opening Note",speaker:"Wilhelm Wiese",imageURL: "assets/images/speakers/wilhelm.jpeg",desc:"ABB's Leadership in the digital revolution", time:"09.00 AM - 09.20 AM"},
        { title:"Key Note",speaker:"Akilur Rahman",imageURL: "assets/images/speakers/Akilur.jpg",desc:"Industrial IoT - Challenges and Opportunities for Developers", time:"09.20 AM - 09.50 AM"},
        { title:"360 Degree View of Azure Cloud Cost",speaker:"Veer Bahadur",imageURL:"assets/images/speakers/Veer.png",desc:"Cost is always a concern with customers when it comes to the cloud. I've had a number of conversations with customers lately around how they can take advantage of various offers and benefits on Azure to reduce their costs, and I thought I'd share some of them here as well. There are many things you can do to optimize cost, some of which have some caveats and some which may take more effort than others, but this should give you some ideas of things to consider if you'd like a lower Azure bill (and who doesn't love lower bills).", time:"10.00 AM - 10.50 AM"},
        { title:"Break",imageURL: "assets/images/coffee.png", time:"10.50 AM - 11.00 AM"},
        { title:"Securing the IoT World",speaker:"",imageURL: "assets/images/speakers/Nandan.Jpeg",desc:"Cyber Security is a cornerstone of the IoT world. This presentation introduces the needs of Security and realization of end to end security in the IoT World. It talks about securing the end points, securing the communication between the end points and the cloud and securing the data in the cloud.", time:"11.00 AM - 11.50 AM"},
        { title:"Develop workflows using visual studio 2015 and deploy to SharePoint online",speaker:"Bijaya Kumar Sahoo",imageURL: "assets/images/speakers/Bijay.jpg",desc:"Here we will discuss about  what is a workflow? What are different ways to develop workflow, how we can develop workflow using visual studio? How we can attach the workflow to host web?", time:"12.00 AM - 12.50 AM"},
        { title:"Lunch",imageURL:"assets/images/food.png", time:"1.00 PM - 2.00 PM"},
        { title:"Build intelligent azure bot using QnA Maker & Luis integrate with SharePoint Online",speaker:"Manoj Mittal",imageURL: "assets/images/speakers/manoj.jpg",desc:"Build intelligent azure bot using QnA Maker & Luis integrate with SharePoint Online", time:"02.00 PM - 02.50 PM"},
        { title:"Secure provisioning, secure communication and certificate management for IoT devices",speaker:"Sreekanth KS",imageURL: "assets/images/speakers/sree.jpg",desc:"Traditionally, Power and Industrial Control Systems network used proprietary protocols and operated in isolation. However, to leverage the benefits of cloud computing, internet connectivity is increasingly adopted. This move enabled the benefits of cloud connectivity, however it also increased the attack surface of the network considerably. This presentation talks about how to securely provision an industrial device and enable secure communication to cloud", time:"03.00 PM - 003.50 PM"},
        { title:"Break",imageURL: "assets/images/coffee.png", time:"003.50 PM - 04.00 PM"},
        { title:"Accelerate your digital transformation with SharePoint Online , OneDrive for Business and Microsoft Flow", speaker:"Vignesh Ganesan",imageURL:"assets/images/speakers/vignesh.jpg",desc:"In this session we will learn about how the new and upcoming SharePoint , OneDrive & Microsoft Flow innovations empower people and organizations to share with confidence, transform business processes, engage employees, and harness collective knowledge from anywhere, on virtually any device. We will have also do a DEMO and guide the audiences with a hands-on lab as a part of this session", time:"04.00 AM - 04.50 AM"},
        { title:"Conclusion & Vote of Thanks",speaker:"Chendrayan Venkatesan (Chen V)",imageURL: "assets/images/speakers/Chen.jpg", time:"05.00 PM - 05.15 PM"}
    ]
};
