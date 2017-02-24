/**
 * Created by Clam on 2017/2/23.
 */
var myApp = angular.module('myApp',[],function ($provide) {
   //console.log(1);
    //自定义服务
    $provide.provider('CustomService',function () {

        this.$get = function () {
            return {
                message : 'CustomService Message'
            }
        }
    });
});

myApp.controller('firstController',function (CustomService,$scope) {

    console.log(CustomService);
    $scope.name = '张三';

})