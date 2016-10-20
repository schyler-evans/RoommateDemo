/// <reference path='../references.ts' />
var services;
(function (services) {
    'use strict';
    // Static Demo Service. Would normally connect to API.
    var PeopleService = (function () {
        function PeopleService() {
        }
        PeopleService.people = [
            {
                first_name: "Joe",
                last_name: "Smoe",
                email: "JoeSmoe@something.com",
                phone: "3609274892"
            },
            {
                first_name: "Sally",
                last_name: "Greggs",
                email: "sallyGreggs@something.com",
                phone: "2342342342"
            },
            {
                first_name: "Phil",
                last_name: "Basabe",
                email: "pBasabe@something.com",
                phone: "6554245643"
            },
            {
                first_name: "Tyrion",
                last_name: "Lanaster",
                email: "tLanaster@something.com",
                phone: "9284947284"
            },
            {
                first_name: "Andy",
                last_name: "Basabe",
                email: "basabe@something.com",
                phone: "8374872833"
            },
            {
                first_name: "Ian",
                last_name: "Krause",
                email: "ik@something.com",
                phone: "9283747474"
            },
            {
                first_name: "Sarah",
                last_name: "Shultz",
                email: "ss@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Julie",
                last_name: "Bozzo",
                email: "Bozz@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Stan",
                last_name: "Smith",
                email: "smith@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Kenny",
                last_name: "McKormic",
                email: "SP@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Tom",
                last_name: "Turnner",
                email: "TomTime@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Miguel",
                last_name: "Thomas",
                email: "Mig@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Deanna",
                last_name: "Bozzo",
                email: "Dbozz@something.com",
                phone: "3877299184"
            },
            {
                first_name: "Alica",
                last_name: "French",
                email: "Kindaevil@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Hillary",
                last_name: "DeSuza",
                email: "england@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Annie",
                last_name: "Borg",
                email: "highschool@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Lelia",
                last_name: "Terigan",
                email: "oneeye@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Geralt",
                last_name: "Of Rivia",
                email: "twoswords@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Phillip",
                last_name: "Fry",
                email: "huh@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Bhaal",
                last_name: "Lord of Murder",
                email: "DEATH@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Beau",
                last_name: "Doge",
                email: "imissyou@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Grizwald",
                last_name: "Lucifer",
                email: "awesomecat1@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Sascha",
                last_name: "Agran",
                email: "makingCandy@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Baker",
                last_name: "Wenning",
                email: "makinDoughnuts@something.com",
                phone: "3877299184"
            },
            {
                first_name: "Sally",
                last_name: "Rauh",
                email: "oops@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Ben",
                last_name: "Rogers",
                email: "travelinman@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Nick",
                last_name: "Rogers",
                email: "lostinvan@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Kagan",
                last_name: "Sloane",
                email: "cars@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Randelle",
                last_name: "Engle",
                email: "horses@something.com",
                phone: "2389819188"
            },
            {
                first_name: "William",
                last_name: "Engle",
                email: "suspended@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Tony",
                last_name: "Engle",
                email: "beerandfire@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Meryl",
                last_name: "Evans",
                email: "sadbook@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Vader",
                last_name: "Skywalker",
                email: "yo@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Luke",
                last_name: "Skywalker",
                email: "notthesedroids@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Fin",
                last_name: "TheBoy",
                email: "whattimeisit@something.com",
                phone: "3877299184"
            },
            {
                first_name: "Jake",
                last_name: "TheDog",
                email: "adventuretime@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Sal",
                last_name: "Randolf",
                email: "huh@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Albert",
                last_name: "Einstien",
                email: "mathnshiz@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Richard",
                last_name: "Merdock",
                email: "comename@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Barack",
                last_name: "Obama",
                email: "prezz@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Bernie",
                last_name: "Sanders",
                email: "shouldhavebeen@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Toby",
                last_name: "Radcat",
                email: "name93@something.com",
                phone: "457457456"
            },
            {
                first_name: "The",
                last_name: "Doctor",
                email: "tardis@something.com",
                phone: "345346767"
            },
            {
                first_name: "William",
                last_name: "Krolic",
                email: "bro@something.com",
                phone: "3453453455"
            },
            {
                first_name: "Taylor",
                last_name: "Cassel",
                email: "miss@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Veronica",
                last_name: "Sagert",
                email: "everett@something.com",
                phone: "3877299184"
            },
            {
                first_name: "Zuzana",
                last_name: "Gladais",
                email: "poland@something.com",
                phone: "2389819188"
            },
            {
                first_name: "Harry",
                last_name: "McMannon",
                email: "london@something.com",
                phone: "3453453455"
            },
            {
                first_name: "Krishy",
                last_name: "Kalawad",
                email: "spain@something.com",
                phone: "3453453454"
            },
            {
                first_name: "Veronica",
                last_name: "Pipenko",
                email: "russia@something.com",
                phone: "3453453455"
            },
            {
                first_name: "Syndey",
                last_name: "Willson",
                email: "redhead@something.com",
                phone: "3453453454"
            },
            {
                first_name: "John",
                last_name: "Evans",
                email: "brother@something.com",
                phone: "3453453454"
            },
            {
                first_name: "Schyler",
                last_name: "Evans",
                email: "me@something.com",
                phone: "3453453455"
            },
            {
                first_name: "Walker",
                last_name: "Evans",
                email: "texasranger@something.com",
                phone: "2667456856"
            },
            {
                first_name: "Cynthia",
                last_name: "Crawford",
                email: "bestperson@something.com",
                phone: "2457854243"
            },
            {
                first_name: "Matthew",
                last_name: "NavDePutte",
                email: "rad@something.com",
                phone: "4353453453"
            }
        ];
        return PeopleService;
    }());
    services.PeopleService = PeopleService;
})(services || (services = {}));
