
    var app = angular.module("resumeSite", []);
    
    app.controller("resumeCtrl", function($scope){
        var navigation = function(name, location){
            this.name = name;
            this.location = location;
        };
            
        $scope.scrollTo = function(element, $event){
            if($event){
                $event.preventDefault();
            }
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 2000);
        };
            var nav = [];
            nav.push(new navigation("Home", "#homeSec"));
            nav.push(new navigation("About", "#aboutSec"));
            nav.push(new navigation("Education", "#eduSec"));
            nav.push(new navigation("Work Experience", "#expSec"));
            nav.push(new navigation("Technical Skills", "#skillSec"));
            nav.push(new navigation("Projects", "#projSec"));
            nav.push(new navigation("Portfolio", "#miscSec"));
            $scope.navigation = nav;
            $scope.demographics = {
                name: "Akshay Krishna Radhakrishna",
                address: "Arlington, Texas",
                email: "akshay.radhakrishna@gmail.com",
                phone: "+1 469-313-4120",
                image: "images/mypic.jpg",
                summary: "Self-motivated Masters graduate in computer science with 3+ years of work experience in Web Application and Software development."
            };
            
            var edu = function(degreeName, university, from, to, gpa){
                this.degreeName = degreeName;
                this.university = university;
                this.from = from;
                this.to = to;
                this.gpa = gpa;
            };
            
            var education = [];
            education.push(new edu("Masters of Science in Computer Science", "University of Texas at Arlington", "Fall 2013", "Fall 2015", "3.7"));
            education.push(new edu("Bachelor of Engineering in Information Science", "Don Bosco Institute of Technology", "Sept 2007", "June 2011", "3.8"));
            $scope.education = education;
            
            var exp = function(companyName, position, from, to, id, link){
                this.companyName = companyName;
                this.position = position;
                this.from = from;
                this.to = to;
                this.id = id;
                this.link = link;
            };
            
            var experience = [];
            
            var exp1 = new exp("Iron Orchard", "User Interface Intern", "Jan 2015", "May 2015", "1", "http://ironorchard.com/");
            exp1.desc = "Worked on various client projects based on Sitecore CMS, ASP.NET, Angular JS and jQuery.";
            var exp2 = new exp("Polycom Inc","Web Developer Summer Intern", "Jun 2014","Aug 2014", "2", "http://www.polycom.com/");
            exp2.desc = "Built a web application widget to help HR's/Interviwers schedule and conduct video conferencing interviews over the browser\n1. Schedule single or multiple interviews for a candidate.\n2. Manage scheduled interviews   i.e Reschedule and cancel.\n3. Interview notification system\n3. Join video conference \n\ti. Turn off web cam, mike, go full screen\n4. Collaboration features -\n\ti. Document sharing.\n\tii. chat with candidate and interviewers.\n\tiii. Post quiz questions to candidate - Multiple choice, long answer, free form.\n4. View pending decisions and send decision to candidate after interview.\n5. View candidate interview history and post feedback - documents shared, quiz questions and answers, chat history.";
            exp2.projLink = "pdf/project_HR.pdf";
            var exp3 = new exp("Infosys Technologies Ltd", "Systems Engineer", "Sept 2011", "July 2013", "3", "https://www.infosys.com/");
            exp3.desc = "1. Trained in C++, C# and ASP.NET\n2. Worked on a product designed to create a social networking environment for an organization using Microsoft Sharepoint. \n\ti. Developing a threaded discussion where users can post a discussion, like/dislike, edit or delete and add reply to it\n\tii. Create, fetch and display feeds for the entire application, similar to notifications.\n3. Animated reports and chart generation using JavaScript and jQuery for an ASP.NET MVC web application.";
            experience.push(exp1);
            experience.push(exp2);
            experience.push(exp3);
            
            $scope.experience = experience;
            
            var proficiency = ["Advanced","Intermediate","Beginner"];
            var skillCategory = ["Programming Language", "Front End", "Databases", "Tools and Framework", "Others"];
            
            var skill = function(name, yrs, prof, category){
                this.name = name;
                this.yrs = yrs;
                this.prof = prof;
                this.category = category;
            };
            
            $scope.proficiency = proficiency;
            $scope.skillCategory = skillCategory;
            
            var skillSet = [];
            /* Front end */
            skillSet.push(new skill("HTML5","2 Years", proficiency[0], skillCategory[1]));
            skillSet.push(new skill("CSS3","3 Years", proficiency[0], skillCategory[1]));
            skillSet.push(new skill("Javascript","4 Years", proficiency[0], skillCategory[1]));
            skillSet.push(new skill("Object Oriented Javascript","1 year", proficiency[0], skillCategory[1]));
            skillSet.push(new skill("jQuery","4 Years", proficiency[0], skillCategory[1]));
            skillSet.push(new skill("Twitter Bootstrap","2 Years", proficiency[1], skillCategory[1]));
            skillSet.push(new skill("Angular JS","1 Year", proficiency[1], skillCategory[1]));
            skillSet.push(new skill("Ajax","3 Year", proficiency[0], skillCategory[1]));
            skillSet.push(new skill("Less","6 months", proficiency[1], skillCategory[1]));
            skillSet.push(new skill("Dojo","1 month", proficiency[2], skillCategory[1]));
            skillSet.push(new skill("WebRTC","3 months", proficiency[2], skillCategory[1]));
            
            
            /* Programming Languages */
            skillSet.push(new skill("Node.js","1.5 Years", proficiency[0], skillCategory[0]));
            skillSet.push(new skill("C#","3 Years", proficiency[1], skillCategory[0]));
            skillSet.push(new skill("C++","1 Year", proficiency[1], skillCategory[0]));
            skillSet.push(new skill("PHP","1 Year", proficiency[1], skillCategory[0]));
            
            /* Databases */
            skillSet.push(new skill("Microsoft SQL","3 Years", proficiency[0], skillCategory[2]));
            skillSet.push(new skill("MySQL","1.5 Years", proficiency[1], skillCategory[2]));
            skillSet.push(new skill("NoSQL","1.5 Years", proficiency[0], skillCategory[2]));
            skillSet.push(new skill("MongoDB","1.5 Years", proficiency[0], skillCategory[2]));
            skillSet.push(new skill("Amazon AWS","4 months", proficiency[2], skillCategory[2]));
            skillSet.push(new skill("Hadoop","4 months", proficiency[2], skillCategory[2]));
            
            /* Tools and Framework */
            skillSet.push(new skill("ASP.NET","2 years", proficiency[1], skillCategory[3]));
            skillSet.push(new skill("Sitecore CMS","5 months", proficiency[2], skillCategory[3]));
            skillSet.push(new skill("Jira","5 months", proficiency[2], skillCategory[3]));
            skillSet.push(new skill("BitBucket","5 months", proficiency[2], skillCategory[3]));
            skillSet.push(new skill("Microsoft Sharepoint 2010","8 months", proficiency[2], skillCategory[3]));
            skillSet.push(new skill("Adobe Photoshop 7/CS5","1 year", proficiency[1], skillCategory[3]));
            
            /* Other */
            skillSet.push(new skill("REST API","2 years", proficiency[1], skillCategory[4]));
            skillSet.push(new skill("Secure Programming","3 months", proficiency[1], skillCategory[4]));
            skillSet.push(new skill("Linux- Ubuntu","8 months", proficiency[1], skillCategory[4]));
            skillSet.push(new skill("Windows 7/8/10","6 years", proficiency[0], skillCategory[4]));
            
            $scope.skillSet = skillSet;
            
            var projCategory = ["Independent Projects", "Professional Projects", "Academic Projects"];
            
            var proj = function(title, where, technologies, category, link){
                this.title = title;
                this.where = where;
                this.technologies = technologies;
                this.category = category;
                this.link = link;
            };
            
            var projects = [];
            var proj1 = new proj("Multiroom chat application",null, "Node.js, MongoDB, Socket.io, HTML5, CSS3, jQuery, Boostrap", projCategory[0], "http://52.26.21.178:2222/");
            proj1.git = null;
            proj1.desc = "Features:- \n1. Sign up and Login to the web app. \n2. Create chat rooms, join available chat rooms or leave room.\n3. Chat with online peers.\n4. Get notifications on new messages.";
            
            var proj12 = new proj("My Portfolio website",null, "HTML5, CSS3, Javascript, Angular JS, Bootstrap", projCategory[0], "");
            proj12.desc = "My resume website that exemplifies my skill sets, work experience and expertise";
            proj12.link = "http://www.akshayradhakrishna.com";
            proj12.git = "https://github.com/akshay2607/akshay2607.github.io";
        
            var proj2 = new proj("HR Interview processing web application", "Polycom Inc", "Node.js, Socket.io, WebRTC, HTML5, CSS3, jQuery, Bootstrap", projCategory[1], "pdf/project_HR.pdf");
            proj2.desc = exp2.desc;
            
            var proj3 = new proj("Social networking intranet web application", "Infosys Technologies Ltd", "Microsoft Sharepoint 2010, ASP.NET, HTML, CSS, jQuery", projCategory[1]);
            proj3.desc = "A product designed to create a social networking environment for an organization using Microsoft Sharepoint. \nMy responsibilities:\n\ti. Developed a threaded discussion where users can post a discussion, like/dislike, edit or delete and add reply to it\n\tii. Create, fetch and display feeds for the entire application, similar to notifications.";
            
            var proj4 = new proj("Chart and report generation", "Infosys Technologies Ltd", "HTML, CSS, Javascript, jQuery", projCategory[1]);
            proj4.desc = "Built animated bar, pie and line charts and reports for a client project based on ASP.NET MVC";
            
            var proj5 = new proj("Test booking center web application", "Infosys Technologies Ltd", "ASP.NET, WCF,Microsoft SQL, HTML, CSS, Javascript, jQuery", projCategory[1]);
            proj5.desc = "Built animated bar, pie and line charts and reports for a client project based on ASP.NET MVC";
            
            var proj6 = new proj("Assisted diagnosis healthcare information system",null , "Node.js, MySQL, Socket.io, HTML5, CSS3, jQuery, Bootstrap", projCategory[2]);
            proj6.link = "http://52.26.21.178:3333/";
            proj6.git = null;
            proj6.desc = "Healthcare web application that predicts possible diagnosis for each symptom.\n1. Select or enter symptom.\n2. Add demographic filter- Age, sex and race.\n3. Get additional information on each predicted diagnosis- Average length of stay and discharge status.";
            
            var proj7 = new proj("Ping Pong game", null, "HTML, Javascript", projCategory[2]);
            proj7.link = "http://omega.uta.edu/~akr1007/PingPong/pong.html";
            proj7.git = null;
            proj7.desc = "A ball and paddle board game built purely on Javascript. Features include setting ball speed and resetting the game.";
            
            var proj8 = new proj("Movie search web application", null, "PHP, TMDB REST API, HTML, Javascript, AJAX", projCategory[2]);
            proj8.link = "http://omega.uta.edu/~akr1007/movie/movies.html";
            proj8.git = null;
            proj8.desc = "A movie search web app to search movies and display movie details using TMDB API.";
            
            var proj8 = new proj("Restaurant search web application", null, "PHP, Yelp API V2.0, Google Maps JavaScript API V3, AJAX, JSON, JavaScript", projCategory[2]);
            proj8.link = "http://omega.uta.edu/~akr1007/restaurant/yelp.html";
            proj8.git = null;
            proj8.desc = "A restaurant search web app to search restaurants based on cuisine, food type and name.\n1. Drag map to find restaurants in a specific region.\n2. Display address, rating and description of each restaurant in the region. \n3. Markers shown on map to the respective address locations.";
            
            var proj9 = new proj("Dropbox Notification application", null, "Dropbox Core API, Python", projCategory[2]);
            proj9.desc = "Built a Dropbox notifier application which notifies (Real Time) the user of any changes made to the documents in a specified Dropbox folder.";
            
            var proj10 = new proj("Amazon Web Services – Measuring Performance", null, "Amazon S3, Amazon EC2, Amazon RDS, Python (Boto)", projCategory[2]);
            proj10.desc = "Built a Dropbox notifier application which notifies (Real Time) the user of any changes made to the documents in a specified Dropbox folder.";
            
            var proj11 = new proj("Database tracking system", null, "C#, Windows forms, Microsoft SQL", projCategory[2]);
            proj11.desc = "Measuring time of uploading files to Amazon S3 from local system, Amazon EC2 instance and transferring data from Amazon S3 to Amazon RDS in EC2.";
            
            projects.push(proj1,proj2,proj3,proj4,proj5,proj6,proj7,proj8,proj9,proj10,proj11, proj12);
            $scope.projects = projects;
            $scope.projCategory = projCategory;
            
            var portf = function(img, name, link){
                this.img = img;
                this.name = name;
                this.link = link;
            };
            
            var portfolio = [];
            portfolio.push(new portf("images/screenshot/resume.jpg", "My Resume", "http://www.akshayradhakrishna.com"));
            portfolio.push(new portf("images/screenshot/chatroom.jpg", "Multiroom chat application", "http://52.26.21.178:2222/"));
            portfolio.push(new portf("images/screenshot/conf.png", "HR Interview Processing", "pdf/project_HR.pdf"));
            portfolio.push(new portf("images/screenshot/health.jpg", "Healthcare diagnosis", "http://52.26.21.178:3333/"));
            portfolio.push(new portf("images/screenshot/movie.jpg", "Movie search", "http://omega.uta.edu/~akr1007/movie/movies.html"));
            portfolio.push(new portf("images/screenshot/restaurant.jpg", "Restaurant search", "http://omega.uta.edu/~akr1007/restaurant/yelp.html"));
            portfolio.push(new portf("images/screenshot/ping.jpg", "Ping Pong", "http://omega.uta.edu/~akr1007/PingPong/pong.html"));
            
            $scope.portfolio = portfolio;
            
            var photoshop = [];
            photoshop.push(new portf("images/photoshop/tickets.jpg"));
            photoshop.push(new portf("images/photoshop/TShirt1.jpg"));
            photoshop.push(new portf("images/photoshop/TShirt2.jpg"));
            photoshop.push(new portf("images/photoshop/Vismay_1.jpg"));
            photoshop.push(new portf("images/photoshop/vismay_flyer1.jpg"));
            photoshop.push(new portf("images/photoshop/vismay_flyer2.jpg"));
            photoshop.push(new portf("images/photoshop/vismay_pass.jpg"));
            
            $scope.photoshop = photoshop;
            
            $scope.showModal = function(img){
                $scope.photoshopActive = img;
                angular.element('#myModalShower').trigger('click');
            };
                           
        });
    
    app.directive("scroll", function($window){
        return function(scope, element, attrs){
            angular.element($window).bind("scroll", function(){
                var dp = $("#dpImg");
                if(this.pageYOffset >= 40 || this.pageYOffset >= dp[0].offsetTop){
                    scope.boolScroll = true;
                }
                else{
                    scope.boolScroll = false;
                }
                var element = $("#demographics");
                if(this.pageYOffset >= element[0].offsetTop+100 && this.innerWidth>=1000){
                    scope.boolFix = true;
                }
                else{
                    scope.boolFix = false;
                }
                scope.$apply();
            });
        };
    });
    
    
    
