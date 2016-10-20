/// <reference path='../references.ts' />
var models;
(function (models) {
    'use strict';
    var Person = (function () {
        function Person(first_name, last_name, email, phone) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.phone = phone;
        }
        return Person;
    }());
    models.Person = Person;
})(models || (models = {}));
