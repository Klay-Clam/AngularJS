/**
 * Created by Clam on 2017/2/25.
 */
var myApp = angular.module('myApp',[],function () {

})
    //隐式的依赖注入
    .controller('firstController',function ($scope) {
    
    })

    //显式的依赖注入
    .controller('secondController',['$scope',function (a,b) {
        alert(b('json')([1,2,3,4,5]));
    }]);