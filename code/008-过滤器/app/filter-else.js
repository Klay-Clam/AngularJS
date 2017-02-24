/**
 * Created by Clam on 2017/2/23.
 */

angular.module('myApp',[])

    .factory('Data',function () {
        return {
            message : 'Hello World',
            city : [
                {
                    name:'上海',
                    py:'shanghai'
                },
                {
                    name:'北京',
                    py:'beijing'
                },
                {
                    name:'广州',
                    py:'guangzhou'
                },
                {
                    name:"深圳",
                    py:'shenzheng'
                }

            ]
        };
    })

    .controller('firstController',function ($scope,Data,$filter) {
        $scope.data = Data;
        $scope.theDay = new Date();

        // 过滤器
        var number = $filter('number')(3000);
        var jsonString = $filter('json')($scope.data);
        console.log(jsonString);
        console.log($scope.data);
    });
