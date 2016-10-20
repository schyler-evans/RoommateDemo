/// <reference path='../references.ts' />

module app {
	'use strict';

	export class RoommateSearchCtrl {

		public static $inject = [];
		public i: number;
		public i_pagination_max: number;

		public persons: models.Person[];
		public matchedPersons: models.Person[];
		
		constructor() {
			this.i = 0;
			this.i_pagination_max = 10;
			this.persons = services.PeopleService.people;
		}

		public updateMatchedPersons(searchText: string) {
			this.matchedPersons = new Array<models.Person>();
			if (searchText.length == 0) this.matchedPersons = null;
			else {
				for (var i = 0; i < this.persons.length; i++) {
			    	if (this.persons[i].first_name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 ||
			    		this.persons[i].last_name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) 
			    	{
			    		this.matchedPersons.push(this.persons[i]);
			    	}
				}
			}
		}

		public sendEmail(person: models.Person) {
			alert("Roommate request sent to " + person.first_name + " " + person.last_name + " at " + person.email + ".");
		}
	}
}