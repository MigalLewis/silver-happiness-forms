var app = angular.module('app', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/business',{
            templateUrl: '/views/businessDetails.html',
            controller: 'businessController'
        })
        .when('/members',{
            templateUrl: '/views/members.html',
            controller: 'memberController'
        })
        .when('/funding',{
            templateUrl: '/views/funding.html',
            controller: 'fundingController'
        })
        .when('/projects',{
            templateUrl: '/views/projects.html',
            controller: 'projectsController'
        })
        .when('/about',{
            templateUrl: '/views/about.html',
            controller: 'aboutController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});

