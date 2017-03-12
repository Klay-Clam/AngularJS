angular.module('myApp',[])

    .filter('cityFilter',function () {
        return function (data,parent) {
            var filterData = [];
            angular.forEach(data,function (obj) {
                if(obj.parent === parent){
                    filterData.push(obj);
                }
            });
            return filterData;
        }
    })
    .controller('firstController',['$scope',function ($scope) {
        $scope.hobbies = [
            {
                id:1,
                name:'玩游戏'
            },
            {
                id:2,
                name:'写代码'
            },
            {
                id:3,
                name:'睡觉'
            }
        ];

        $scope.cities = [
            {
                name: '上海',
                parent: 0,
                id: 1
            },
            {
                name: '上海市',
                parent: 1,
                id: 2
            },
            {
                name: '徐汇区',
                parent: 2,
                id: 8
            },
            {
                name: '长宁区',
                parent: 2,
                id: 3
            },
            {
                name: '北京',
                parent: 0,
                id: 4
            },
            {
                name: '北京市',
                parent: 4,
                id: 5
            },
            {
                name: '东城区',
                parent: 5,
                id: 6
            },
            {
                name: '丰台区',
                parent: 5,
                id: 7
            },
            {
                name: '浙江',
                parent: 0,
                id: 9
            },
            {
                name: '杭州',
                parent: 9,
                id: 100
            },
            {
                name: '宁波',
                parent: 9,
                id: 11
            },
            {
                name: '西湖区',
                parent: 100,
                id: 12
            },
            {
                name: '北仑区',
                parent: 11,
                id: 13
            }
        ];
        $scope.data = {
            hobbies:[1,2],
            city:3
        };

        //让城市关联使用
        this.findCityId = function (parent) {
            var parentId;
            angular.forEach($scope.cities,function (city) {
                if(city.parentId === parent){
                    parentId = city.parent;
                    return ;
                }
            });
            return parentId;
        };
        
        if($scope.data.city != undefined){
            $scope.data.area = this.findCityId($scope.data.city);
            $scope.data.province = this.findCityId($scope.data.area);
        }


        $scope.toggleHobbySelection = function (id) {
            var index = $scope.data.hobbies.indexOf(id);

            if(index === -1){
                $scope.data.hobbies.push(id);
            } else{
                $scope.data.hobbies.splice(index,1);
            }
            console.log($scope.data.hobbies);
        }
    }]);