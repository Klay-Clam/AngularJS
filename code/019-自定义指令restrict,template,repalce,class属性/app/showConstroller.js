/**
 * Created by Clam on 2017/2/25.
 */
var myApp = angular.module('myApp',[],['$compileProvider',function ($compileProvider){
    $compileProvider.directive('customTags',function () {
        return {
            restrict : 'ECAM',
            template : '<div>custom-tags-html</div>',
            compile : function () {
                console.log(1);
            },
            replace : true
        };
    });
}])

    .controller('firstController',function ($scope) {
        console.log(2);
    })
