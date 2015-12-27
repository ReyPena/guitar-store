angular.module("guitarStore").config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "../views/routeViews/home/home.html"
    })
    .state("login", {
      url: "/login",
      templateUrl: "../views/routeViews/auth/login/login.html",
      controller: "loginCtrl"
    })
    .state("registration", {
      url: "/registration",
      templateUrl: "../views/routeViews/auth/registration/registration.html",
      controller: "registrationCtrl"
    })
    .state("market", {
      url: "/market",
      templateUrl: "../views/routeViews/market/market.html"
    })
    .state("product", {
      url: "/product",
      templateUrl: "../views/routeViews/product/product.html"
    })
    .state("market-cart", {
      url: "/market-cart",
      templateUrl: "../views/routeViews/market-cart/market-cart.html"
    })
    .state("calendar", {
      url: "/calendar",
      templateUrl: "../views/routeViews/calendar/calendar.html"
    })
    .state("sudo", {
      url: "/sudo",
      templateUrl: "../views/routeViews/sudo/sudo.html"
    });

  $urlRouterProvider
    .otherwise("/home");
});
