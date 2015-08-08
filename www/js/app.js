var ceb = angular.module('ionicApp', ['ionic', 'googlechart'])
var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
window.currentUser = "";
window.sortState ="";
ceb.run(function($ionicPlatform, $rootScope) {
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
      templateUrl: "templates/menu.html",
      controller: 'MenuCtrl'
    })
	
    .state('menu.tabs', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "templates/tabs.html"
        }
      }
    })

    .state('menu.tabs.buttons', {
      url: "/buttons",
      views: {
        'buttons-tab': {
          templateUrl: "templates/buttons.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.buttons1', {
      url: "/buttons1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/buttons1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.feed1', {
      url: "/feed1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.feed1extn', {
      url: "/feed1extn",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed1extn.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.feed2', {
      url: "/feed2",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed2.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.feed3', {
      url: "/feed3",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed3.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed4', {
      url: "/feed4",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed4.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
    .state('menu.tabs.feed4extn', {
      url: "/feed4extn",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed4extn.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed5', {
      url: "/feed5",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed5.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })	
    .state('menu.tabs.feed5img1', {
      url: "/feed5img1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed5img1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed5img2', {
      url: "/feed5img2",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed5img2.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed5img3', {
      url: "/feed5img3",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed5img3.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed6', {
      url: "/feed6",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed6.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed6img1', {
      url: "/feed6img1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed6img1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed6img2', {
      url: "/feed6img2",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed6img2.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed6img3', {
      url: "/feed6img3",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed6img3.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed7', {
      url: "/feed7",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed7extn1', {
      url: "/feed7extn1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7extn1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed7extn2', {
      url: "/feed7extn2",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7extn2.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed7extn3', {
      url: "/feed7extn3",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7extn3.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed7extn4', {
      url: "/feed7extn4",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7extn4.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	
	.state('menu.tabs.feed7meeting1', {
      url: "/feed7meeting1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7meeting1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	
	.state('menu.tabs.feed7img1', {
      url: "/feed7img1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7img1.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed7img2', {
      url: "/feed7img2",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed7img2.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed8', {
      url: "/feed8",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed8.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed9', {
      url: "/feed9",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed9.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feed10', {
      url: "/feed10",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed10.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	.state('menu.tabs.feedBenchmark', {
      url: "/feedBenchmark",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feedBenchmark.html",
          controller: 'ButtonsTabCtrl'
        }
      }
    })
	
	.state('menu.tabs.bssbimg1', {
      url: "/bssbimg1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/bssbimg1.html"
        }
      }
    })

    .state('menu.tabs.list', {
      url: "/list",
      views: {
        'list-tab': {
          templateUrl: "templates/list.html",
          controller: 'ListCtrl'
        }
      }
    })
    .state('menu.tabs.item', {
      url: "/item",
      views: {
        'list-tab': {
          templateUrl: "templates/item.html"
        }
      }
    })
	.state('menu.tabs.slidebox', {
      url: "/slidebox",
      views: {
        'slide-tab': {
          templateUrl: "templates/slidebox.html",
          controller: 'SlideboxCtrl'
        }
      }
    })
	.state('menu.tabs.live1', {
      url: "/live1",
      views: {
        'slide-tab': {
          templateUrl: "templates/live1.html"
        }
      }
    })
	.state('menu.tabs.live1meeting', {
      url: "/live1meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/live1meeting.html"
        }
      }
    })
	.state('menu.tabs.live2meeting', {
      url: "/live2meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/live2meeting.html",
		  controller: 'live2meetingCtrl'
        }
      }
    })
	.state('menu.tabs.live3meeting', {
      url: "/live3meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/live3meeting.html",
		  controller: 'live3meetingCtrl'
        }
      }
    })
	.state('menu.tabs.web1', {
      url: "/web1",
      views: {
        'slide-tab': {
          templateUrl: "templates/web1.html"
        }
      }
    })
	.state('menu.tabs.web1meeting', {
      url: "/web1meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/web1meeting.html"
        }
      }
    })
	.state('menu.tabs.web1img', {
      url: "/web1img",
      views: {
        'slide-tab': {
          templateUrl: "templates/web1img.html"
        }
      }
    })
	.state('menu.tabs.web2meeting', {
      url: "/web2meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/web2meeting.html"
        }
      }
    })
	.state('menu.tabs.web3meeting', {
      url: "/web3meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/web3meeting.html"
        }
      }
    })
	.state('menu.tabs.web4meeting', {
      url: "/web4meeting",
      views: {
        'slide-tab': {
          templateUrl: "templates/web4meeting.html"
        }
      }
    })
	.state('menu.tabs.myEvents', {
      url: "/myEvents",
      views: {
        'slide-tab': {
          templateUrl: "templates/myEvents.html"
        }
      }
    })
	.state('menu.tabs.myEvents1', {
      url: "/myEvents1",
      views: {
        'slide-tab': {
          templateUrl: "templates/myEvents1.html"
        }
      }
    })
	.state('menu.tabs.myEvents2', {
      url: "/myEvents2",
      views: {
        'slide-tab': {
          templateUrl: "templates/myEvents2.html"
        }
      }
    })
	.state('menu.tabs.myEvents3', {
      url: "/myEvents3",
      views: {
        'slide-tab': {
          templateUrl: "templates/myEvents3.html"
        }
      }
    })
	.state('menu.tabs.podcast', {
      url: "/podcast",
      views: {
        'podcast-tab': {
          templateUrl: "templates/podcast.html",
          controller: 'podcastCtrl'
        }
      }
    })
	.state('menu.tabs.search', {
      url: "/search",
      views: {
        'search-tab': {
          templateUrl: "templates/search.html",
          controller: 'dataCtrl'
		  
        }
      }
    })
	.state('menu.tabs.userProfile', {
      url: "/userProfile",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/userProfile.html",
          controller: 'userProfileCtrl'
		  
        }
      }
    })
	.state('menu.tabs.contactUs', {
      url: "/contactUs",
      views: {
        'buttons-tab': {
          templateUrl: "templates/contactUs.html",
          controller: 'userProfileCtrl'
        }
      }
    })
	.state('menu.tabs.faView1', {
      url: "/faView1",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/faView1.html"
        }
      }
    })
	.state('menu.tabs.img1', {
      url: "/img1",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/faView1img.html"
        }
      }
    })
	.state('menu.tabs.faView2', {
      url: "/faView2",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/faView2.html"
        }
      }
    })
	.state('menu.tabs.img2', {
      url: "/img2",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/faView2img.html"
        }
      }
    })
	.state('menu.tabs.faView3', {
      url: "/faView3",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/faView3.html"
        }
      }
    })
	.state('menu.tabs.img3', {
      url: "/img3",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/faView3img.html"
        }
      }
    })
	.state('menu.tabs.testPush', {
      url: "/testPush",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/testPush.html"
        }
      }
    })
    .state('menu.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
		  controller: "loginCtrl"
        }
      }
    })
	
    // .state('menu.about', {
      // url: "/about",
      // views: {
        // 'menuContent': {
          // templateUrl: "templates/about.html"
        // }
      // }
    // })
/* 	.state('logout', {
      url: "/logout",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
		  controller: "loginCtrl"
        }
      }
    } */
	// );

  /* $urlRouterProvider.otherwise("menu/tab/buttons");   */
	$urlRouterProvider.otherwise("/menu/login");

})
.controller('podcastCtrl', function($scope) {
	
/* 	$scope.playPod = function(){
	var audio = document.getElementById("audio1");
    audio.play();
	}
	$scope.stopPod = function(){
		$(this).pause();
		
	} */

	
})

.controller('live2meetingCtrl', function($scope){
	$scope.registerMe = function(){
		alert("Thank you for your interest. We've notified the Account Rep. Someone would reach out to you shortly");
		
	}
})
.controller('live3meetingCtrl', function($scope){
	$scope.registerMe1 = function(){
		alert("Thank you for your interest. We've notified the Account Rep. Someone would reach out to you shortly");
		
	}
})
.controller('loginCtrl', function($scope, $window, $location, $ionicSideMenuDelegate){
/* $scope.go = function ( path ) {
  $location.path( path );
}; */

$ionicSideMenuDelegate.canDragContent(false)

$scope.navTitle = '<img class="title" src="img/logo-white-sm.png" />'; 

$scope.login = function(email, password){		
		
		var isLogin = false;
		ref.authWithPassword({
			email: email,
			password: password
/* 		email : $scope.user.uName,
		password : $scope.user.password */
		}, function(error, authData) {
		if (error) {
		$scope.isLogin = false;
		console.log("Login Failed!", error);
		alert(error);
		} else {
		console.log("Authenticated successfully with payload:", authData);
		console.log("User " + authData.uid + " is logged in with " + authData.provider);
		$scope.isLogin = true;
		/* console.log("isLogin=true") */
		window.location.href = '#menu/tab/buttons';
		
		currentUser = authData.uid;
		
		if(authData.uid == 'simplelogin:14'){
			alert('Welcome James!');
		}
		else if(authData.uid == 'simplelogin:15'){
			alert('Welcome Tom!');
		}
		else if(authData.uid == 'simplelogin:16'){
			alert('Welcome Melody!');
		}
		else if(authData.uid == 'simplelogin:17'){
			alert('Welcome Warren!');
		}		
		else if(authData.uid == 'simplelogin:18'){
			alert('Welcome Haniel!');
		}
		else if(authData.uid == 'simplelogin:19'){
			alert('Welcome Garage Team!');
		}
		else if(authData.uid == 'simplelogin:22'){
			alert('Welcome Rob!');
		}
		else if(authData.uid == 'simplelogin:23'){
			alert('Welcome Andrea!');
		}
		else if(authData.uid == 'simplelogin:24'){
			alert('Welcome Aaron!');
		}
		else if(authData.uid == 'simplelogin:25'){
			alert('Welcome Eve!');
		}else if(authData.uid == 'simplelogin:26'){
			alert('Welcome Julie!');
		}
		}
		},{
			remember: "sessiononly"
		});


		}
		// $scope.logout = function(ref) {
		
		// ref.onAuth(function(authData) {
		  // if (authData) {
			// console.log("Logged in");
		  // } else {
			// console.log("Logged out");
			// ref.unauth();;
			// alert("You are successfully logged out!");
			// }
// });
		

	// }

})
.controller('userProfileCtrl', function($scope){
	$scope.nameFilter = currentUser;
	$scope.userData = [
	{
		"userID" : "simplelogin:14",
		"userName" : "James King",
		"userEmail" : "JKing@KingInternational.com",
		"userTitle" : "Chief Information Officer",
		"userDept" : "IT",
		"userPhone" : "571-303-4772",
		"userOffice" : "Washington DC",
		"uPic" : "img/James_King.jpg"
	},
	{
		"userID" : "simplelogin:18",
		"userName" : "Haniel Lynn",
		"userEmail" : "lynnh@cebglobal.com",
		"userTitle" : "Group President",
		"userDept" : "BPDS General/Central",
		"userPhone" : "571-303-4015",
		"userOffice" : "Washington DC",
		"uPic" : "img/haniel.jpg"
	},
	{
		"userID" : "simplelogin:16",
		"userName" : "Melody Jones",
		"userEmail" : "melodyjones@cebglobal.com",
		"userTitle" : "Chief Administrative Officer",
		"userDept" : "Human Resources",
		"userPhone" : "571-303-4003",
		"userOffice" : "Washington DC",
		"uPic" : "img/melody.jpg"
	},
	{
		"userID" : "simplelogin:17",
		"userName" : "Warren Thune",
		"userEmail" : "thunew@cebglobal.com",
		"userTitle" : "Group President",
		"userDept" : "TM General/Central",
		"userPhone" : "571-303-4613",
		"userOffice" : "Washington DC",
		"uPic" : "img/warren.jpg"
	},
	{
		"userID" : "simplelogin:15",		
		"userName" : "Tom Monahan",
		"userEmail" : "MonahanT@cebglobal.com",
		"userTitle" : "Chief Executive Officer",
		"userDept" : "Office of the CEO",
		"userPhone" : "571-303-4013",
		"userOffice" : "Washington DC",
		"uPic" : "img/tom.jpg"
	},
	{
		"userID" : "simplelogin:19",		
		"userName" : "The Garage",
		"userEmail" : "garage@cebglobal.com",
		"userTitle" : "The Garage",
		"userDept" : "Secret room on 10th floor",
		"userPhone" : "571-303-6666",
		"userOffice" : "Washington DC",
		"uPic" : "img/garage.jpg"
	},
	{
		"userID" : "simplelogin:22",		
		"userName" : "Rob Chen",
		"userEmail" : "robchen@cebglobal.com",
		"userTitle" : "Chief Marketing Officer",
		"userDept" : "Marketing",
		"userPhone" : "571-303-6666",
		"userOffice" : "Washington DC",
		"uPic" : "img/rob.jpg"
	},
	{
		"userID" : "simplelogin:23",		
		"userName" : "Andrea Birdsong",
		"userEmail" : "abirdsong@cebglobal.com",
		"userTitle" : "Senior Digital Marketing Manager",
		"userDept" : "Marketing",
		"userPhone" : "571-303-6666",
		"userOffice" : "Washington DC",
		"uPic" : "img/garage.jpg"
	},
	{
		"userID" : "simplelogin:24",		
		"userName" : "Aaron Myers",
		"userEmail" : "amyers@cebglobal.com",
		"userTitle" : "Executive Assistant",
		"userDept" : "IT",
		"userPhone" : "571-303-6666",
		"userOffice" : "Washington DC",
		"uPic" : "img/garage.jpg"
	},
	{
		"userID" : "simplelogin:25",		
		"userName" : "Eve Koopmann",
		"userEmail" : "ekoopmann@cebglobal.com",
		"userTitle" : "Market Director",
		"userDept" : "Information Technology Practice",
		"userPhone" : "571-303-6666",
		"userOffice" : "Washington DC",
		"uPic" : "img/eve.jpg"
	},
	{
		"userID" : "simplelogin:26",		
		"userName" : "Julie Donahue",
		"userEmail" : "jdonahue@cebglobal.com",
		"userTitle" : "Senior Central L＆D Lead Senior Central L&D Lead",
		"userDept" : "Human Resources",
		"userPhone" : "571-303-4756",
		"userOffice" : "Washington DC",
		"uPic" : "img/julie.jpg"
	}
	];

	if(currentUser == 'simplelogin:14'){
			$scope.userName = "Price Jett";
			$scope.userEmail = "jettp@cebglobal.com";
			$scope.userPhone = "571-303-4772";			
		}
		else if(currentUser == 'simplelogin:15'){
			$scope.userName = "Tom Monahan";
			$scope.userEmail = "monahant@cebglobal.com";
			$scope.userPhone = "571-303-4013";				
		}
		else if(currentUser == 'simplelogin:16'){
			$scope.userName = "Melody Jones";
			$scope.userEmail = "melodyjones@cebglobal.com";
			$scope.userPhone = "571-303-4003";
		}
		else if(currentUser == 'simplelogin:17'){
			$scope.userName = "Warren Thune";
			$scope.userEmail = "thunew@cebglobal.com";
			$scope.userPhone = "571-303-4613";
		}		
		else if(currentUser == 'simplelogin:18'){
			$scope.userName = "Haniel Lynn";
			$scope.userEmail = "lynnh@cebglobal.com";
			$scope.userPhone = "571-303-4015";
		}
		else if(currentUser == 'simplelogin:19'){
			$scope.userName = "The Asgardians";
			$scope.userEmail = "garage@cebglobal.com";
			$scope.userPhone = "571-303-6666";
		}
		else if(currentUser == 'simplelogin:22'){
			$scope.userName = "Rob Chen";
			$scope.userEmail = "robchen@cebglobal.com";
			$scope.userPhone = "571-303-6666";
		}
		else if(currentUser == 'simplelogin:23'){
			$scope.userName = "Andrea Birdsong";
			$scope.userEmail = "abirdsong@cebglobal.com";
			$scope.userPhone = "571-303-6666";
		}
		else if(currentUser == 'simplelogin:24'){
			$scope.userName = "Aaron Myers";
			$scope.userEmail = "amyers@cebglobal.com";
			$scope.userPhone = "571-303-6666";
		}
		else if(currentUser == 'simplelogin:25'){
			$scope.userName = "Eve Koopmann";
			$scope.userEmail = "ekoopmann@cebglobal.com";
			$scope.userPhone = "571-303-6666";
		}
		else if(currentUser == 'simplelogin:26'){
			$scope.userName = "Julie Donahue";
			$scope.userEmail = "jdonahue@cebglobal.com";
			$scope.userPhone = "571-303-4756";
		}
	
	$scope.contactJames = function(){
		alert('Thanks for your message. James would reach out to you shortly.');
		
		window.location.href = '#menu/tab/userProfile';
	}

})
.controller("tickerCtrl",['$scope',function($scope){
    $scope.iTicker = [
	{
		"prog" : "Government: ",
		"newsFeed" : "The future of Government IT - Establishing IT as a broker, not a builder."
	},
	{
		"prog" : "Financial Services: ",
		"newsFeed" : "Generate the next level of breakthrough performance in the financial services industry."
	},
	{
		"prog" : "Finance: ",
		"newsFeed" : "75% of CxOs are unhappy with the talent mix of their teams."
	},
	{
		"prog" : "Innovation & Strategy: ",
		"newsFeed" : "Companies whose R&D workforces have high innovation potential see 75% greater new product sales than other companies."
	},
	{
		"prog" : "Human Resources: ",
		"newsFeed" : "Employees are 2X more likely to stay with their organization compared to five years ago. Access Q2 workforce trends."
	}
	];
}])
.controller('dataCtrl', function($scope){
	$scope.nameFilter = '';
    $scope.data = [
    {
  "clauseName" : "Critical capabilities",
  	"details" : "These guidelines build on long-standing policies regarding employeesâ€™ personal interactions and upon the sound judgment that we expect our employees to use in their professional interactions.",
	"infoGraphic" : "img/info1.png"
  	},
{
  "clauseName" : "Customer Empathizer",
  	"details" : "I cannot believe the indifference and inefficiency I have experienced. I needed a password to log in. I called and got a generic voicemail and no one called me back. Then I sent an email, and no one got back to me for two weeks. When they did, the password didn't work.",
	"infoGraphic" : "img/info2.png"
  		    
},
{
  "clauseName" : "R&D",
  	"details" :"Imagine a day in the life of a member. EO members are small-business owners in a down economy who are letting employees go and struggling with sales and who might be willing to drop a membership organization in an effort to save. We also recognize that our members are high energy, living with stress, and short on time, so we must respond accordingly.  The ability to empathize with members is critical for our front-line staff, and we seek it out in hiring.",
	"infoGraphic" : "img/info3.png"
},
{
  "clauseName" : "Team Composition",
  	"details" : "You can limit them, but you can never completely control them. Here's the good news, though: You can control how you react to mistakes and how you train your team to react to them.  We send a short check-in survey to our new members about four months after they join.",
"infoGraphic" : "img/info4.png"
},
{
  "clauseName" : "Leardiship",
  	"details" : "Is your phone system easy to navigate? What about that registration line at your big event? Can members quickly find what they need on your website? What happens if they send an email to a generic account? All of these tiny, seemingly insignificant interactions add up to create your members' overall perception of your service.",
"infoGraphic" : "img/info5.png"
},
{
  "clauseName" : "Unlock Innovative Potential",
  	"details" : "The president of a chapter asks you for a list of members. But you know that what he really needs is a list of members by last name, with their emails, phone numbers, and years in the organization.",
"infoGraphic" : "img/info6.png"
},
{
  "clauseName" : "Retail Banking",
  	"details" : "How do you demonstrate your commitment to service to your members? You can wait for those ugly problems and mistakes to pop up, or you can engage in systematic outreach to show you care. There are so many low-cost, high-impact ways to reach your members. (See sidebar Building Stronger Relationships.)",
	"infoGraphic" : "img/info7.png"
},
{
  "clauseName" : "Wealth Management",
  	"details" : "How do you measure something as fuzzy as good member service? You might feel that you'll know when it improves and life is good. But without systematically creating short- and long-term goals and strategies to achieve them, plus metrics to support them, you'll never know where you really stand.",
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

.controller("chartCtrl2", function ($scope) {

    var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.cssStyle = "height:450px; width:650px;";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "My Company", type: "number"},
        {id: "desktop-id", label: "Banking & FS", type: "number"}
        
    ], "rows": [
        {c: [
            {v: "General"},
            {v: .4, f: "40%"},
            {v: .6, f: "60%"}
        ]},
        {c: [
            {v: "Contracts"},
            {v: .5, f: "50%"},
            {v: .5, f: "50%"}
        ]},
        {c: [
            {v: "FIN"},
            {v: .2, f: "20%"},
            {v: .8, f: "80%"}

        ]},
        {c: [
            {v: "L&E"},
            {v: .1, f: "10%"},
            {v: .9, f: "90%"}

        ]},
        {c: [
            {v: "M&A"},
            {v: .4, f: "40%"},
            {v: .6, f: "60%"}

        ]},
        {c: [
            {v: "IT"},
            {v: .7, f: "70%"},
            {v: .3, f: "30%"}

        ]},
        {c: [
            {v: "HR"},
            {v: .6, f: "60%"},
            {v: .4, f: "40%"}

        ]},
        {c: [
            {v: "Admin"},
            {v: .3, f: "30%"},
            {v: .7, f: "70%"}

        ]}
		
    ]};

    chart1.options = {
        "title": "Outside Spending by Practice Area",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": false,
		"legend": {position: 'bottom', textStyle: {fontSize: 10}},
        "vAxis": {
            "title": "", "gridlines": {"count": 6},
			"format": '#,###%'
        },
		"colors": ['#FF8C26','#0FC1F2'],
		"annotations": {
          "alwaysOutside": false,
          "textStyle": {
            "fontSize": 10,
            "auraColor": 'none',
            "color": '#555'
          }
    }
    };

    chart1.formatters = {};

    $scope.chart2 = chart1;

})
.controller("chartCtrl3", function ($scope) {

    var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.cssStyle = "height:450px; width:650px;";
    chart1.data = {"cols": [
        {id: "dept", label: "dept", type: "string"},
		{id: "admin-id", label: "Admin", type: "number"},
        {id: "nonlawyers-id", label: "Non-Lawyers", type: "number"},
        {id: "lawyers-id", label: "Lawyers.", type: "number"}
        
        
    ], "rows": [
        {c: [
            {v: "My Company"},
            {v: .6},
            {v: .2},
			{v: .2}
        ]},
        {c: [
            {v: "Banking & FS"},
            {v: .5},
            {v: .2},
			{v: .3}
		]},
        {c: [
            {v: "$5-$10 Bil"},
            {v: .7},
            {v: .2},
			{v: .1}
		]},
        {c: [
            {v: "1-5 Lawyers"},
            {v: .7},
            {v: .2},
			{v: .1}
		]}
    ]};

    chart1.options = {
        "title": "Proportions of Legal Staff",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
		"legend": {position: 'bottom', textStyle: {fontSize: 10}},
        "vAxis": {
            "title": "", "gridlines": {"count": 6},
			"format": '#,###%'
        },
		"colors": ['#C0C0C0','#0FC1F2','#7FD6F7','#7CB5EC']
    };

    chart1.formatters = {
      number : [{
        
        pattern: "#,###%"
      }]
    };

    $scope.chart2 = chart1;


})
.controller('ButtonsTabCtrl', ['$scope', '$filter', function ($scope, $filter) {
	$scope.chartMy = {
  "type": "BarChart",
  "displayed": true,
  "data": {
    "cols": [
      {
        "id": "month",
        "label": "Month",
        "type": "string",
        "p": {}
      },
      {
        "id": "laptop-id",
        "label": "Laptop",
        "type": "number",
        "p": {}
      },
      {
        "id": "desktop-id",
        "label": "Desktop",
        "type": "number",
        "p": {}
      },
      {
        "id": "server-id",
        "label": "Server",
        "type": "number",
        "p": {}
      },
      {
        "id": "cost-id",
        "label": "Shipping",
        "type": "number"
      }
    ],
    "rows": [
      {
        "c": [
          {
            "v": "My Company"
          },
          {
            "v": 19,
            "f": ""
          },
          {
            "v": 12,
            "f": ""
          },
          {
            "v": 7,
            "f": ""
          },
          {
            "v": 4
          }
        ]
      },
      {
        "c": [
          {
            "v": "Banking & FS"
          },
          {
            "v": 13
          },
          {
            "v": 1,
            "f": ""
          },
          {
            "v": 12
          },
          {
            "v": 2
          }
        ]
      },
      {
        "c": [
          {
            "v": "$5-$10B"
          },
          {
            "v": 24
          },
          {
            "v": 5
          },
          {
            "v": 11
          },
          {
            "v": 6
          }
        ]
      }
    ]
  },
  "options": {
    "title": "",
    "isStacked": "true",
    "fill": 20,
    "displayExactValues": true,
	"colors": ['#C0C0C0','#0FC1F2','#7FD6F7','#7CB5EC'],
	"legend": {position: 'bottom', textStyle: {fontSize: 10}},
    "vAxis": {
      "title": "Sales unit",
      "gridlines": {
        "count": 10
      }
    },
    "hAxis": {
      "title": ""
    }
  },
  "formatters": {}
}
	
	/* Google Chart End*/	
	
	$('.clickMe1').click(function(){
		$('.panel1').toggle();
	});
	$('.clickMe2').click(function(){
		$('.panel2').toggle();
	});	
	$('.clickMe3').click(function(){
		$('.panel3').toggle();
	});
	$('.clickMe4').click(function(){
		$('.panel4').toggle();
	});
	$('.clickMe5').click(function(){
		$('.panel5').toggle();
	});
	$('.clickMe6').click(function(){
		$('.panel6').toggle();
	});
	$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$scope.feed = [
    {
		
	"program" : "Recruiting Leadership Council",	
	"content_type" : "images", 
	"title" : "The Performance Transformation", 
	"synopsis" : "HR focuses on motivation strategies to drive employee willingness to be enterprise contributors—employees who work with and through others, contributing and consuming ideas and input to improve their own performance and that of their peers. However, for 75% of them, their organizations get in their way of becoming enterprise contributors.",
	"data" : "HR focuses on motivation strategies to drive employee willingness to be enterprise contributors—employees who work with and through others, contributing and consuming ideas and input to improve their own performance and that of their peers. However, for 75% of them, their organizations get in their way of becoming enterprise contributors.",
	"icon" : "icon rb-images ion-images",
	"path" : "#/menu/tab/feed7"
	},
	{
	"program" : "CIO Leadership Council",
	"content_type" : "images", 
	"title" : "What is Adaptive IT", 
	"synopsis" : "To succeed in an era when change is constant and the impact of technology ubiquitous, IT leaders must adopt a set of management principles that allow IT to help the enterprise maximize returns from technology investments in any environment, not just the environment for which the IT organization was designed.",
	"data" : "AdaptiveIT.png",
	"icon" : "icon rb-images ion-images",
	"path" : "#/menu/tab/feed1"
	},
    {
	"program" : "CIO Leadership Council",
	"content_type" : "video", 
	"title" : "What Are End-to-End IT Services?",
	"synopsis" : "End-to-end IT services package all the technologies, processes, and resources across IT needed to deliver a specific business outcome while hiding technical complexity...",
	"data" : "https://www.youtube.com/embed/G8pgmwo2FE0",
	"icon" : "icon rb-videos ion-ios-videocam",
	"path" : "#/menu/tab/feed3"
	},
    {
	"program" : "CIO Leadership Council",	
	"content_type" : "notes", 
	"title" : "The Role of the Head of IT Finance", 
	"synopsis" : "Wondering how other IT organizations design the role of the head of IT Finance? This research brief profiles five member organizations, detailing...",
	"data" : "An adaptive IT organization is capable of continuous change and can thrive in any environment, not just the environment for which it was designed. Rather than relying on dedicated teams, structures, or processes, an adaptive IT organization makes all resources (people, money, technology) and processes as fungible as possible. <p></p>Adaptive IT differs from other approaches today by not stipulating a specific end state but allowing organizations to thrive in any environment.",
	"icon" : "icon rb-notes ion-ios-paper",
	"path" : "#/menu/tab/feed2"
	},
    {
	"program" : "CIO Leadership Council",	
	"content_type" : "notes", 
	"title" : "Accelerating IT's Clock Speed", 
	"synopsis" : "Learn tactics to make your IT team more responsive to the needs of business partners in an increasingly varied technology environment.",
	"data" : "An adaptive IT organization is capable of continuous change and can thrive in any environment, not just the environment for which it was designed. Rather than relying on dedicated teams, structures, or processes, an adaptive IT organization makes all resources (people, money, technology) and processes as fungible as possible. <p></p>Adaptive IT differs from other approaches today by not stipulating a specific end state but allowing organizations to thrive in any environment.",
	"icon" : "icon rb-notes ion-ios-paper",
	"path" : "#/menu/tab/feed4"
	},
    {
	"program" : "Legal Leadership Council",	
	"content_type" : "images", 
	"title" : "Engagement and Retention for In-House Legal Department Non-Lawyer Professionals", 
	"synopsis" : "Engagement is neutral among in-house legal department non-lawyer professionals. Watch out for the negative impact of dissatisfaction with Opportunity on discretionary effort and retention. Review the key findings about engaging and retaining paralegals and other department staff from the latest Global Talent Trend Series data.",
	"data" : "Corporate strategy at the world’s leading organizations increasingly depends on step-changes in how human capital is recruited, managed, deployed, and enabled. In the budgets and business plans of the 10,000 organizations we support, we see uniformly high expectations for gains in employee productivity, innovation, and ethical conduct. Decisions on talent are now among the principal determinants of an organization’s ability to execute strategy.",
	"icon" : "icon rb-images ion-images",
	"path" : "#/menu/tab/feed5"
	},
    {
	"program" : "Legal Leadership Council",	
	"content_type" : "images", 
	"title" : "Executive Recruiting", 
	"synopsis" : "With more than one-third of executives hired externally, the bar is higher for Recruiting to bring in leaders who can succeed by working with others and adapting to change. Improve executive quality of hire by hiring for network fit and enabling executive recruiters to use their Talent Advisor capabilities.",
	"data" : "Most organizations, seeking to minimize the cost of failure, are bringing executive search capabilities in-house. Although more than 75% of in-house teams have succeeded in reducing the cost of executive search, less than one-third have seen meaningful improvements in quality of hire.",
	"icon" : "icon rb-images ion-images",
	"path" : "#/menu/tab/feed6"
	},
    {
	"program" : "Recruiting Leadership Council",	
	"content_type" : "images", 
	"title" : "Reorient your executive recruting strategy from search savings to quality gains.", 
	"synopsis" : "More than 75% of in-house teams have succeeded in reducing the cost of executive search, less than one-third have seen meaningful",
	"data" : "Most organizations, seeking to minimize the cost of failure, are bringing executive search capabilities in-house. Although more than 75% of in-house teams have succeeded in reducing the cost of executive search, less than one-third have seen meaningful improvements in quality of hire.",
	"icon" : "icon rb-images ion-images",
	"path" : "#/menu/tab/feed6"
	},
    {
	"program" : "Recruiting Leadership Council",	
	"content_type" : "video", 
	"title" : "The Performance Transformation", 
	"synopsis" : "The new work environment is full of performance challenges, yet performance must improve by 27% to meet business goals over the next 12 months.",
	"data" : "Most organizations, seeking to minimize the cost of failure, are bringing executive search capabilities in-house. Although more than 75% of in-house teams have succeeded in reducing the cost of executive search, less than one-third have seen meaningful improvements in quality of hire.",
	"icon" : "icon rb-videos ion-ios-videocam",
	"path" : "#/menu/tab/feed8"
	},
    {
	"program" : "Recruiting Leadership Council",	
	"content_type" : "video", 
	"title" : "Take Your HR Team to the Next Level", 
	"synopsis" : "Less than one-fifth of line leaders rates HR as an effective strategic partner to the line.",
	"data" : "Most organizations, seeking to minimize the cost of failure, are bringing executive search capabilities in-house. Although more than 75% of in-house teams have succeeded in reducing the cost of executive search, less than one-third have seen meaningful improvements in quality of hire.",
	"icon" : "icon rb-videos ion-ios-videocam",
	"path" : "#/menu/tab/feed9"
	},
    {
	"program" : "Recruiting Leadership Council",	
	"content_type" : "video", 
	"title" : "Legal Leadership Council", 
	"synopsis" : "Given the changing impact of information, traditional monitoring processes and technology advancements alone no longer deliver effective identification, management, and prevention of business risks. This change demands the need for early detection and rootcause analysis.",
	"data" : "Most organizations, seeking to minimize the cost of failure, are bringing executive search capabilities in-house. Although more than 75% of in-house teams have succeeded in reducing the cost of executive search, less than one-third have seen meaningful improvements in quality of hire.",
	"icon" : "icon rb-videos ion-ios-videocam",
	"path" : "#/menu/tab/feed10"
	}
    
];
$scope.iNew = [
   {
	"program" : "CIO Leadership Council",	
	"content_type" : "notes", 
	"title" : "Accelerating IT's Clock Speed", 
	"synopsis" : "Learn tactics to make your IT team more responsive to the needs of business partners in an increasingly varied technology environment.",
	"data" : "An adaptive IT organization is capable of continuous change and can thrive in any environment, not just the environment for which it was designed. Rather than relying on dedicated teams, structures, or processes, an adaptive IT organization makes all resources (people, money, technology) and processes as fungible as possible. <p></p>Adaptive IT differs from other approaches today by not stipulating a specific end state but allowing organizations to thrive in any environment.",
	"icon" : "icon rb-notes ion-ios-paper",
	"path" : "#/menu/tab/feed4"
	},
    {
	"program" : "CIO Leadership Council",	
	"content_type" : "notes", 
	"title" : "RACI Chart for Service-Aligned Teams", 
	"synopsis" : "This six-step guide includes 32 documents to help you: Create an effective budgeting process,",
	"data" : "An adaptive IT organization is capable of continuous change and can thrive in any environment, not just the environment for which it was designed. Rather than relying on dedicated teams, structures, or processes, an adaptive IT organization makes all resources (people, money, technology) and processes as fungible as possible. <p></p>Adaptive IT differs from other approaches today by not stipulating a specific end state but allowing organizations to thrive in any environment.",
	"icon" : "icon rb-notes ion-ios-paper",
	"path" : "#/menu/tab/feed4"
	},
    {
	"program" : "CIO Leadership Council",	
	"content_type" : "notes", 
	"title" : "CEB Ignition™ Guide to Creating the Annual Budget for IT", 
	"synopsis" : "Use the sample RACI chart to plan which roles will be responsible for key service management activities.",
	"data" : "An adaptive IT organization is capable of continuous change and can thrive in any environment, not just the environment for which it was designed. Rather than relying on dedicated teams, structures, or processes, an adaptive IT organization makes all resources (people, money, technology) and processes as fungible as possible. <p></p>Adaptive IT differs from other approaches today by not stipulating a specific end state but allowing organizations to thrive in any environment.",
	"icon" : "icon rb-notes ion-ios-paper",
	"path" : "#/menu/tab/feed4"
	}
];
$scope.openDrawer = function(){

	var openBtn = $('#searchBtn'),
	slideMenu = $('#searchMenu');
		if(slideMenu.is(':visible')){
		slideMenu.slideUp(500);
	}
	// layer = $('<nav>').addClass('hidden');
	openBtn.on('click', function(){
		if(slideMenu.is(':hidden')){
			// layer.appendTo('body');
		slideMenu.slideDown(500);
		// } else {
			// slideMenu.slideUp(500);
			// // layer.remove();
		}
	});
}

$scope.openDrawer1 = function(){

	var openBtn = $('#searchBtn1'),
	slideMenu = $('#searchMenu1');
		if(slideMenu.is(':visible')){
		slideMenu.slideUp(500);
	}
	// layer = $('<nav>').addClass('hidden');
	openBtn.on('click', function(){
		if(slideMenu.is(':hidden')){
			// layer.appendTo('body');
		slideMenu.slideDown(500);
		// } else {
			// slideMenu.slideUp(500);
			// // layer.remove();
		}
	});
}
	var orderBy = $filter('orderBy');
	$scope.order = function(predicate, reverse) {
		$scope.feed = orderBy($scope.feed, predicate, reverse);
	};
	$scope.order('program',false);


	  $('#pSelector1').change(function () {
			$scope.openDrawer1();
	  });
	  $('#pSelector').change(function () {
			$scope.openDrawer();
	  });
	  

}])

.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate, $timeout, $ionicPopup) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }

  /*Fake Push notification start*/	  
	$scope.callAtTimeout = function() {
        console.log("$scope.callAtTimeout - Timeout occurred");
		// alert('Your Budget Diagnostics have been delivered');
		
		var confirmPopup = $ionicPopup.confirm({
       title: 'Budget Diagnostic Results',
       template: 'Your diagnostic results are in. Do you want to see them?',
	   cancelText: 'Not now',
        okText: 'Yes'
		// buttons: [
                    // {
                        // text: 'Not now'
                    // },
                  // {
                      // text: '<b>Yes</b>',
                      // type: 'button-assertive'
                  // }
                // ]
     });
     confirmPopup.then(function(res) {
       if(res) {
         // console.log('You are sure');
		 window.location.href="#menu/tab/feedBenchmark"
       } else {
         // console.log('You are not sure');
		 alert('Your Budget Diagnostics have been saved in your Workspace on the My CEB tab.');
       }
     });
	}
    $timeout( function(){ $scope.callAtTimeout(); }, 10000);
	$scope.$on(
		"$destroy",
		function(event) {
			$timeout.cancel(callAtTimeout);
			console.log('destroyed!');
		}
	);
/*Fake Push notification End*/	




$scope.contactAM = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<textarea ng-model="data.wifi">',
     title: 'Contact your Account Manager',
     subTitle: 'Please type in your question and we will get back to you.',
     scope: $scope,
     buttons: [
       { text: 'Cancel'},
       {
         text: '<b>Contact AM</b>',
         type: 'button-assertive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters text
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
  };

})              

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal) {              

  $ionicModal.fromTemplateUrl('templates/modal.html', function (modal) {
    $scope.modal = modal;
	  $scope.modal.confrm = function(){
	  alert('Thank you for your message.')
	  $scope.modal.hide();
  };
  }, {
    animation: 'slide-in-up'
  });
 

 })
.controller('AppCtrl', function() {

  ionic.Platform.ready(function() {

  });

 });
              
              