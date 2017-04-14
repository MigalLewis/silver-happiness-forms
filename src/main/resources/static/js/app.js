var app = angular.module('app', ['ngRoute','ngResource','forms.business']);
app.config(function($routeProvider){
    $routeProvider
        .when('/projects',{
            templateUrl: '/views/projects.html',
            controller: 'projectsController'
        })
        .when('/about',{
            templateUrl: '/views/about.html'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});

