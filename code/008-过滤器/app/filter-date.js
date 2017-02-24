/**
 * Created by Clam on 2017/2/22.
 */

angular.module('myApp',[])

    .factory('Data',function () {
        return {
            message : '共享的数据'
        };
    })

    .controller('firstController',function ($scope,Data) {
        $scope.data = Data;
        $scope.theDay = new Date();
        console.log($scope.theDay);
    });