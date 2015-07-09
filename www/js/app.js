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
       content: 'Please wait for a moment while I connect the call for you.',
	   button: 'Cancel'
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
})              

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {              
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
              
              