
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
  avgCookies: 6.3,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(this.maxCust));
  },
  salesData: [],
  displaySales: function(){

    let ulEl = document.getElementById('location1');

    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      this.salesData.push(hourlySale); // raw unrounded data of hourly sale
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      console.log(ulEl);
      console.log(liEl);
      ulEl.appendChild(liEl);  

    }
  }
};

var location2 = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(this.maxCust));
  },
  salesData: [],
  displaySales: function(){

    let ulEl = document.getElementById('location2');
    
    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      this.salesData.push(hourlySale); // raw unrounded data of hourly sale
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      console.log(ulEl);
      console.log(liEl);
      ulEl.appendChild(liEl);  

    }
  }
};

var location3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(this.maxCust));
  },
  salesData: [],
  displaySales: function(){

    let ulEl = document.getElementById('location3');
    
    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      this.salesData.push(hourlySale); // raw unrounded data of hourly sale
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      console.log(ulEl);
      console.log(liEl);
      ulEl.appendChild(liEl);  

    }
  }
};

var location4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(this.maxCust));
  },
  salesData: [],
  displaySales: function(){

    let ulEl = document.getElementById('location4');
    
    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      this.salesData.push(hourlySale); // raw unrounded data of hourly sale
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      console.log(ulEl);
      console.log(liEl);
      ulEl.appendChild(liEl);  

    }
  }
};

var location5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomCust: function(){
    return Math.floor(Math.random() * Math.floor(this.maxCust));
  },
  salesData: [],
  displaySales: function(){

    let ulEl = document.getElementById('location5');
    
    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      this.salesData.push(hourlySale); // raw unrounded data of hourly sale
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      console.log(ulEl);
      console.log(liEl);
      ulEl.appendChild(liEl);  

    }
  }
};

/////////////////////MAIN--FUNCTION CALLS////////////////////////

location1.displaySales();
location2.displaySales();
location3.displaySales();
location4.displaySales();
location5.displaySales();
