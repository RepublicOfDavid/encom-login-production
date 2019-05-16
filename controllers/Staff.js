var encomLoginApp = angular.module("encomLoginApp");

encomLoginApp.controller("StaffController", function($scope, $http, $location, $routeParams, flash) {

  $scope.flash = flash;

  $scope.loginCheck = function() {
    if(sessionStorage.accessToken === undefined) {
      $location.path( "/" );
    }
  }

  $scope.getStaff = function() {
    $http({
      method  : 'GET',
      url     : sessionStorage.APIurl + 'users',
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
    })
    .then(
      function successCallback(response) {
        $scope.staffList = response.data.data;
        console.log($scope.staffList);
      },
      function errorCallback(response) {
        console.log("There was an error loading the data.");
      }
    );
  };

  $scope.logout = function() {
    delete sessionStorage.accessToken;
    delete sessionStorage.email;
    $location.path( "/" );
  };

});