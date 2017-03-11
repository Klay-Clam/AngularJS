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
            transclude:true,
            controllerAs: 'kittencupGroupController',
            controller:function () {
                this.groups = [];

                this.closeOtherCollapse = function (nowScope) {
                    angular.forEach(this.groups,function (scope) {
                        if(scope !== nowScope){
                            scope.isOpen = false;
                        }
                    })
                }
            }
        }
    })

    .directive('kittencupCollapse',function () {
        return {
            restrict:'E',
            replace:true,
            require: '^kittencupGroup',
            templateUrl:'tmp/kittencupCollapse.html',
            scope:{
                heading:'@'
            },
            link:function (scope,element,attrs,kittencupGroupController) {
                scope.isOpen = false;

                scope.changeOpen = function(){
                    scope.isOpen = !scope.isOpen;
                    kittencupGroupController.closeOtherCollapse(scope);
                };

                kittencupGroupController.groups.push(scope);
            },
            transclude:true
        }
    });