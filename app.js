'use strict';

var storeLocations = [];
var table = document.getElementById('hourlySales');
var hourlyTotals = [];

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

function rand(min,max){
  //folowwing line MDN. Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeTableHeading(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.width = "50";
  trEl.appendChild(thEl);

  for(let i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  table.appendChild(trEl);
}

makeTableHeading();

////////////////Location Constructor Func
function storeLocation(name,minCust,maxCust,avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.salesData = [];
  this.dailyTotal = 0;
  this.calcSales = function(){
    for(let i = 0; i < hours.length; i++){
      let numberOfCust = rand(this.minCust,this.maxCust);
      console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      hourlySale = Math.round(hourlySale);
      console.log('Hourly Sale : ' + hourlySale);
      this.salesData.push(hourlySale);
      this.dailyTotal += hourlySale;
    }
  };
  
  this.calcSales();
  storeLocations.push(this);
}

storeLocation.prototype.render = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for(let i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.salesData[i];
    trEl.appendChild(tdEl);
  }

  table.appendChild(trEl);
}

new storeLocation('1st and Pike',23,65,6.3);

for(let i = 0; i < storeLocations.length; i++){
  storeLocations[i].render();
  console.log('finished rendering location');
}


////////////////////////
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
    var total = 0;

    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      //console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      //console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      hourlySale = Math.round(hourlySale);
      this.salesData.push(hourlySale);
      total += hourlySale;
      //console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      //console.log(ulEl);
      //console.log(liEl);
      ulEl.appendChild(liEl);  

    }
    let liEl = document.createElement('li');  
    liEl.textContent = `Total: ${total} cookies`;
    ulEl.appendChild(liEl);
  }
  //render: funvction(){}
  //calcCustomerPerHour: function()
  //calcCookiesEachHour: function()
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
    var total = 0;

    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      //console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      //console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      hourlySale = Math.round(hourlySale);
      this.salesData.push(hourlySale);
      total += hourlySale;
      //console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      //console.log(ulEl);
      //console.log(liEl);
      ulEl.appendChild(liEl);  

    }
    let liEl = document.createElement('li');  
    liEl.textContent = `Total: ${total} cookies`;
    ulEl.appendChild(liEl);
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
    var total = 0;

    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      //console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      //console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      hourlySale = Math.round(hourlySale);
      this.salesData.push(hourlySale);
      total += hourlySale;
      //console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      //console.log(ulEl);
      //console.log(liEl);
      ulEl.appendChild(liEl);  

    }
    let liEl = document.createElement('li');  
    liEl.textContent = `Total: ${total} cookies`;
    ulEl.appendChild(liEl);
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
    var total = 0;

    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      //console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      //console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      hourlySale = Math.round(hourlySale);
      this.salesData.push(hourlySale);
      total += hourlySale;
      //console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      //console.log(ulEl);
      //console.log(liEl);
      ulEl.appendChild(liEl);  

    }
    let liEl = document.createElement('li');  
    liEl.textContent = `Total: ${total} cookies`;
    ulEl.appendChild(liEl);
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
    var total = 0;

    for(let i = 0; i < hours.length; i++){

      let liEl = document.createElement('li');  
      let numberOfCust = this.randomCust();
      //console.log('Random generated Amount of Customers: ' + numberOfCust);
      let hourlySale = numberOfCust * this.avgCookies;
      //console.log('Hourly Sale before rounding to nearest integer: ' + hourlySale);
      hourlySale = Math.round(hourlySale);
      this.salesData.push(hourlySale);
      total += hourlySale;
      //console.log('Hourly Sale after rounding: ' + hourlySale);
      let hourlySaleText = `${hours[i]}: ${hourlySale} cookies`;
      liEl.textContent = hourlySaleText;
      //console.log(ulEl);
      //console.log(liEl);
      ulEl.appendChild(liEl);  

    }
    let liEl = document.createElement('li');  
    liEl.textContent = `Total: ${total} cookies`;
    ulEl.appendChild(liEl);
  }
};

/////////////////////MAIN--FUNCTION CALLS////////////////////////

//location1.displaySales();
//location2.displaySales();
//location3.displaySales();
//location4.displaySales();
//location5.displaySales();
