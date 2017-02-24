/**
 * Created by Clam on 2017/2/23.
 */
angular.module('myApp',[])

    .factory('Data',function () {
        return {
            message :'共享的数据'
        };
    })

    .controller('firstController',function ($scope,Data) {
        $scope.data = {
            name : '张三'
        };
        //console.log($scope);

        $scope.Data = Data;
    })


    .controller('secondController',function ($scope,Data) {

        $scope.data = $scope.$$prevSibling.data;

        $scope.Data = Data;
    });