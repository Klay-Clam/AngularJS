/**
 * Created by Clam on 2017/2/23.
 */
var myApp = angular.module('myApp',[],function ($provide) {

    //自定义工厂
    $provide.factory('CustomFactory',function () {
        return [1,2,3,4,5,6];
    });

    //自定义服务
    $provide.service('CustomService',function () {
        return ['上海'];
    });
});

myApp.controller('firstController',function ($scope,CustomFactory,CustomService) {
    $scope.name = '张三';


    console.log(CustomFactory);
    console.log(CustomService);
});