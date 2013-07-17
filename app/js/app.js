var app = angular.module("app", []);

app.config(function($routeProvider) {

 $routeProvider.otherwise({ redirectTo: '/home' });

});


  

