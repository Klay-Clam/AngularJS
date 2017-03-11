angular.module('myApp',[],['$provide',function ($provide) {
    console.log('config');
    // $provide.factory
    // $provide.service

    //$provide.constant()
}])
    .config(function (APIKEY) {
        console.log(APIKEY);
        console.log('config');
    })
    //在 config 之后, controller  之前执行的
    .run(function () {
        console.log('run');
    })
    //任何方法中都是可以注入的
    .constant('APIKEY','xxx')
    //只能注入 controller,service,factory等方法中
    .value('version','1.0.0')

    .controller('firstController',['APIKEY','version',function (APIKEY,version) {
        console.log(APIKEY);
        console.log(version);
        console.log('controller');
    }]);