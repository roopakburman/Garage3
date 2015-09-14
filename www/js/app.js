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
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');
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
	.state('menu.tabs.feed11', {
      url: "/feed11",
      views: {
        'buttons-tab': {
          templateUrl: "templates/feed11.html",
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
	.state('menu.tabs.modal1', {
      url: "/modal1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/modal1.html",
          controller: 'shareCtrl'
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
	.state('menu.tabs.myPastEvents', {
      url: "/myPastEvents",
      views: {
        'slide-tab': {
          templateUrl: "templates/myPastEvents.html"
        }
      }
    })
	.state('menu.tabs.myPastEvents2', {
      url: "/myPastEvents2",
      views: {
        'slide-tab': {
          templateUrl: "templates/myPastEvents2.html"
        }
      }
    })
	.state('menu.tabs.myPastEvents3', {
      url: "/myPastEvents3",
      views: {
        'slide-tab': {
          templateUrl: "templates/myPastEvents3.html"
        }
      }
    })
	.state('menu.tabs.myPastEvents4', {
      url: "/myPastEvents4",
      views: {
        'slide-tab': {
          templateUrl: "templates/myPastEvents4.html"
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
	.state('menu.tabs.userProfileExtn', {
      url: "/userProfileExtn",
      views: {
        'userProfile-tab': {
          templateUrl: "templates/userProfileExtn.html",
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
		}else if(authData.uid == 'simplelogin:27'){
			alert('Welcome Matthew King!');
		}else if(authData.uid == 'simplelogin:28'){
			alert('Welcome Ponna!');
		}else if(authData.uid == 'simplelogin:29'){
			alert('Welcome Fletcher!');
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
.controller('userProfileCtrl', function($scope, $http){
	$scope.nameFilter = currentUser;
	$http.get('../json/userData.json')
	.then(function(res){
		$scope.userData = res.data;
	});

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
		else if(currentUser == 'simplelogin:27'){
			$scope.userName = "Matthew King";
			$scope.userEmail = "matt@king.com";
			$scope.userPhone = "571-303-4756";
		}
	
	$scope.contactJames = function(){
		alert('Thanks for your message. James would reach out to you shortly.');
		
		window.location.href = '#menu/tab/userProfile';
	}

})
// .controller('userProfileCtrl', function($scope, $http){
.controller('tickerCtrl',function($scope, $http){
	$http.get('../json/iTicker.json').then(function(res){
		$scope.iTicker = res.data;
	});
})
.controller('dataCtrl', function($scope, $http){
	$scope.nameFilter = '';
	$http.get('../json/data.json').then(function(res){
		$scope.data = res.data;
	});

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
            {v: .8, f: "40%"},
            {v: .6, f: "60%"}
        ]},
        {c: [
            {v: "Contracts"},
            {v: .7, f: "50%"},
            {v: .5, f: "50%"}
        ]},
        {c: [
            {v: "FIN"},
            {v: .7, f: "20%"},
            {v: .8, f: "80%"}

        ]},
        {c: [
            {v: "L&E"},
            {v: .6, f: "10%"},
            {v: .9, f: "90%"}

        ]},
        {c: [
            {v: "M&A"},
            {v: .7, f: "40%"},
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
        "isStacked": "false",
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
.controller('feedCtrl', function($scope, $http){
	$http.get('../json/feed.json').then(function(res){
		$scope.feed = res.data;
	});	
	$http.get('../json/iNew.json').then(function(res){
		$scope.iNew = res.data;
	});	
	
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
        "label": "iPad",
        "type": "number",
        "p": {}
      },
      {
        "id": "cost-id",
        "label": "Mobile",
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
            "v": .6,
            "f": ""
          },
          {
            "v": .2,
            "f": ""
          },
          {
            "v": .1,
            "f": ""
          },
          {
            "v": .1
          }
        ]
      },
      {
        "c": [
          {
            "v": "Banking & FS"
          },
          {
            "v": .1
          },
          {
            "v": .7,
            "f": ""
          },
          {
            "v": .1
          },
          {
            "v": .1
          }
        ]
      },
      {
        "c": [
          {
            "v": "$5-$10B"
          },
          {
            "v": .1
          },
          {
            "v": .1
          },
          {
            "v": .2
          },
          {
            "v": .6
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
      "title": "",
      "gridlines": {
        "count": 10
      }
    },
    "hAxis": {
      "title": "",
	  "format": '#,###%'
    }
  },
  "formatters": {
	        number : [{
        
        pattern: "#,###%"
      }]
  }
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

.controller('shareCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal){
		$ionicModal.fromTemplateUrl('templates/modal1.html', function (modal) {
		$scope.modal1 = modal;
		$scope.modal1.confrm = function(){
		alert('Content Sent!')
		$scope.modal1.hide();
		};
	}, {
		animation: 'slide-in-up'
	});	
})
.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate, $timeout, $ionicPopup) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }

  /*Fake Push notification start*/	  
	$scope.callAtTimeout = function() {
        console.log("$scope.callAtTimeout - Timeout occurred");
		// alert('Your Budget Diagnostics have been delivered');
		
		var confirmPopup = $ionicPopup.confirm({
       title: 'CEB: 2015 Budget Diagnostic Results',
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
		 alert('Your Budget Diagnostics have been saved in the My Favorites section.');
       }
     });
	}
    $timeout( function(){ $scope.callAtTimeout(); }, 78000);
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
              
              