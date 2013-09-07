'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
function ( $locationProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/view1',
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    })
    .state('view2', {
      url: '/view2',
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    })
   $urlRouterProvider.otherwise('view2')
   $locationProvider.html5Mode(true);
}]);
