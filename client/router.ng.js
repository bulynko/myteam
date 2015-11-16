
angular.module("myteam").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
    	$location.path("/login");
      $state.go("login");

    }
  });
}]);

angular.module("myteam").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $stateProvider
        .state('login', {
        url: '/login',
        templateUrl: 'client/myteam/views/login-start.ng.html',
        controller: 'loginCtrl'
      })
        .state('teamview', {
        url: '/teamview',
        templateUrl: 'client/myteam/views/myteam.ng.html',
        controller: 'myteamCtrl'
      })
        .state('memeber', {
        url: '/myteam/:memberId',
        templateUrl: 'client/myteam/views/memeber.ng.html',
        controller: 'memeberCtrl',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

    $urlRouterProvider.otherwise("/login");

  }]);

