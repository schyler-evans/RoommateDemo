/// <reference path='../references.ts' />
var app;
(function (app) {
    'use strict';
    var RoommateSearchCtrl = (function () {
        function RoommateSearchCtrl() {
            this.i = 0;
            this.i_pagination_max = 10;
            this.persons = services.PeopleService.people;
        }
        RoommateSearchCtrl.prototype.updateMatchedPersons = function (searchText) {
            this.matchedPersons = new Array();
            if (searchText.length == 0)
                this.matchedPersons = null;
            else {
                for (var i = 0; i < this.persons.length; i++) {
                    if (this.persons[i].first_name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 ||
                        this.persons[i].last_name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                        this.matchedPersons.push(this.persons[i]);
                    }
                }
            }
        };
        RoommateSearchCtrl.prototype.sendEmail = function (person) {
            alert("Roommate request sent to " + person.first_name + " " + person.last_name + " at " + person.email + ".");
        };
        RoommateSearchCtrl.$inject = [];
        return RoommateSearchCtrl;
    }());
    app.RoommateSearchCtrl = RoommateSearchCtrl;
})(app || (app = {}));
