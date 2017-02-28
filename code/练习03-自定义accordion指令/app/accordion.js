/**
 * Created by clam on 17-2-28.
 */
var app = angular.module('myApp',[])
    //数据
    .factory('Data',function () {
        return [
            {
                title:'no1',
                content:'no1-content'
            },
            {
                title:'no2',
                content:'no2-content'
            },
            {
                title:'no3',
                content:'no3-content'
            }
        ]
    })

    //控制器
    .controller('firstController',['$scope','Data',function ($scope,Data) {
        $scope.data = Data;
    }])

    //创建指令
    .directive('kittencupGroup',function () {
        return {
            restrict:"E",
            replace:true,
            template: '<div class="panel-group" ng-transclude></div>',
            transclude:true
        }
    })

    .directive('kittencupCollapse',function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tmp/kittencupCollapse.html',
            scope:{
                heading:'@'
            },
            controller:function ($scope) {
                $scope.isOpen = true;
            },
            transclude:true
        }
    });