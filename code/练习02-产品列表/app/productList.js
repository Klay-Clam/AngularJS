/**
 * Created by Clam on 2017/2/22.
 */
angular.module('product',[])

    .service('productData',function () {
        return [
            {
                id:421,
                name:'iphone5',
                price:3400
            },
            {
                id:212,
                name:'iphone6',
                price:3400
            },
            {
                id:313,
                name:'iphone7',
                price:3400
            },
            {
                id:434,
                name:'iphone7s',
                price:3400
            }
        ];
    })


    .controller('productController',function ($scope,productData) {
        $scope.productData = productData;

        $scope.orderType = 'id';

        $scope.order = '-';
        
        $scope.changeOrder = function (type) {
            $scope.orderType = type;
            if($scope.order === ''){
                $scope.order = '-';
            }
            else{
                $scope.order = '';
            }
        }
    });














