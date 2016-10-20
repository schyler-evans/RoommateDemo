/// <reference path='references.ts' />
var app;
(function (app_1) {
    'use strict';
    var app = angular.module('app', ['ngRoute'])
        .controller('roommateSearchCtrl', app_1.RoommateSearchCtrl)
        .config(function ($routeProvider) {
        $routeProvider
            .when("/search", {
            templateUrl: 'WebUI/views/search.html'
        })
            .otherwise({ redirectTo: '/search' });
    });
})(app || (app = {}));
