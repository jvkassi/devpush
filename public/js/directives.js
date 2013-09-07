'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('upload', ['$rootScope', function($rootScope){
  	// Runs during compile
  	return {
  		link: function($scope, element, iAttrs, controller) {
  			element.bind('change', function(event) {
  				console.log(event)
  				var file = event.target.files[0]
  				$scope.$apply(function() {
  					
	  				$scope.file = file
	  				  $scope.submit(file)
	  				// $scope.upload(file.name)
  				})
  			})
  		}
  	};
  }]).
   directive('form', ['$rootScope', function($rootScope){
  	// Runs during compile
  	return {
  		link: function($scope, element, iAttrs, controller) {
  			element.bind('submit', function(event) {
  				alert('asdf')

  			// 	console.log(event)
  				var file = event.target.files[0]
  				$scope.$apply(function() {
  					
	  				$scope.file = file;
	  				// console.log(file)
	  				// $scope.upload(file.name)
  				})
  			// 	event.stopPropagation()
  			})
  		}
  	};
  }]);

