var encomLoginApp = angular.module("encomLoginApp");

encomLoginApp.controller("LoginController", function($scope, $http, $location, $routeParams, flash) {

  $scope.flash = flash;

  $scope.loginCheck = function() {
    if(sessionStorage.accessToken != null) {
      $location.path( "/staff" );
    }
  }


  $scope.submitForm = function() {

    $http({
      method  : 'POST',
      url     : sessionStorage.APIurl + 'login',
      data    : 'email='+ $scope.user.email +'&password='+ $scope.user.password,
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
    })
    .then(
      function successCallback(response) {
        sessionStorage.accessToken = response.data.token;
        sessionStorage.username = $scope.user.email;
        console.log(sessionStorage.accessToken);
        $location.path( "/staff" );
      },
      function errorCallback(response) {
        $scope.user.error ="Permission Denied ";
      }
    );
  };

});