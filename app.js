var encomLoginApp = angular.module('encomLoginApp',['ngRoute', 'ngAnimate', 'angular.http.request.loader', 'elif']);


sessionStorage.APIurl = 'https://reqres.in/api/';


encomLoginApp.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);


encomLoginApp.config(function($routeProvider){

	$routeProvider.when('/',{
		controller:'LoginController',
		templateUrl: 'views/login.html'
	})

	.when('/staff',{
		controller:'StaffController',
		templateUrl: 'views/staff.html'
    })

	.otherwise({
		redirectTo: '/'
	})
})


encomLoginApp.factory("flash", function($rootScope) {
  var queue = [];
  var currentMessage = "";

  $rootScope.$on("$routeChangeSuccess", function() {
    currentMessage = queue.shift() || "";
  });

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      return currentMessage;
    }
  };
});


angular.module('App', [
    'angular-http.request.loader'
])