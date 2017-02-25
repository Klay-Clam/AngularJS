/**
 * Created by Clam on 2017/2/25.
 */
var myApp = angular.module('myApp',[])
    .controller('firstController',function ($scope) {
        $scope.status = false;
        $scope.changeStatus = function (event) {
            $scope.status = !$scope.status;
            //console.log(event.target);
            angular.element(event.target).html('切换状态：' + $scope.status);
        };
    })