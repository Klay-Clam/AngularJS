/**
 * Created by Clam on 2017/2/25.
 */
var app = angular.module('myApp',[])

    .directive('bookList',function () {
        return {
            restrict:"ECAM",
            controller:function($scope){
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
                this.addBook = function () {
                    alert('add book');
                }
            },
            controllerAs:'bookListController',
            template:'<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace:true,
            link:function (scope,iElement,iAtrs,bookListController) {
                iElement.on('click',bookListController.addBook);
            }
        }
    })

    .controller('firstController',['$scope',function($scope){
        //console.log($scope);

    }]);