'use strict';

/**
 * @ngdoc overview
 * @name angularNgRepeatApp
 * @description
 * # angularNgRepeatApp
 *
 * Main module of the application.
 */

var angularNgRepeatApp = angular.module('angularNgRepeatApp', []);
  

  angularNgRepeatApp.controller('app', function($scope) {
    $scope.selectedRow = 0;
    $scope.teamItems = [{
      name: 'LeBron James',
      team: 'Cleveland Cavaliers',
      position: 'Small Forward'
    },

    {
      name: 'Kobe Bryant',
      team: 'Los Angeles Lakers',
      position: 'Shooting Guard'
    },

    {
      name: 'Kyrie Irving',
      team: 'Cleveland Cavaliers',
      position: 'Point Guard'
    },

    {
      name: 'Dwyane Wade',
      team: 'Miami Heat',
      position: 'Shooting Guard'
    },

    {
      name: 'Dirk Nowitzki',
      team: 'Dallas Mavericks',
      position: 'Power Forward'
    },

    {
      name: 'Anthony Davis',
      team: 'New Orleans Pelicans',
      position: 'Power Forward'
    }

    ];
    $scope.setClickedRow = function(index) {
      $scope.selectedRow = index;
    };

    $scope.$watch('selectedRow', function() {
      console.log('Process');
    });

});

angularNgRepeatApp.directive('arrowSelector', ['$document', function($document){
  return{
    restrict: 'A',
    link:function(scope,elem,attrs,ctrl){
      var elemFocus = false;
      elem.on('mouseenter',function(){
        elemFocus = true;
        console.log(elemFocus);
      });
      elem.on('mouseleave', function(){
        elemFocus = false;
        console.log(elemFocus);
      });
      $document.bind('keydown',function(e) {
        if(elemFocus){
          if(e.keyCode === 38) {
            console.log(scope.selectedRow);
            if(scope.selectedRow === 0) {
              return;
            }
            scope.selectedRow--;
            scope.$apply();
            e.preventDefault();
          }
          if(e.keyCode === 40) {
            if(scope.selectedRow === scope.teamItems.length - 1) {
              return;
            }
            scope.selectedRow++;
            scope.$apply();
            e.preventDefault();
          }
        }
      });
    }
  };
}]);  
      

