var app = angular.module("guitarStore", ["ui.router"])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "app/features/home/home.html"
    });

  $urlRouterProvider
    .otherwise("/home");
});
