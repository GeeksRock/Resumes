var empCount = 0; var EmploymentList = []; var JobDetailsList = [];
var eduCount = 0; var EducationList = [];

$(document).ready(function () {
    //0. Build and Display Initial Chunks
    BuildEmploymentChunks();
    BuildEducationChunks();
    ResizeStaticDivs();
    //1. Hide viewer
    ClearDisplay();
});

//resize static <div>s to fit parent <td>s
function ResizeStaticDivs(){ 
  var staticDivs = [$("#aboutBlock"), $("#techBlock"), $("#contactBlock"), $("#langBlock"), $("#monikerBlock")];
  $.each(staticDivs, function(){
      this.height(this.closest('td').height());
  });
}

//clears current viewer display
function ClearDisplay() {
  //animate removal of current viewer content
  $('#viewer').fadeOut(1).promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
  });    
} 

//Moniker Chunk "Click" Event Handler
$("#monikerChunk").on('click', function(){
  //clear currernt viewer content before displaying new content
  $('#viewer').slideDown().promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    //display moniker sites in viewer
    GetMonikerSites();
    //make viewer content visible
    $("#viewer").width("20%");
    $('#viewer').css('display', 'table-cell');    
  });   
});

function GetMonikerSites(){
  //set moniker header
  $header = new $('<div/>', {
    class: "hitgrayBG topLeftPadding",
    height: 50,
    valign: "center"
  });
  $headerText = new $('<label/>', {
    class: "ebonyClayTextBold", 
    text: "Moniker Usage"
  });
  $($header).append($headerText);
  $("#viewer").append($header);
  
  //display all moniker sites
  var site = ["CodePen", "jsFiddle", "GitHub", "Geeklist", "CodeAnywhere", "ColorCombos", "JS Bin", "StackExchange", "CSSDeck"];
  DisplayMonikerSites(site);
}

function DisplayMonikerSites(siteList){
  $div = new $('<div/>', {
    class: ""
  });
  $ul = $('<ul/>');
  $.each(siteList, function(){
    $li = $('<li/>', {
      text: this
    });
    $($ul).append($li);
  });
  $($div).append($ul);
  $("#viewer").append($div); 
}

//Technology Chunk "Click" Event Handler
$("#techChunk").on('click', function(){
  //clear currernt viewer content before displaying new content
  $('#viewer').fadeOut(10).promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    //display technologies in viewer
    GetTechnologies();
    //make viewer content visible
    $("#viewer").width("20%");
    $('#viewer').css('display', 'table-cell');    
  });   
});

function GetTechnologies(){
  //set technology header
  $header = new $('<div/>', {
    class: "yellowGreenHeader",
    height: 50,
    valign: "center"
  });
  $headerText = new $('<label/>', {
    class: "fadedJadeTextBold", 
    text: "Technologies Used"
  });
  $($header).append($headerText);
  $("#viewer").append($header);
  
  //display all technologies
  var tech = ["ASP.NET", "WPF", "Silverlight", "SketchFlow","Visual Studio", "Rally", "Git", "SQL Server", "MySQL", "IIS", "Linq", "Crystal Reports", "PowerShell"];
  DisplayTechnologies(tech);
}

function DisplayTechnologies(techList){
  $div = new $('<div/>', {
    class: ""
  });
  $ul = $('<ul/>');
  $.each(techList, function(){
    $li = $('<li/>', {
      text: this
    });
    $($ul).append($li);
  });
  $($div).append($ul);
  $("#viewer").append($div); 
}

//Language Chunk "Click" Event Handler
$("#langChunk").on('click', function(){
  //clear currernt viewer content before displaying new content
  $('#viewer').fadeOut(10).promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    //display languages in viewer
    GetLanguages();
    //make viewer content visible
    $("#viewer").width("20%");
    $('#viewer').css('display', 'table-cell');    
  });  
});

function GetLanguages(){
  //set languages header
  $header = new $('<div/>', {
    class: "yellowGreenHeader",
    height: 50,
    valign: "center"
  });
  $headerText = new $('<label/>', {
    class: "fadedJadeTextBold", 
    text: "Languages Used",
  });
  $($header).append($headerText);
  $("#viewer").append($header);
  
  $div = new $('<div/>');
  $br = $('<br/>');
  $($div).append($br);
  $("#viewer").append($div);
  
  //display all languages
  var type = "Programming";
  var proLanguages = ["Visual Basic", "+ VB6", "+ VB.Net", "C#.Net", "Java"];
  DisplayLanguages(proLanguages, type);
  type = "Scripting";
  var scrLanguages = ["JavaScript", "+  jQuery"];
  DisplayLanguages(scrLanguages, type);
  var marLanguages = ["XAML", "HTML", "XHTML", "XML"];
  type = "Mark-up";
  DisplayLanguages(marLanguages, type);
  var styleLanguages = ["CSS", "+  CSS3", "+  SCSS", "+  LESS"];
  type = "Style Sheets";
  DisplayLanguages(styleLanguages, type);
  var learnLanguages = ["AngularJS", "Bootstrap" ];
  type = "Currently Learning";
  DisplayLanguages(learnLanguages, type);
}

function DisplayLanguages(lang, type){    
  $div = new $('<div/>', {
    class: ""
  });
  $label = new $('<label/>', {
    text: type,
    class: "fadedJadeTextNormal"
  });
  $($div).append($label);
  
  $ul = $('<ul/>');
  $.each(lang, function(){
    $li = $('<li/>', {
      text: this
    });
    $($ul).append($li);
  }); 
  $($div).append($ul);
  $("#viewer").append($div);  
}

//About Chunk "Click" Event Handler
$('#aboutBlock').on('click', function(){
  //clear currernt viewer content before displaying new content
  $('#viewer').fadeOut(10).promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    //set about header
    $header = new $('<div/>', {
      class: "hitgrayHeader",
      height: 50,
      valign: "center"
    });
    $headerText = new $('<label/>', {
      class: "ebonyClayTextBold", 
      text: "About Me",
    });
    $($header).append($headerText);
    $("#viewer").append($header);

    //set general about info
    $div = new $('<div/>', {
      class: ""
    });
    $br = $('<br/>');
    $($div).append($br);
    $label = new $('<label/>', {
      text: "Hobbies and Interests", 
      class: "hitGrayTextBold"
    });
    $ul = $('<ul/>');
    $family = new $('<li/>', {
      class: "",
      text: "Spending time with family and friends"
    });
    $progFun = new $('<li/>', {
      class: "",
      text: "Coding, for fun"
    });
    $progNew = new $('<li/>', {
      class: "",
      text: "Learning new programming languages"
    });
    $rodeos = new $('<li/>', {
      class: "",
      text: "Rodeos; especially the barrel-racing and bull-riding events"
    });
    $chickens = new $('<li/>', {
      class: "",
      text: "Raising backyard chickens"
    });

    //display general about info in viewer
    $($div).append($label);
    $($ul).append($family);
    $($ul).append($progFun);
    $($ul).append($progNew);
    $($ul).append($rodeos);
    $($ul).append($chickens);
    $($header).append($headerText);
    $("#viewer").append($header);
    $($div).append($ul);
    $("#viewer").append($div);

    //set additional about info
    $div = new $('<div/>', {
      class: ""
    });
    $br = $('<br/>');
    $($div).append($br);
    $label = new $('<label/>', {
      text: "Professional Development", 
      class: "hitGrayTextBold"
    });
    $ul = $('<ul/>');
    $current = new $('<li/>', {
      class: "",
      text: "Currently collaborating with a friend on a Universal Windows Store Application"
    });
    $mva = new $('<li/>', {
      class: "",
      text: "Microsoft Virual Academy videos and live events"
    });
    $recent = new $('<li/>', {
      class: "",
      text: "Recently joined local developer groups"
    });
    $devICT = new $('<li/>');
    $wwcw= new $('<li/>');    
    $('<a href="' + "http://www.meetup.com/devict/" +'" target="_blank">' + "devICT" + '</a>').appendTo($($devICT));
    $('<a href="' + "http://www.meetup.com/WWCWichita/" +'" target="_blank">' + "Women Who Code Wichita" + '</a>').appendTo($($wwcw));
    $nestedUL = new $('<ul/>');
    $labUL = new $('<ul/>');
    $studyLI = new $('<li/>');
    $lab = $('<a href="' + "http://sdcl.ics.uci.edu/" +'" target="_blank">' + "Software Design and Collaboration Laboratory" + '</a>').appendTo($($studyLI));
    $study = new $('<li/>', {
      class: "",
      text: "Participated in a Cloud IDE Study with UC-Irvine" 
    });
    //display additional about info in viewer
    $($div).append($label);
    $($ul).append($mva);
    $($ul).append($current);
    $($ul).append($recent);
    $($nestedUL).append($devICT);
    $($nestedUL).append($wwcw);
    $($recent).append($nestedUL);
    $($ul).append($study);
    $($div).append($ul);
    $($labUL).append($studyLI);
    $($study).append($labUL);
    $("#viewer").append($div);

    //make viewer content visible
    $("#viewer").width("25%");
    $('#viewer').css('display', 'table-cell');
  });   
});

//Contact Chunk "Click" Event Handler
$('#contactBlock').on('click', function(){
  //clear currernt viewer content before displaying new content
  $('#viewer').fadeOut(10).promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    //set contact header
    $header = new $('<div/>', {
      class: "fadedJadeHeader",
      height: 50,
      valign: "center"
    });
    $headerText = new $('<label/>', {
      class: "geyserTextBold", 
      text: "Contact Me",
    });
    $($header).append($headerText);
    $("#viewer").append($header);

    //set general contact info
    $div = new $('<div/>', {
      class: ""
    });
    $br = $('<br/>');
    $($div).append($br);
    $label = new $('<label/>', {
      text: "General", 
      class: "fadedJadeBoldDisplay"
    });
    $fullName = new $('<label/>', {
      class: "ebonyClayTextNormalBlock",
      text: "Michelle M. Edmondson"
    });
    $location = new $('<label/>', {
      class: "ebonyClayTextNormalBlock",
      text: "Arkansas City, KS"
    });
    $email = new $('<label/>', {
      class: "ebonyClayTextNormalBlock",
      text: "medmondson2014@gmail.com"
    });
    $phone = new $('<label/>', {
      class: "ebonyClayTextNormalBlock",
      text: "918-229-0540"
    });

    //display general contact info in viewer
    $($div).append($label);
    $($div).append($fullName);
    $($div).append($location);
    $($div).append($email);
    $($div).append($phone);
    $($header).append($headerText);
    $("#viewer").append($header);
    $("#viewer").append($div);

    //set social media contact info
    $div = new $('<div/>', {
      class: ""
    });
    $br = $('<br/>');
    $($div).append($br);
    $label = new $('<label/>', {
      text: "Social Media", 
      class: "fadedJadeBoldDisplay"
    });
    $($div).append($label);
    
    //display social media contact infor
    $linkedIn = new $('<label/>');
    $('<a href="' + "https://www.linkedin.com/in/medmondson09" +'" target="_blank">' + "LinkedIn" + '</a>').appendTo($($linkedIn));
    $($div).append($linkedIn);
    $br = $('<br/>');
    $($div).append($br);
    $twitter = new $('<label/>');
    $('<a href="' + "https://twitter.com/rock_geeks" +'" target="_blank">' + "Twitter" + '</a>').appendTo($($twitter));
    $($div).append($twitter);
    $("#viewer").append($div);
    
    
    //make viewer content visible
    $("#viewer").width("25%");
    $('#viewer').css('display', 'table-cell');
  });   
});

//Employment Chunk "Click" Event Handler
$('#empChunk').on('click', 'div.pointer', function() {
  $div = this.id;
  var divID = this.id.split('-');
  divID = divID[1];
  var emp = new EmploymentChunk();
 
  //get selected employment details
  $.each(EmploymentList, function(count){
    var empID = this.ID;
    if (divID === empID){
      emp = EmploymentList[count];
    }
  });
  
  //display selected employment details
  $element = $("#viewer");
  emp.DisplayEmploymentChunk($element, true);
});

function JobDetails() {
  this.ID = "";
  this.Label = "";
  this.Details = [];
}

function EmploymentChunk(){
   this.ID = "";
   this.Title = "";
   this.Employer = "";
   this.FromDate = "";
   this.ToDate = "";
   this.JobDetails = JobDetails;
  
   this.DisplayEmploymentChunk = DisplayEmploymentChunk;
}

function BuildEmploymentChunks() {
   //$element determines where to append the chunks
   $element = $("#empChunk");
  
   var empChunk = new EmploymentChunk();
   empChunk.ID = "1";
   empChunk.Title = ".Net Web Developer";
   empChunk.Employer = "DJA Financial Aid Services";
   empChunk.FromDate = "September 2015";
   empChunk.ToDate = "Current";
   var empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Web Development";
   empJobDetails.Details = ["ASP.Net", "VB.Net", "C#.Net", "MVC", "JavaScript", "CSS", "HTML"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Libraries and Framework";
   empJobDetails.Details = ["jQuery", "vue.js", "underscore.js", "moment.js", "fontawesome", "bootstrap"];
   JobDetailsList.push(empJobDetails);
   empChunk.JobDetails = empJobDetails;
   empChunk.DisplayEmploymentChunk($element, false);
   EmploymentList.push(empChunk);
   empChunk = new EmploymentChunk();
   empChunk.ID = "2";
   empChunk.Title = "Systems Analyst II";
   empChunk.Employer = "CCH Tax & Accounting";
   empChunk.FromDate = "March 2009";
   empChunk.ToDate = "January 2014";
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Systems Analysis";
   empJobDetails.Details = ["Reviewed and analyzed business systems and processes", "Translated business requirements into functional specifications", "Generated system design documentation", "Participated in Conceptual Design projects", "Facilitated and participated in software design reviews", "Worked closely with developers to find solutions to platform and software limitations"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "User Interface Design";
   empJobDetails.Details = ["Created wireframes and screen mock-ups, per functional specifications", "Designed user interfaces  for WPF and ASP.Net, per functional specifications"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Leadership";
   empJobDetails.Details = ["Mentored new analysts", "Assigned duties to offshore design team members", "Served as lead analyst for several large, cross-team integration projects"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Other";
   empJobDetails.Details = ["Utilized Scrum methodologies", "Subject Matter Expert for CCH Axcess Document and CCH Axcess Portal products", "Facilitated and participated in training sessions for Sales and Support Teams", "Facilitated  and participated in product demonstrations", "Reviewed Test Cases created by QA Team", "Reviewed Help Guides created by Technical Writers"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Highlights";
   empJobDetails.Details = ["Served as lead analyst, from the CCH Axcess Portal team, for CCH’s award-winning, IRS approved, e-Sign technology: https://www.cchgroup.com/roles/accounting-firms/tax/software/cch-esign"];
   JobDetailsList.push(empJobDetails);
   empChunk.JobDetails = empJobDetails;
   empChunk.DisplayEmploymentChunk($element, false);
   EmploymentList.push(empChunk);
   empChunk = new EmploymentChunk();
   empChunk.ID = "3";
   empChunk.Title = "Programmer Analyst";
   empChunk.Employer = "Protection One, Inc.";
   empChunk.FromDate = "August 2007";
   empChunk.ToDate = "March 2009";
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Programming";
   empJobDetails.Details = ["Implemented enhancements and bug fixes to Residential Sales software application", "Implemented enhancements and bug fixes to Branch Commissios System web portal", "Assisted in the creation of a new customer-facing web application", "Created and updated SQL Server stored procedures and functions", "Programatically generated custom reports (Crystal Reports, Excel)", "Created and updated Web Services"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Systems Analysis";
   empJobDetails.Details = ["Reviewed and analyzed business systems and processes", "Translated business requirements into functional specifications", "Generated system design documentation"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Business Processes";
   empJobDetails.Details = ["Functioned as a liaison between Occupational Analysts and Production DBAs", "SOX Compliance"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Other";
   empJobDetails.Details = ["Performed database backups and restores", "Deployed ASP.Net web applications", "Configured ASP.Net web applications within IIS", "Created and executed Test Plans and Test Cases"];
   JobDetailsList.push(empJobDetails);
   empChunk.DisplayEmploymentChunk($element, false);
   EmploymentList.push(empChunk);
   empChunk = new EmploymentChunk();
   empChunk.ID = "4";
   empChunk.Title = "Computer Programming Instructor";
   empChunk.Employer = "Butler Community College";
   empChunk.FromDate = "August 2005";
   empChunk.ToDate = "December 2008";
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Curriculum-based Instruction";
   empJobDetails.Details = ["Used creative methodologies to teach students basic programming concepts", "Taught introductory computer programming concepts", "Taught VB.Net and C#.Net programming languages", "Trained students to utilize Visual Studio IDE"];
   JobDetailsList.push(empJobDetails);
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Other";
   empJobDetails.Details = ["Created syllabi and lesson plans", "Created supplemental instructional handouts", "Created supplemental instructional videos", "Assigned and graded homework assignments", "Introduced students to topics and current issues directly related to the software development"];
   JobDetailsList.push(empJobDetails);
   empChunk.DisplayEmploymentChunk($element, false);
   EmploymentList.push(empChunk);
   empChunk = new EmploymentChunk();
   empChunk.ID = "5";
   empChunk.Title = "Release Analyst";
   empChunk.Employer = "CCH Tax & Accounting";
   empChunk.FromDate = "February 2006";
   empChunk.ToDate = "August 2007";
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Manual Software Testing";
   empJobDetails.Details = ["Software tester for CCH Axcess product suite", "Utilized design documentation to ensure that software deliverables were met", "Executed Test Plans and Test Cases", "Researched and documented software bugs"];
   JobDetailsList.push(empJobDetails);
   empChunk.ToDate = "August 2007";
   empJobDetails = new JobDetails();
   empJobDetails.ID = empChunk.ID;
   empJobDetails.Label = "Documentation Creation and Review";
   empJobDetails.Details = ["Reviewed and updated software design documentation", "Created Test Plans and Test Cases", "Reviewed Help Guides created by Technical Writers"];
   JobDetailsList.push(empJobDetails);
   empChunk.DisplayEmploymentChunk($element, false); 
   empChunk.JobDetails = JobDetailsList;
   EmploymentList.push(empChunk);
}

/*The following function needs to be refactored...at some point.*/
function DisplayEmploymentChunk($element, showDetails) {
  /*
    0. create new <div class="empChunk">
    1. add <label class="title"> to <div>
    2. add <label class="at"> to <div>
    3. add <label class="company"> to <div>
    4. add <div> to <td id="empChunk"> or <td id="viewer">
  */
  $emp = this;
  empCount++;
  
  //true: show details in viewer
  if(showDetails === true)
  {   
  
    //clear currernt viewer content before displaying new content
    $('#viewer').fadeOut(10).promise().then(function(){ 
      //remove current viewer content
      $.each($("#viewer div"), function () {
        $("#viewer div").remove();
      });
      
      $div = $('<div/>', {
        id: "empChunk-" + empCount,
        class: "fadedJadeBG pointer",
        height: 65,
        valign: "center"
      });
      $title = new $('<label/>', {
        text: $emp.Title,
        class: "fadedJadeBoldDisplayCentered"
      });
      $at = new $('<label/>', {
        text: "at",
        class: "simpleDetailsCentered"
      });
      $company = new $('<label/>', {
        text: $emp.Employer,
        class: "simpleDetailsCentered"
      });
      $div.append($title);
      $div.append($at);
      $div.append($company);
      $($element).append($div);
      
      //display job details in viewer
      $div = new $('<div/>', {
        class: "geyserDottedBorder pointer"
      });
      $label = new $('<label/>', {
        text: "From: " + $emp.FromDate,
        class: "ebonyClayTextNormalBlock"
      });
      $($div).append($label);
      $label = new $('<label/>', {
        text: "To: " + $emp.ToDate,
        class: "ebonyClayTextNormalBlock"
      });
      $($div).append($label);   
      $($element).append($div);
 
      //find and display employment details
      GetJobDetails($element, $emp);         

      //make viewer content visible
      $("#viewer").width("40%");
      $('#viewer').css('display', 'table-cell');    
    }); 
  } else {
    $div = $('<div/>', {
      id: "empChunk-" + empCount,
      class: "geyserDottedBorder pointer"
    });
    $title = new $('<label/>', {
      text: $emp.Title,
      class: "fadedJadeBoldDisplayCentered"
    });
    $at = new $('<label/>', {
      text: "at",
      class: "simpleDetailsCentered"
    });
    $company = new $('<label/>', {
      text: $emp.Employer,
      class: "simpleDetailsCentered"
    });
    $div.append($title);
    $div.append($at);
    $div.append($company);
    $($element).append($div);
  }
}

function GetJobDetails($element, $emp) {
  console.clear();
  console.log('Emp:', $emp);
  var matches = jQuery.grep(JobDetailsList, function(JobDetails){
    return JobDetails.ID === $emp.ID;
  });
  
  
  $.each(matches, function(){
    $div = new $('<div/>', {
      class: ""
    });
    $br = $('<br/>');    
    $($div).append($br);
    
    $label = new $('<label/>', {
      text: this.Label,
      class: "fadedJadeTextNormal"
    });
    $($div).append($label);
    
    $ul = new $('<ul/>', {
      class: ""
    });
    var details = this.Details;
    $.each(details, function(){
      $li = new $('<li/>', {
        text: this,
        class: ""
      });
      $($ul).append($li);
    });
    $($div).append($ul);
    $($element).append($div);
  });
}

function EducationChunk(){
   this.ID = "";
   this.SchoolName = "";
   this.AreaOfStudy = "";
   this.DateTo = "";
   this.DateFrom = "";
   this.Courses = [];

   this.DisplayEducationChunk = DisplayEducationChunk;
}

function BuildEducationChunks() {
   //$element determines where to append the chunks
   $element = $("#eduChunk");
  
   var eduChunk = new EducationChunk();
   eduChunk.ID = "1";
   eduChunk.SchoolName = "Friends University";
   eduChunk.AreaOfStudy = "Software Development";
   eduChunk.FromDate = "August 2005";
   eduChunk.ToDate = "May 2007";
   eduChunk.Courses = ["Systems Analysis", "Database Design and Management", "Fundamentals of Networking", "Programming Logic", "Programming Fundamentals with VB.Net", "Intermediate Programming with VB.Net", "Advanced Programming with VB.Net", "C#.Net", "ASP.Net", ".Net Security"];
   EducationList.push(eduChunk);
   eduChunk.DisplayEducationChunk($element, false);
   eduChunk = new EducationChunk();
   eduChunk.ID = "2";
   eduChunk.SchoolName = "Butler Community College";
   eduChunk.AreaOfStudy = "Software Development";
   eduChunk.FromDate = "August 2003";
   eduChunk.ToDate = "July 2005";
   eduChunk.Courses = ["Visual Basic.Net Programming", "DreamWeaver", "Introduction to Multimedia Design", "JavaScript Programming", "Flash Fundamentals", "Multimedia Production", "Web Graphics", "Perl Programming", "XML"];
   eduChunk.DisplayEducationChunk($element, false);
   EducationList.push(eduChunk);
   eduChunk = new EducationChunk();
   eduChunk.ID = "3";
   eduChunk.SchoolName = "Vatterott College";
   eduChunk.AreaOfStudy = "Computer Programming";
   eduChunk.FromDate = "August 2003";
   eduChunk.ToDate = "July 2005";
   eduChunk.Courses = ["MS Office Technologies", "Q-BASIC", "Visual Basic 6", "C++", "Java", "Relational Database Management with Oracle"];
   eduChunk.DisplayEducationChunk($element, false);
   EducationList.push(eduChunk);
}

/*The following function needs to be refactored...at some point.*/
function DisplayEducationChunk($element, showDetails) {
     /*
    0. create new <div class="eduChunk">
    1. add <label class="title"> to <div>
    2. add <label class="at"> to <div>
    3. add <label class="school"> to <div>
    4. add <div> to <td id="eduChunk"> or <td id="viewer">
  */
  $edu = this;
  eduCount++;
  
  //true: show details in viewer
  if(showDetails === true)
  {    
    //clear currernt viewer content before displaying new content
    $('#viewer').fadeOut(10).promise().then(function(){ 
      //remove current viewer content
      $.each($("#viewer div"), function () {
        $("#viewer div").remove();
      });

      $div = $('<div/>', {
        id: "eduChunk-" + eduCount,
        class: "fadedJadeBG pointer",
        height: 65,
        valign: "center"
      });
      $title = new $('<label/>', {
        text: $edu.AreaOfStudy,
        class: "fadedJadeBoldDisplayCentered"
      });
      $at = new $('<label/>', {
        text: "at",
        class: "simpleDetailsCentered"
      });
      $company = new $('<label/>', {
        text: $edu.SchoolName,
        class: "simpleDetailsCentered"
      });
      $div.append($title);
      $div.append($at);
      $div.append($company);
      $($element).append($div);

      $div = new $('<div/>', {
        class: "geyserDottedBorder pointer"
      });
      $label = new $('<label/>', {
        text: "From: " + $edu.FromDate,
        class: "ebonyClayTextNormalBlock"
      });
      $($div).append($label);
      $label = new $('<label/>', {
        text: "To: " + $edu.ToDate,
        class: "ebonyClayTextNormalBlock"
      });
      $($div).append($label);   
      $($element).append($div);

      $div = new $('<div/>', {
        class: ""
      });
      $ul = new $('<ul/>', {
        class: ""
      });

      $.each($edu.Courses, function(){
        $li = new $('<li/>', {
          text: this,
          class: ""
        });   
        $($ul).append($li);
      });
      $label = new $('<label/>', {
        text: "Related Courses:",
        class: "fadedJadeTextNormal"
      });
      $br = $('<br/>');
      $($div).append($br);
      $($div).append($label);
      $($div).append($ul);
      $($element).append($div);

      //make viewer content visible
      $("#viewer").width("30%");
      $('#viewer').css('display', 'table-cell');    
    });     
  } else {
    $div = $('<div/>', {
      id: "eduChunk-" + eduCount,
      class: "geyserDottedBorder pointer"
    });
    $title = new $('<label/>', {
      text: $edu.AreaOfStudy,
      class: "fadedJadeBoldDisplayCentered"
    });
    $at = new $('<label/>', {
      text: "at",
      class: "simpleDetailsCentered"
    });
    $company = new $('<label/>', {
      text: $edu.SchoolName,
      class: "simpleDetailsCentered"
    });
    $div.append($title);
    $div.append($at);
    $div.append($company);
    $($element).append($div);
  }
}

//Education Chunk "Click" Event Handler
$('#eduChunk').on('click', 'div.pointer', function() {
  $div = this.id;
  var divID = this.id.split('-');
  divID = divID[1];
  var edu = new EducationChunk();
  
  //get selected education details
  $.each(EducationList, function(count){
    var eduID = this.ID;
    if (divID === eduID){
      edu = EducationList[count];
    }
  });
  
  //display selected education details
  $element = $("#viewer");
  edu.DisplayEducationChunk($element, true);
});

$("#sampleChunk").on('click', function(){
  //clear currernt viewer content before displaying new content
  $('#viewer').fadeOut(10).promise().then(function(){ 
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    //display samples in viewer
    GetSamples();
    //make viewer content visible
    $("#viewer").width("20%");
    $('#viewer').css('display', 'table-cell');    
  });  
});


function SampleChunk(){
   this.SampleLocation = "";
   this.SampleDisplayName = "";
}

function GetSamples() {
  var sample = new SampleChunk();
  var SampleList = [];
  sample.SampleLocation = "https://codepen.io/GeeksRock/";
  sample.SampleDisplayName = "Pens by GeeksRock on CodePen";
  SampleList.push(sample);
  sample = new SampleChunk();
  sample.SampleLocation = "http://jsfiddle.net/user/GeeksRock/fiddles/";
  sample.SampleDisplayName = "Fiddles by GeeksRock on jsFiddle";
  SampleList.push(sample);
  sample = new SampleChunk();
  sample.SampleLocation = "https://github.com/GeeksRock";
  sample.SampleDisplayName = "Repositories by GeeksRock on GitHub";
  SampleList.push(sample);
  sample = new SampleChunk();
  sample.SampleLocation = "https://gist.github.com/GeeksRock";
  sample.SampleDisplayName = "Gists by GeeksRock on GitHub Gists";
  SampleList.push(sample);
  sample = new SampleChunk();
  sample.SampleLocation = "https://cssdeck.com/user/GeeksRock";
  sample.SampleDisplayName = "Creations by GeeksRock on CSSDeck";
  SampleList.push(sample);
  DisplaySamples(SampleList);
}

function DisplaySamples(sList) {
  //clear currernt viewer content before displaying new content
  $('#viewer').fadeOut(10).promise().then(function(){
    //remove current viewer content
    $.each($("#viewer div"), function () {
      $("#viewer div").remove();
    });
    
    $div = new $('<div/>', {
      class: "hitgrayHeader",
      height: 50,
      valign: "center"
    });
    $label = new $('<label/>', {
      text: "Electronic Portfolio",
      class: "ebonyClayTextBold"                  

    });
    $($div).append($label);
    $("#viewer").append($div);

    $div = new $('<div/>', {
      class: ""
    });

    $br = $('<br/>');
    $($div).append($br);
    
    $label = new $('<label/>', {
      text: "Programming Samples", 
      class: "hitGrayTextBold"
    });
    $ul = $('<ul/>');
    $.each(sList, function(count){
      $li = $('<li/>');   
      $('<a href="' + sList[count].SampleLocation+'" target="_blank">' + sList[count].SampleDisplayName + '</a>').appendTo($($li));
      $($ul).append($li);
    }); 
    $($div).append($label);
    $($div).append($ul);
    
    //CCH specific
    $label = new $('<label/>', {
      text: "Systems Analysis and Design",
      class: "hitGrayTextBold"
    });

    $($div).append($label);        
    $br = $('<br/>');
    $($div).append($br);
    $br = $('<br/>');
    $($div).append($br);
    $label = new $('<label/>', {
      text: "Designed several features and integration points for CCH Axcess Document and CCH Axcess Portal products.",
      class: "ebonyClayTextNormal"
    });
    $($div).append($label); 
    $ul = new $('<ul/>');
    $li = new $('<li/>');
    $('<a href="' + "http://www.cchgroup.com/roles/accounting-firms/firm-management-and-workflow/software/cch-axcess/cch-axcess-document" +'" target="_blank">' + "CCH Axcess Document" + '</a>').appendTo($($li));
    $($ul).append($li);
    $li2 = new $('<li/>');
    $('<a href="' + "http://www.cchgroup.com/roles/accounting-firms/firm-management-and-workflow/software/cch-axcess/cch-axcess-portal" +'" target="_blank">' + "CCH Axcess Portal" + '</a>').appendTo($($li2));
    $($ul).append($li2);
    $($div).append($ul);     
    $("#viewer").append($div);    
  
    //make viewer content visible
    $("#viewer").width("25%");
    $('#viewer').css('display', 'table-cell');   
  });
}
