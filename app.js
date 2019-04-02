
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

var ulEl = document.getElementById('location1');;
//to create an <li> element
//liEl.textContent = myBeasts[i];
//put it in the DOM
//ulEl.appendChild(liEl);

//LOCATION 1
ulEl = document.getElementById('location1');


var location1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(this.maxCust));
  },
  salesData: [],
  displaySales: function(){
    for(var i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      this.salesData.push(hourlySale);
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale after rounding: ' + hourlySale);
      liEl.textContent = hourlySale;
      console.log(ulEl);
      console.log(liEl);
      ulEl.appendChild(liEl);  
    }
  }
};

location1.displaySales();

//var output = location1.randomCust(100);
//console.log(output);

var location2 = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

var location3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

var location4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

var location5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(max));
  },
  salesData: []
};

/////////////////////MAIN////////////////////////

var ulEl;
//to create an <li> element
var liEl = document.createElement('li');
//liEl.textContent = myBeasts[i];
//put it in the DOM
//ulEl.appendChild(liEl);

//LOCATION 1
ulEl = document.getElementById('location1');

