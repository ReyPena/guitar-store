app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "../views/routeViews/home.html"
    });

  $urlRouterProvider
    .otherwise("/home");
});
