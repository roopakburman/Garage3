angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'MenuCtrl'
    })
	
    .state('menu.tabs', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "tabs.html"
        }
      }
    })
    .state('menu.tabs.buttons', {
      url: "/buttons",
      views: {
        'buttons-tab': {
          templateUrl: "buttons.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.list', {
      url: "/list",
      views: {
        'list-tab': {
          templateUrl: "list.html",
          controller: 'ListCtrl'
        }
      }
    })
    .state('menu.tabs.item', {
      url: "/item",
      views: {
        'list-tab': {
          templateUrl: "item.html"
        }
      }
    })
    .state('menu.tabs.form', {
      url: "/form",
      views: {
        'form-tab': {
          templateUrl: "form.html"
        }
      }
    })
	.state('menu.tabs.slidebox', {
      url: "/slidebox",
      views: {
        'slide-tab': {
          templateUrl: "slidebox.html",
          controller: 'SlideboxCtrl'
        }
      }
    })
	.state('menu.tabs.search', {
      url: "/search",
      views: {
        'search-tab': {
          templateUrl: "search.html",
          controller: 'CountryController'
        }
      }
    })
    .state('menu.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "login.html",
		  controller: "loginCtrl"
        }
      }
    })
    .state('menu.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "about.html"
        }
      }
    });

  /* $urlRouterProvider.otherwise("menu/tab/buttons");   */
	$urlRouterProvider.otherwise("/menu/login");

})

.controller('loginCtrl', function($scope, $window, $location){
/* $scope.go = function ( path ) {
  $location.path( path );
}; */
$scope.navTitle = '<img class="logo title" src="img/logo-white-sm.png" />'; 
$scope.login = function(email, password){		
		var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		var isLogin = false;
		ref.authWithPassword({
			email,
			password
/* 		email : $scope.user.uName,
		password : $scope.user.password */
		}, function(error, authData) {
		if (error) {
		$scope.isLogin = false;
		console.log("Login Failed!", error);
		} else {
		console.log("Authenticated successfully with payload:", authData);
		$scope.isLogin = true;
		/* console.log("isLogin=true") */
		window.location.href = '#menu/tab/buttons';
		
		}
		},{
			remember: "sessiononly"
		});

		}
	
})
.controller('CountryController', function($scope){
    $scope.nameFilter = '';
    $scope.data = [
    {
  "clauseName" : "Critical capabilities",
  	"details" : "Social media represents a fundamental opportunity for [Company] to evolve its means and style of interaction with customers, vendors, business leaders, media, etc., as well as expand and deepen such interactions. These guidelines build on long-standing policies regarding employeesâ€™ personal interactions and upon the sound judgment that we expect our employees to use in their professional interactions.",
	"infoGraphic" : "img/info1.png"
  	},
{
  "clauseName" : "Customer Empathizer",
  	"details" : "I cannot believe the indifference and inefficiency I have experienced. I needed a password to log in. I called and got a generic voicemail and no one called me back. Then I sent an email, and no one got back to me for two weeks. When they did, the password didn't work. Is this what I get for my dues? How do you react when a note like this hits your inbox? Do you fire off a defensive retort or just rely on the delete button? Or do you seize the opportunity to turn a negative interaction into a positive one? Does your organization have the culture of service to make that happen?  Building a culture of service doesn't happen overnight. At the Entrepreneurs' Organization (EO), we decided two years ago to make this a top priority as a tool of retention and as a value of the staff team.  As successful business owners, EO's members know exactly what good customer service entails, and they don't hesitate to tell us what needs improvement. Factor in the cultural differences and communication styles that come with doing business in 40 different countries, and customer service becomes more than a short-term project. We believe delivering exceptional member service is critical to everything we do, and the success of EO depends on it. Over the last few years we have injected a strong dose of member service into every interaction we have with members. It hasn't always been easy and we're certainly not done. Here are some lessons we've picked up that may help your association along a similar journey.",
	"infoGraphic" : "img/info2.png"
  		    
},
{
  "clauseName" : "R&D",
  	"details" :"Imagine a day in the life of a member. EO members are small-business owners in a down economy who are letting employees go and struggling with sales and who might be willing to drop a membership organization in an effort to save. We also recognize that our members are high energy, living with stress, and short on time, so we must respond accordingly.  The ability to empathize with members is critical for our front-line staff, and we seek it out in hiring. When interviewing candidates, I've used challenging customer-service scenarios coupled with notes on exactly what responses I want to hear. For a recent position, I went through about 10 interviews before finding the person who responded with the level of personal empathy, ownership of the situation, and above-and-beyond response that I was looking for. It takes time to find someone who fits, but the payoff of having the right person makes up for the time spent searching.  Constant training and reinforcement with current staff is equally important. We've brought in several customer-service experts to talk with the full 65-member staff of EO about our challenges and ways to improve, while trying to make it fun. We offer books that staff can read and discuss. We celebrate with shout outs at onsite events to recognize staff members who go above and beyond. We've also created staff core values together over several months and identified trust and respect and professionalism among them, and we hold each other accountable to our new standards.",
	"infoGraphic" : "img/info3.png"
},
{
  "clauseName" : "Team Composition",
  	"details" : "You can limit them, but you can never completely control them. Here's the good news, though: You can control how you react to mistakes and how you train your team to react to them.  We send a short check-in survey to our new members about four months after they join. It has been invaluable; we learn who still can't get into the website, who never got a new member kit, and who is having a negative experience with a chapter. A few of them are pretty mad about something. The efforts we take to rectify every situation result in building a great relationship with a new member who might never have known us otherwise. We go from being faceless to helpful with a few quick emails, and we open the door for conversations about benefits and upcoming events.  Members experiencing their own hardships are another special opportunity. We have a number of members in the Middle East whose businesses were greatly impacted by the recent turmoil there. They need flexibility on their renewal payments. We have members in Japan who are struggling to recover from the earthquake there. We have members called to active military duty. We have members with sick children. It takes time and effort to accommodate special situations, but the loyalty you build from doing so makes it an easy return on investment. And in this age of social media, when every member can reach thousands of people with a few clicks, the value of having a rave review about service is better than a rant about unsympathetic policies. (See sidebar Handling Negative Feedback",
"infoGraphic" : "img/info4.png"
},
{
  "clauseName" : "Leardiship",
  	"details" : "Is your phone system easy to navigate? What about that registration line at your big event? Can members quickly find what they need on your website? What happens if they send an email to a generic account? All of these tiny, seemingly insignificant interactions add up to create your members' overall perception of your service.  So how do you create a polished experience? Going back to empathy, put yourself in your member's shoes and look at your organization from the outside. Try calling the office after hours and see what the phone system does. Send an anonymous email to your generic account and see what the response is. Most important, ask your members. You may be surprised to hear what small and easily correctable problems are causing pain. Start a list and start empowering your team to find solutions.",
"infoGraphic" : "img/info5.png"
},
{
  "clauseName" : "Unlock Innovative Potential",
  	"details" : "The president of a chapter asks you for a list of members. But you know that what he really needs is a list of members by last name, with their emails, phone numbers, and years in the organization. Maybe he could also use a list of members who didn't renew last year and a list of prospective members waiting to join. What do you send him? On the membership team at EO, we adopted the phrase abundance mentality to mean actively seeking ways to overdeliver, both to members and to each other. It's a promise to each other to work together to exceed expectations.",
"infoGraphic" : "img/info6.png"
},
{
  "clauseName" : "Retail Banking",
  	"details" : "How do you demonstrate your commitment to service to your members? You can wait for those ugly problems and mistakes to pop up, or you can engage in systematic outreach to show you care. There are so many low-cost, high-impact ways to reach your members. (See sidebar Building Stronger Relationships.) EO had members who traveled to the Washington, DC, area frequently but weren't stopping by our office. So, we made a nameplate that reads EO member, hung it over an empty office and offered the space to members as a place to work. Not many have taken us up on this yet, but just the gesture has led to great feedback. And for the few who do stop by, we treat them like visiting royalty with a tour, lunch, and soon a commemorative office gift.  Never underestimate the value of saying thank you, either. Two years ago, we reached out to every one of our members with a personal call, and we are considering doing that again this year following our upcoming renewal cycle. (Read about the calling campaign in 7,300 Ways to Say 'Hello' from the January 2010 issue of Associations Now.)That means reaching out to more than 7,000 members in 40 countries to thank them for renewing. It is a huge challenge in terms of time and manpower, but we made the decision that it was in line with our value of member service. It puts every single staff member in direct connection with members. It opens the door for dialogue and reduces the faceless-headquarters factor.",
	"infoGraphic" : "img/info7.png"
},
{
  "clauseName" : "Wealth Management",
  	"details" : "How do you measure something as fuzzy as good member service? You might feel that you'll know when it improves and life is good. But without systematically creating short- and long-term goals and strategies to achieve them, plus metrics to support them, you'll never know where you really stand.  A survey can be a great way to gauge the year-over-year changes in the mood of members toward your staff and the service delivered by the organization. At EO, we track this every year when we ask members to rate their interactions with the global staff on a scale of one to 10, and we celebrate that the average has gone from 7.7 to 8.2 in the last year (with a response rate of 55.5 percent).  Creating metrics for your staff is another way to measure your efforts. What's the average response time to an email to the general information account? How long does it take to respond to each other's requests internally? Building a culture of teamwork and service on all levels is just as important as having a good front line.  Anecdotal feedback through unofficial channels can be a great pulse point as well. Make sure that someone is regularly reviewing the questions and comments that come into your organization and monitoring the discussions on your social media sites. Consider having a senior leader post a question for discussion. Encourage members to give you the gift of open feedback so you have the opportunity to improve. For example, during our annual renewal period, we encourage departing members to complete an exit survey and share everything that led to their decision to leave. All that information is compiled and delivered to our global board of directors and executive staff team for review and action. So how is all of this working for us? Our retention rate stayed between 85 percent and 90 percent in a down economy. Our survey ratings on staff interaction improve every year. Our team seeks out positive interactions with members. We're never going to be finished with this initiative, but it's the right path for us. We know that excellent member service may not make a member stay, but bad member service can easily be the reason a member leaves.",
"infoGraphic" : "img/info8.png"
},
{
  "clauseName" : "Retirement Services",
  	"details" :"Google News Alerts can tell you when your members are in the news.You can set the search terms for your organization or names of particular members. Congratulate them with a handwritten note or even a framed copy of the article.",
	"infoGraphic" : "img/info9.png"
}

	];

function PeopleCtrl($scope, $http) {

    $scope.people = [];

    $scope.loadPeople = function() {
        var httpRequest = $http({
            method: 'POST',
            url: '/echo/json/',
            data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.people = data;
        });

    };

}
	
})

.controller('ListCtrl', function ($scope) {

  $scope.data = {
    showDelete: false
  };

  $scope.itemButtons = [
    {
      text: 'Delete',
      type: 'button-assertive',
      onTap: function (item) {
        alert('Delete Item: ' + item.id + ' ?');
      }
    }
  ];

  $scope.onItemDelete = function (item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.items = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    }
  ];

})
.controller('ButtonsTabCtrl', function ($scope, $ionicPopup, $ionicActionSheet, $ionicModal) {
    $scope.showPopup = function () {
     $ionicPopup.alert({
       title: 'Calling your Account Manager!',
       content: 'Please wait for a moment while I connect the call for you.'
     });
    };
    $scope.showActionsheet = function () {
        $ionicActionSheet.show({
          titleText: 'Ionic ActionSheet',
          buttons: [
            {
              text: 'Facebook'
            },
            {
              text: 'Twitter'
            },
          ],
          destructiveText: 'Delete',
          cancelText: 'Cancel',
          cancel: function () {
            console.log('CANCELLED');
          },
          buttonClicked: function (index) {
            console.log('BUTTON CLICKED', index);
            return true;
          },
          destructiveButtonClicked: function () {
            console.log('DESTRUCT');
            return true;
          }
        });
    };
})

.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
  

  
/* 
 $cordovaEmailComposer.isAvailable().then(function() {
   // is available
 }, function () {
   // not available
 });

  var email = {
    to: 'roopak.burman@gmail.com',
    cc: '',
    bcc: ['', ''],
    attachments: [
      '',
      '',
      '',
      ''
    ],
    subject: 'Register me',
    body: 'Register me for the Chicago Event.',
    isHtml: true
  };
   */
})              

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal) {              
  
  $scope.navTitle = '<img class="logo title" src="img/logo-white-sm.png" />'; 
  $ionicModal.fromTemplateUrl('modal.html', function (modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up'
  });
 })

 .controller('AppCtrl', function() {

  ionic.Platform.ready(function() {

  });

 });
              
              