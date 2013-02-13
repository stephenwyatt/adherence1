angular.module('ngApp', [])
.config(function($routeProvider) {
     $routeProvider.
      when('/', {templateUrl: '/app/views/login.html'}).
      when('/user', {templateUrl: '/app/views/user.html', controller:'UserCtrl'}).
      when('/new1', {templateUrl: '/app/partials/edit.html', controller:'NewCtrl'}).
      when('/edit:id', {templateUrl: '/app/partials/edit.html', controller:'EditCtrl'}).
      when('/new', {templateUrl: '/app/partials/survey.html',controller: 'SurveyCtrl'}).
      when('/user/:id', {templateUrl: '/app/views/history1.html', controller: 'UserCtrl'}).
      otherwise({redirectTo: '/app/views/login.html'});
  });

