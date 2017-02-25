/**
 * Created by Clam on 2017/2/25.
 */
var myApp = angular.module('myApp',[])
    .controller('firstController',function ($scope) {
        $scope.status = false;
        $scope.changeStatus = function (event) {
            $scope.status = !$scope.status;
            //console.log(event.target);
            angular.element(event.target).html('切换状态：' + $scope.status);
        };

        $scope.defaultStyle = {color:'red','margin-top': '50px'};

        $scope.src = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4271053251,2424464488&fm=116&gp=0.jpg';
    })