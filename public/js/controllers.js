'use strict';

/* Controllers */

function go() {
  $("#form").submit(function() {
        //Do the AJAX post
         $(this).ajaxSubmit( {
            error: function(xhr) {
        status('Error: ' + xhr.status);
                },
     
                success: function(response) {
        //TODO: We will fill this in later
                }
           })
        //Important. Stop the normal POST
        return false;
    });
}
angular.module('myApp.factories', []).
factory('formDataObject', function() {
  return function(data) {
    var fd = new FormData();
    angular.forEach(data, function(value, key) {
      fd.append(key, value);
    });
    return fd;
  };
});
angular.module('myApp.controllers', ['myApp.factories']).
  controller('AppCtrl', function ($scope, $http, formDataObject) {
    console.log(formDataObject)
    $scope.submit = function(file) {

        var fd = new FormData()
        // for (var i in scope.files) {
        fd.append("avatar",file)    
        var xhr = new XMLHttpRequest()
        // xhr.upload.addEventListener("progress", uploadProgress, false)
        // xhr.addEventListener("load", uploadComplete, false)
        // xhr.addEventListener("error", uploadFailed, false)
        // xhr.addEventListener("abort", uploadCanceled, false)
        xhr.open("POST", "/api/upload")
        xhr.send(fd)
      return false;
    } 
    
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });
    $scope.upload = function(file) {
      console.log(file)
       $http({
        method: 'GET',
        url: '/api/upload?file=' + file
      }).
      success(function (data, status, headers, config) {
        // alert('back')
       console.log(data)
       console.log(status)
      }).
      error(function (data, status, headers, config) {
         console.log(data)
       console.log(status)

      });
    }
  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
