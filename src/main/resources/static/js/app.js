var app = angular.module('app', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: '/views/users.html',
            controller: 'usersController'
        })
        .when('/roles',{
            templateUrl: '/views/roles.html',
            controller: 'rolesController'
        })
        .when('/business',{
            templateUrl: '/views/businessDetails.html',
            controller: 'businessController'
        })
        .when('/members',{
            templateUrl: '/views/members.html',
            controller: 'memberController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});

