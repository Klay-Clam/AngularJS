/**
 * Created by Clam on 2017/2/25.
 */
var myApp = angular.module('myApp',[])

    .directive('customTags',function () {
        return {
            restrict : 'ECAM',
            template : '<div>{{user.name}}</div>',
            replace : true,
            compile: function (tElement,tAttrs,transclude) {

                tElement.append(angular.element('<div>aaa</div>'))
                //编译阶段
                console.log('customTags compile 编译阶段..');
                return {
                    // 表示在编译阶段之后，指令链接到子元素之前运行
                    pre:function preLink() {
                        console.log('customTags preLink..');
                    },
                    //表示在所有的子元素指令都连接之后才运行
                    post:function postLink() {
                        console.log('customTags all child directive link..');
                    }
                };
            }
        };
    })

    .directive('customTags2',function () {
        return {
            restrict : 'ECAM',
            replace : true,
            compile: function (tElement,tAttrs,transclude) {

                //编译阶段
                console.log('customTags2 compile 编译阶段..');
                return {
                    // 表示在编译阶段之后，指令链接到子元素之前运行
                    pre:function preLink() {
                        console.log('customTags2 preLink..');
                    },
                    //表示在所有的子元素指令都连接之后才运行
                    post:function postLink() {
                        console.log('customTags2 all child directive link..');
                    }
                };
            }
        };
    })
    .controller('firstController',['$scope',function ($scope) {
        $scope.users = [
            {
                id:10,
                name:'张三'
            },
            {
                id:20,
                name:'李四'
            },
            {
                id:30,
                name:'赵五'
            }
        ];

    }]);
