var ceb = angular.module('ionicApp', ['ionic'])
var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
window.currentUser = "";
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
/* 	$rootScope.logout = function () {
        console.log("Logging out from the app");
		alert("You are successfully logged out.");
    } */
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
.controller('loginCtrl', function($scope, $window, $location){
/* $scope.go = function ( path ) {
  $location.path( path );
}; */
$scope.navTitle = '<img class="logo title" src="img/logo-white-sm.png" />'; 

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
		} else {
		console.log("Authenticated successfully with payload:", authData);
		console.log("User " + authData.uid + " is logged in with " + authData.provider);
		$scope.isLogin = true;
		/* console.log("isLogin=true") */
		window.location.href = '#menu/tab/buttons';
		
		currentUser = authData.uid;
		
		if(authData.uid == 'simplelogin:14'){
			alert('Welcome Price!');
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
		"userName" : "Price Jett",
		"userEmail" : "jettp@cebglobal.com",
		"userTitle" : "Chief Information Officer",
		"userDept" : "IT",
		"userPhone" : "x144772",
		"userOffice" : "05502",
		"uPic" : "img/price.png"
	},
	{
		"userID" : "simplelogin:18",
		"userName" : "Haniel Lynn",
		"userEmail" : "lynnh@cebglobal.com",
		"userTitle" : "Group President",
		"userDept" : "BPDS General/Central",
		"userPhone" : "x144015",
		"userOffice" : "22192",
		"uPic" : "img/haniel.jpg"
	},
	{
		"userID" : "simplelogin:16",
		"userName" : "Melody Jones",
		"userEmail" : "melodyjones@cebglobal.com",
		"userTitle" : "Chief Administrative Officer",
		"userDept" : "Human Resources",
		"userPhone" : "x144003",
		"userOffice" : "19084",
		"uPic" : "img/melody.jpg"
	},
	{
		"userID" : "simplelogin:17",
		"userName" : "Warren Thune",
		"userEmail" : "thunew@cebglobal.com",
		"userTitle" : "Group President",
		"userDept" : "TM General/Central",
		"userPhone" : "x144613",
		"userOffice" : "21506",
		"uPic" : "img/warren.jpg"
	},
	{
		"userID" : "simplelogin:15",		
		"userName" : "Tom Monahan",
		"userEmail" : "MonahanT@cebglobal.com",
		"userTitle" : "Chief Executive Officer",
		"userDept" : "Office of the CEO",
		"userPhone" : "x144013",
		"userOffice" : "22088",
		"uPic" : "img/tom.jpg"
	},
	{
		"userID" : "simplelogin:19",		
		"userName" : "The Garage",
		"userEmail" : "garage@cebglobal.com",
		"userTitle" : "The Garage",
		"userDept" : "Secret room on 10th floor",
		"userPhone" : "x146666",
		"userOffice" : "xxxxxx",
		"uPic" : "img/garage.jpg"
	},
	];

})

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
.controller('ButtonsTabCtrl', function ($scope, $ionicModal) {
    $scope.showPopup = function () {
     $ionicPopup.alert({
       title: 'Calling your Account Manager!',
       content: 'Please wait for a moment while I connect the call for you.'
     });
    };
	
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


})              

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal) {              

  $ionicModal.fromTemplateUrl('templates/modal.html', function (modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up'
  });
 })

 .controller('AppCtrl', function() {

  ionic.Platform.ready(function() {

  });

 });
              
              