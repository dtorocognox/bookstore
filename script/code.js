/**
 * Created by dtoro on 17/11/2016.
 */
var sCtrl = 0;
var index = angular.module('MarketApp', ['ui.router']);

index.controller('views', function($scope){
    $scope.ctrl;
    $scope.clickMe = function (ctrl1) {
        $scope.ctrl = ctrl1;
        sCtrl = $scope.ctrl;
    } ;
});

index.controller('views2', function($scope){
    $scope.mCtrl = sCtrl;

});

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

index.controller('books', function ($scope, $http) {
    $scope.books = getBooks();

        function getBooks(){
        var json = [];
        $http.get("data/books.json")
            .success(function (books) {
                for(key in books){
                    json.push(books[key]);
                }
            });
            return json ;
        }
});


index.config(function($stateProvider, $urlRouterProvider){

   $urlRouterProvider.otherwise('/login');

   $stateProvider
       .state('login', {
           url:"/login",
           views: {
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
                   templateUrl: "html/home/sidebar.html",
                   controller: 'views'
               },
               "subview3": {
                   templateUrl: "html/home/welcome.html",
                   controller: 'books'
               },
               "subview4": {
                   templateUrl: "html/home/profile.html"
               }
           }
       });
});




