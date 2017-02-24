/**
 * Created by Clam on 2016/12/29.
 */

var app = angular.module('myApp',[]);
app.controller('outputFullName',function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.outputFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    }
});