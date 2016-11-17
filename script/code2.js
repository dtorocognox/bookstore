/**
 * Created by dtoro on 17/11/2016.
 */

var home = angular.module('homePage', ['ui.router']);

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
