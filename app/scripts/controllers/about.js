'use strict';

/**
 * @ngdoc function
 * @name angularNgRepeatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularNgRepeatApp
 */
angular.module('app')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
