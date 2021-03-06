angular.module("guitarStore").controller("mainCtrl", function ($scope, authService) {
  $scope.register = function (user) {
    authService.register(user);
  };
  $scope.login = function (user) {
    authService.login(user);
  };
  $scope.logout = function () {
    authService.logout();
  };
});
