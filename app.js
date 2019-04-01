
'use strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
]

var location1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  randomCust: function(max){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

//var output = location1.randomCust(100);
//console.log(output);

var location2 = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

var location3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

var location4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

var location5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};