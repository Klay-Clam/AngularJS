/**
 * Created by Clam on 2017/2/24.
 */
angular.module('myApp',[],function ($filterProvider,$provide,$controllerProvider) {

    $provide.service('Data',function () {
        return [
            {
                name:'张三',
                age:'20',
                city:'上海'
            },
            {
                name:'李四',
                age:'11',
                city:'北京'
            },
            {
                name:'王五',
                age:'23',
                city:'广州'
            },
            {
                name:'赵六',
                age:'28',
                city:'深圳'
            },
            {
                name:'宋七',
                age:'31',
                city:'杭州'
            },
        ];
    })

    //  $filterProvider.register  注册过滤方法
    $filterProvider.register('filterAge',function () {
        return function (obj) {
            var newObj = [];
            angular.forEach(obj,function (o) {
                if(o.age > 20){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    })


    $controllerProvider.register('firstController',function ($scope,Data) {
        $scope.data = Data;
    })
})

// module.filter 的方法实现自定义过滤
    .filter('filterCity',function () {
        return function (obj) {
            var newObj = [];
            angular.forEach(obj,function (o) {
                if(o.city === '上海'){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    })