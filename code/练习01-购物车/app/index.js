/**
 * Created by Clam on 2017/2/22.
 */


var myApp = angular.module('myCart',[]);

myApp.controller('cartController',function ($scope) {
    $scope.cart = [
        {
            id:1000,
            name:'iphone 4s',
            quantity:'3',
            price:3300
        },
        {
            id:2000,
            name:'iphone 5s',
            quantity:'2',
            price:4300
        },
        {
            id:3000,
            name:'iphone 6s',
            quantity:'5',
            price:5300
        },
        {
            id:4000,
            name:'iphone 7s',
            quantity:'4',
            price:6300
        },

    ];

    /*
    * 计算购物总价
    * */
    $scope.fullPrice = function () {

        var all = 0;
        angular.forEach($scope.cart,function (item) {
            all += parseInt(item.quantity * item.price);
        });

        return all;
    };


    /*
    * 计算总的购买数量
    * */
    $scope.fullQuantity = function () {
        var all = 0;
        angular.forEach($scope.cart,function (item) {
            all += parseInt(item.quantity);
        });
        return all;
    };

    /*
    * 添加一个商品的购物数量
    * */
    $scope.add = function (id) {
        var index = findIndex(id);
        if(index != -1){
            ++$scope.cart[index].quantity;
        }
    };

    /*
     * 减少一个商品的购物数量
     * */
    $scope.reduce = function (id) {
        var index = findIndex(id);
        if(index != -1 ){
            if($scope.cart[index].quantity){
                --$scope.cart[index].quantity;
            }
        }
    };

    
    /*
    * 寻找当前项的索引
    * */
    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart,function (item,key) {
            if(item.id == id){
                index = key;
                return;
            }
        });
        return index;
    }
    

    /*
    * 移除操作
    * */
    $scope.remove = function (id) {
        //alert(id);
        var index = findIndex(id);
        if(index != -1){
            $scope.cart.splice(index,1);
        }
    };

    /*
    * 自动监测购买的数量，是否移除这条记录
    * */
    $scope.$watch('cart',function (newValue,oldValue) {
        angular.forEach(newValue,function (item,key) {
            if(item.quantity < 1){
                var returnKey = confirm('是否从购物车内删除改产品！');
                if(returnKey){
                    $scope.remove(item.id);
                }
                else {
                    item.quantity = oldValue[key].quantity;
                }

            }
        })
    },true);

    /*
    * 清空购物车 操作
    * */
    $scope.clearCart = function () {
        /*remove.this.$$parentNode;*/
        this.cart = {};
    }
});














