/**
 * Created by Clam on 2017/2/25.
 */
var app = angular.module('myApp',[])

    .directive('bookList',function () {
        return {
            restrict:"ECAM",
            controller:function($scope){

                //console.log($scope);
                // $scope.books = $scope.a();
                // $scope.books = $scope.b;
                // $scope.b.push({name:'Nodejs'});

                console.log($scope.c);
                //$scope.title = $scope.c;
            },
            // 创建一个有继承链的独立作用域
            // scope:true,

            // 当为对象的时候也会创建一个独立的作用域
            scope:{
                //将父元素 books 封装成一个函数
                // a : '&books'
                // 双向绑定 b = parentBooks 属性对应的父作用域表达式
                // b:'=parentBooks'

                // 使用简单数据类型的方法
                c: '@parentTitle'
            },
            controllerAs:'bookListController',
            template:'<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace:true
        }
    })


    .controller('firstController',['$scope',function($scope){
        console.log($scope);
        $scope.books= [
            {
                name:'php'
            },
            {
                name:'javascript'
            },
            {
                name:'java'
            }
        ];
        $scope.title = '张三';
    }]);