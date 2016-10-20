/// <reference path='references.ts' />

module app {
    'use strict';

    var app = angular.module('app', ['ngRoute'])
            .controller('roommateSearchCtrl', RoommateSearchCtrl)
            .config(function($routeProvider) {
			    $routeProvider
				    .when("/search", {
				        templateUrl: 'WebUI/views/search.html'
				    })
				    .otherwise({redirectTo: '/search'});
				});
}