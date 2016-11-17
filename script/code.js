/**
 * Created by dtoro on 17/11/2016.
 */

var index = angular.module('MarketApp', ['ui.router']);

index.controller('login', function($scope, $http){
    $scope.email = [];
    $scope.password = [];
    $http.get("data/data.json")
        .success(function (data) {
            for(key in data){
                $scope.email.push(data[key]["email"]);
                $scope.password.push(data[key]["password"]);
            }
        });

    $scope.enter = function(inEmail, inPass){
        for(i=0; i<=$scope.password.length-1; i++){
            if($scope.email[i] == inEmail && $scope.password[i] == inPass){
                return true;
            }
        }

    }
});


index.config(function($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise('/login');

   $stateProvider
       .state('login', {
           url:"/login",
           views:{
               "subview1": {
                   templateUrl: "html/login.html"
               }
           }
       })
       .state('home',{
           url: "/home",
           views:{
               "subview1": {
                   templateUrl: "html/home.html"
               },
               "subview2": {
                   templatUrl: "html/home/welcome.html"
               }
           }
       });
});



var home = angular.module('homePage', ['ngRouter']);

home.controller('home', function ($http) {
    //Get Books
    $http.get("data/books.json")
        .success(function (data){
            console.log(data);
        })
});

home.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: '../html/login.html'
        })
}]);



