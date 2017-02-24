/**
 * Created by Clam on 2017/2/22.
 */
var app = angular.module('myApp',[]);
app.controller('firstController', function ($scope) {
    $scope.date = new Date();
    setInterval(function () {
        $scope.date = new Date;
    },1000);

    setInterval(function () {
        $scope.$apply(function () {
            $scope.date = new Date;
            //会去触发脏检查
        })
    },1000);
});