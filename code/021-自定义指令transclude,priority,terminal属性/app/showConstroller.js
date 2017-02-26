/**
 * Created by Clam on 2017/2/25.
 */
var myApp = angular.module('myApp',[])

    .directive('customTags',function () {
        return {
            restrict : 'ECAM',
            template: '<div>新的数据 <span ng-transclude></span></div>',
            replace : true,
            transclude : true
        };
    })

    .directive('customTags2',function () {
        return {
            restrict : 'ECAM',
            template: '<div>2</div>',
            replace : true,
            priority: 3,
            terminal:3
        };
    })

    .directive('customTags3',function () {
        return {
            restrict : 'ECAM',
            template: '<div>3</div>',
            replace : true,
            priority:1
        };
    })

    .controller('firstController',['$scope',function ($scope) {
        $scope.name = '张三';
    }]);
