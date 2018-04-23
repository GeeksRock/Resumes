$(document).ready(function() {
  $resumeDiv = $("#resumeDiv");

  function showEducation() {

    $spanglyph = new $("<span/>", {
      class: "glyphicon glyphicon-book largeMarginedText normalBlueText"
    })
    $span = new $("<span/>", {
      text: "  Education",
      id: "resumeEducation",
      class: "smallMarginedText normalBlueText"
    })
    $br = new $("<br/><br/>");
    $($resumeDiv).append($spanglyph);
    $($resumeDiv).append($span);
    $($resumeDiv).append($br);

    $.each(resume.education, function() {
      $spanCompany = new $("<span/>", {
        text: "School: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.school,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanCompany);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanLocation = new $("<span/>", {
        text: "Location: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.location,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanLocation);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanTitle = new $("<span/>", {
        text: "Major: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.major,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanTitle);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanFrom = new $("<span/>", {
        text: "From: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.from,
        class: "boldDarkGreyText"
      });
      $nbsp = new $("<span/>", {
        text: '   '
      });
      $($resumeDiv).append($spanFrom);
      $($resumeDiv).append($span);
      $($resumeDiv).append($nbsp);

      $spanTo = new $("<span/>", {
        text: "To: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.to,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanTo);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanglyph = new $("<span/>", {
        class: "glyphicon glyphicon-list-alt normalBlueText normalMargin"
      })
      $span = new $("<span/>", {
        text: "Related Courses:",
        class: "normalBlueText smallMargin"
      });
      $ul = new $("<ul/>");
      $.each(this.courses, function() {
        $li = new $("<li/>", {
          text: this,
          class: "mediumMargin normalDarkGreyText"
        });
        $($ul).append($li);
      })
      $($resumeDiv).append($spanglyph);
      $($resumeDiv).append($span);
      $($resumeDiv).append($ul);

      $br = new $("<br/>");
      $($resumeDiv).append($br);
    })
  }

  function showEmployment() {

    $spanglyph = new $("<span/>", {
      class: "glyphicon glyphicon-briefcase largeMarginedText normalBlueText"
    })
    $span = new $("<span/>", {
      text: "  Professional Work Experience",
      id: "resumeEmployment",
      class: "smallMarginedText normalBlueText"
    })
    $br = new $("<br/><br/>");
    $($resumeDiv).append($spanglyph);
    $($resumeDiv).append($span);
    $($resumeDiv).append($br);

    $.each(resume.employment, function() {
      $spanCompany = new $("<span/>", {
        text: "Company: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.employer,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanCompany);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanLocation = new $("<span/>", {
        text: "Location: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.location,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanLocation);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanTitle = new $("<span/>", {
        text: "Title: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.title,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanTitle);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanFrom = new $("<span/>", {
        text: "From: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.from,
        class: "boldDarkGreyText"
      });
      $nbsp = new $("<span/>", {
        text: '   '
      });
      $($resumeDiv).append($spanFrom);
      $($resumeDiv).append($span);
      $($resumeDiv).append($nbsp);

      $spanTo = new $("<span/>", {
        text: "To: ",
        class: "normalMargin boldBlackText"
      });
      $span = new $("<span/>", {
        text: this.to,
        class: "boldDarkGreyText"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanTo);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $spanglyph = new $("<span/>", {
        class: "glyphicon glyphicon-tasks normalBlueText normalMargin"
      })
      $span = new $("<span/>", {
        text: "Job Description:",
        class: "normalBlueText smallMargin"
      });
      $br = new $("<br/>");
      $($resumeDiv).append($spanglyph);
      $($resumeDiv).append($span);
      $($resumeDiv).append($br);

      $.each(this.description, function() {
        $detailHeader = new $("<label/>", {
          text: this.detailHeader,
          class: "largeMargin"
        })
        $($resumeDiv).append($detailHeader);

        $ul = new $("<ul/>");
        $.each(this.details, function() {
          $li = new $("<li/>", {
            text: this,
            class: "extraLargeMargin normalDarkGreyText"
          })
          $($ul).append($li);
        })
        $($resumeDiv).append($ul);
      })

      $br = new $("<br/>");
      $($resumeDiv).append($br);
    })
  }

  function showHeader() {
    $h1 = new $("<h1/>", {
      text: resume.name,
      id: "resumeName",
      class: "boldBlueCenteredText"
    })

    $($resumeDiv).append($h1);

    $h2 = new $("<h2/>", {
      text: resume.title,
      id: "resumeTitle",
      class: "normalMediumgreyCenteredText"
    });
    $($resumeDiv).append($h2);

    $table = new $("<table/>", {
      id: "headerTable",
      class: ""
    });
    $tr = new $("<tr/>");

    $tdLocation = new $("<td/>", {
      id: "resumeLocation",
      class: ""
    });
    $span = new $("<span/>", {
      class: "glyphicon glyphicon-map-marker normalBlueText"
    });
    $labelSpan = new $("<span/>", {
      text: ' ' + resume.location,
      class: "normalBlueText"
    });
    $($tdLocation).append($span);
    $($tdLocation).append($labelSpan);

    $tdEmail = new $("<td/>", {
      id: "resumeEmail",
      class: ""
    });
    $span = new $("<span/>", {
      class: "glyphicon glyphicon-envelope normalBlueText"
    });
    $labelSpan = new $("<span/>", {
      text: ' ' + resume.email,
      class: "normalBlueText"
    });
    $($tdEmail).append($span);
    $($tdEmail).append($labelSpan);

    $tdPhone = new $("<td/>", {
      id: "resumePhone",
      class: ""
    });
    $span = new $("<span/>", {
      class: "glyphicon glyphicon-phone-alt normalBlueText"
    });
    $labelSpan = new $("<span/>", {
      text: ' ' + resume.phone,
      class: "normalBlueText"
    });
    $($tdPhone).append($span);
    $($tdPhone).append($labelSpan);

    $($tr).append($tdLocation);
    $($tr).append($tdEmail);
    $($tr).append($tdPhone);

    $($table).append($tr);
    $($resumeDiv).append($table);

    $hr = new $("<hr/>");
    $($resumeDiv).append($hr);
  }

  function showFooter() {
    $hr = new $("<hr/>");
    $($resumeDiv).append($hr);

    $button = new $("<button/>", {
      id: "btnJSON",
      text: "Show Resume JSON",
      class: "mediumMargin"
    });
    $($resumeDiv).append($button);

    $br = new $("<br/><br/>");
    $($resumeDiv).append($br);
  }

  var resume = {
    "title": "Software Design and Development Professional",
    "name": "Michelle M. Edmondson",
    "email": "medmondson2014@gmail.com",
    "phone": "316-749-7075",
    "location": "Wichita, KS",
    "education": [{
      "school": "Friends University",
      "location": "Wichita, KS",
      "major": "Software Development",
      "from": "August 2005",
      "to": "May 2007",
      "courses": [
        "Systems Analysis",
        "Database Design and Management",
        "Fundamentals of Networking",
        "Programming Logic",
        "Programming Fundamentals with VB.Net",
        "Intermediate Programming with VB.Net",
        "Advanced Programming with VB.Net",
        "C#.Net",
        "ASP.Net",
        ".Net Security"
      ]
    }, {
      "school": "Butler Community College",
      "location": "Andover, KS",
      "major": "Software Development",
      "from": "August 2003",
      "to": "July 2005",
      "courses": [
        "Visual Basic.Net Programming",
        "DreamWeaver",
        "Introduction to Multimedia Design",
        "JavaScript Programming",
        "Flash Fundamentals",
        "Multimedia Production",
        "Web Graphics",
        "Perl Programming",
        "XML"
      ]
    }, {
      "school": "Vatterott College",
      "location": "Wichita, KS",
      "major": "Computer Programming",
      "from": "August 2003",
      "to": "July 2005",
      "courses": [
        "MS Office Technologies",
        "Q-BASIC",
        "Visual Basic 6",
        "C++",
        "Java",
        "Relational Database Management with Oracle"
      ]
    }],
    "employment": [{
      "employer": "DJA Financial Aid Services, Inc.",
      "location": "Wichita, KS",
      "title": "Web Application Developer (ASP.Net/MVC/JavaScript)",
      "from": "September 2015",
      "to": "Current",
      "description": [{
        "detailHeader": "Software Development",
        "details": [
          "Introduced my team to Entity Framework Code First Migrations; a recommendation which has been adopted.",
		  "Created a dependency-free, cross-browser compatible, JavaScript data grid framework.",
		  "Earned a “You Make a Difference” award for my implementation of a customizable Menu System used throughout our application.",
		  "Introduced my team to SignalR and was responsible for the frontend implementation of the technology, for the creation of a Customer Service Instant Messaging and Inbox solution and related VueJS components.",
		  "Created a set of smart VueJS components that enable our application to build its own User Interface, given a set of inputs.",
		  "Implemented a logic-intent interpreter for our smart components, which allow the team to provide a simple delimited string, which the smart components interpret and execute the intended logic at the appropriate times.",
		  "Shared knowledge of SQL and JavaScript to assist team members with implementation and debugging."
        ]
      }]
    }, {
      "employer": "CCH Tax & Accounting",
      "location": "Wichita, KS",
      "title": "Systems Analyst II",
      "from": "March 2009",
      "to": "January 2014",
      "description": [{
        "detailHeader": "Systems Analysis",
        "details": [
          "Reviewed and analyzed business systems and processes",
          "Translated business requirements into functional specifications",
          "Generated system design documentation",
          "Participated in Conceptual Design projects",
          "Facilitated and participated in software design reviews",
          "Worked closely with developers to find solutions to platform and software limitations"
        ]
      }, {
        "detailHeader": "User Interface Design",
        "details": [
          "Created wireframes and screen mock-ups, per functional specifications",
          "Designed user interfaces for WPF and ASP.Net, per functional specifications"
        ]
      }, {
        "detailHeader": "Leadership",
        "details": [
          "Mentored new analysts",
          "Assigned duties to offshore design team members",
          "Served as lead analyst for several large, cross-team integration projects"
        ]
      }, {
        "detailHeader": "Programming",
        "details": [
          "Created mock-up applications for client demonstrations and concept reviews (C#)"
        ]
      }, {
        "detailHeader": "Other",
        "details": [
          "Cutomer relations",
          "Utilized Scrum methodologies",
          "Subject Matter Expert for CCH Axcess Document and CCH Axcess Portal products",
          "Facilitated and participated in training sessions for Sales and Support Teams",
          "Facilitated and participated in product demonstrations",
          "Reviewed Test Cases created by QA Team",
          "Reviewed Help Guides created by Technical Writers"
        ]
      }, {
        "detailHeader": "Highlights",
        "details": [
          "Served as lead analyst, from the CCH Axcess Portal team, for CCH’s award-winning, IRS approved, e-Sign technology: https://www.cchgroup.com/roles/accounting-firms/tax/software/cch-esign"
        ]
      }, ]
    }, {
      "employer": "Protection One, Inc.",
      "location": "Wichita, KS",
      "title": "Programmer / Analyst (ASP.Net/WebForms)",
      "from": "August 2007",
      "to": "March 2009",
      "description": [{
        "detailHeader": "Software Development",
        "details": [
          "Implemented enhancements and bug fixes to Residential Sales software application",
          "Implemented enhancements and bug fixes to Branch Commissios System web portal",
          "Assisted in the creation of a new customer-facing web application",
          "Created and updated SQL Server stored procedures and functions",
          "Programatically generated custom reports (Crystal Reports, Excel)",
          "Created and updated Web Services"
        ]
      }, {
        "detailHeader": "Systems Analysis",
        "details": [
          "Reviewed and analyzed business systems and processes",
          "Translated business requirements into functional specifications",
          "Generated system design documentation"
        ]
      }, {
        "detailHeader": "Business Processes",
        "details": [
          "Functioned as a liaison between Occupational Analysts and Production DBAs",
          "SOX Compliance"
        ]
      }, {
        "detailHeader": "Other",
        "details": [
          "Performed database backups and restores",
          "Deployed ASP.Net web applications",
          "Configured ASP.Net web applications within IIS",
          "Created and executed Test Plans and Test Cases"
        ]
      }]
    }, {
      "employer": "Butler Community College",
      "location": "Andover, KS",
      "title": "Computer Programming Instructor",
      "from": "August 2005",
      "to": "December 2008",
      "description": [{
        "detailHeader": "Curriculum-based Instruction",
        "details": [
          "Used creative methodologies to teach students basic programming concepts",
          "Taught introductory computer programming concept",
          "Taught VB.Net and C#.Net programming languages",
          "Trained students to utilize Visual Studio IDE"
        ]
      }, {
        "detailHeader": "Other",
        "details": [
          "Created syllabi and lesson plans",
          "Created supplemental instructional handouts",
          "Created supplemental instructional videos",
          "Assigned and graded homework assignments",
          "Introduced students to topics and current issues directly related to the software development"
        ]
      }]
    }, {
      "employer": "CCH Tax & Accounting",
      "location": "Wichita, KS",
      "title": "Release Analyst",
      "from": "February 2006",
      "to": "August 2007",
      "description": [{
        "detailHeader": "Manual Software Testing",
        "details": [
          "Software tester for CCH Axcess product suite",
          "Utilized design documentation to ensure that software deliverables were met",
          "Executed Test Plans and Test Cases",
          "Researched and documented software bugs"
        ]
      }, {
        "detailHeader": "Documentation Creation and Review",
        "details": [
          "Reviewed and updated software design documentations",
          "Created Test Plans and Test Cases",
          "Reviewed Help Guides created by Technical Writers"
        ]
      }]
    }]
  };

  $($resumeDiv).on("click", "#btnJSON", function() {
    alert(JSON.stringify(resume), "Resume JSON");
  });
  
  showHeader();
  showEmployment();
  showEducation();
  showFooter();
  
});
