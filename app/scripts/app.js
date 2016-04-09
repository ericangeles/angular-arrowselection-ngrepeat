
'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

var app = angular.module('app', ['ngRoute'])
.config(['$routeProvider',
  function ($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).otherwise({ redirectTo: '/' });
  }]);
