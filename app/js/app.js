var app = angular.module("app", []);

app.config(function($routeProvider, $locationProvider) {

 $routeProvider.otherwise({ redirectTo: '/' });
 $locationProvider.html5Mode(true);

});


  

