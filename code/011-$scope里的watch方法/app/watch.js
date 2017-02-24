/**
 * Created by Clam on 2017/2/22.
 */
var app = angular.module('myApp',[]);
app.controller('firstController',function ($scope) {
    $scope.name = '张三';
    $scope.date = {
        name: '李四',
        count:20
    }
    $scope.count = 0;

    $scope.$watch('name',function (newValue,oldValue) {
        //console.log(newValue,oldValue);
        ++$scope.count;
        if($scope.count > 10){
            $scope.name = '改变次数已经大于10次了！';
        }
    });

    //第三个参数是deepWatch，监听对象的每一个参数的变化都将触发watch函数
    $scope.$watch('date',function () {

    },true);
})