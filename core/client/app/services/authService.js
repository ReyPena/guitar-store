angular.module("guitarStore").service("authService", function ($http) {
  this.register = function (registerInfo){
    return $http({
      method: "POST",
      url: "/api/user",
      data: registerInfo
    }).then(function (result) {
      console.log("register return", result);
    });
  };
  this.login = function (loginInfo){
    return $http({
      method: "POST",
      url: "/auth/local",
      data: loginInfo
    }).then(function (result) {
      console.log("login return" , result);
    });
  };
  this.logout =  function () {
    return $http({
      method: "GET",
      url: "/auth/logout"
    }).then(function (result) {
      console.log("logout");
    });
  };
});
