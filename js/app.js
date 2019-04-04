'use strict';

var storeLocations = [];
var table = document.getElementById('hourlySales');
var hourlyTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var StoreWideTotalsForDay = 0;

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
];

function rand(min,max){
  //folowwing line MDN. Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeTableHeading(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.width = '50';
  trEl.appendChild(thEl);

  for(let i = 0; i < hours.length; i++){
    var thElTimes = document.createElement('th');
    thElTimes.textContent = hours[i];
    trEl.appendChild(thElTimes);
  }

  var thElLast = document.createElement('th');
  thElLast.textContent = 'Daily Location Total';
  trEl.appendChild(thElLast);

  table.appendChild(trEl);
}

function calcHourlySales(){
  for(let i = 0; i < storeLocations.length; i++){
    for(let ii = 0; ii < hours.length; ii++){
      hourlyTotals[ii] += storeLocations[i].salesData[ii];
      console.log('Hour Total: ' + hourlyTotals[ii]);
    }
  }

}

function calcStoreWideTotalsForDay(){
  for(let i = 0; i < hourlyTotals.length; i++){
    StoreWideTotalsForDay += hourlyTotals[i];
  }
}

function makeTableFooter(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Hourly Totals';
  trEl.appendChild(thEl);

  for(let i = 0; i < hours.length; i++){
    var tdElTimes = document.createElement('td');
    tdElTimes.textContent = hourlyTotals[i];
    trEl.appendChild(tdElTimes);
  }

  var thElLast = document.createElement('th');
  thElLast.textContent = StoreWideTotalsForDay;
  trEl.appendChild(thElLast);

  table.appendChild(trEl);
}

function renderSalesTable(){

  makeTableHeading();

  for(let i = 0; i < storeLocations.length; i++){
    storeLocations[i].render();
    console.log('finished rendering location');
  }

  calcHourlySales();
  calcStoreWideTotalsForDay();
  makeTableFooter();

}

////////////////Location Constructor Func///////////////
function StoreLocation(name,minCust,maxCust,avgCookies){
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

StoreLocation.prototype.render = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for(let i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.salesData[i];
    trEl.appendChild(tdEl);
  }

  var tdElLast = document.createElement('td');
  tdElLast.textContent = this.dailyTotal;
  trEl.appendChild(tdElLast);
  table.appendChild(trEl);
};

///////////////////////////////////////////////////////////////

//EVENT HANDLER(s)
function addLoc(e){

  console.log('addLoc event handler started');
  var locNameText = e.srcElement.form[1].value;
  var minCustText = e.srcElement.form[2].value;
  var maxCustText = e.srcElement.form[3].value;
  var avgCookiesText = e.srcElement.form[4].value;
  var validAvg = validateAvg(avgCookiesText);
  console.log(validAvg);
  var validMinMax = validateMinMax(minCustText,maxCustText);
  console.log(validMinMax);
  var validText = validateText(locNameText);
  console.log(validText);
  if(validAvg && validMinMax && validText){
    new StoreLocation(locNameText,minCustText,maxCustText,avgCookiesText);
    //renderSalesTable();
    table.innerHTML = '';
    hourlyTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    StoreWideTotalsForDay = 0;
    renderSalesTable();
  }
}
/////////event input validation

function validateText(text){
  if(text === null || text === ''){
    alert('Input a valid text.');
    return false;

  }else{
    return true;
  }
}

function validateMinMax(min,max){
  if(min > max || min < 0){
    alert('Input a valid minimum and maximum number.');
    return false;
  }else{
    return true;
  }
}

function validateAvg(avg){
  if(avg < 0){
    alert('How did this happen? Enter a valid number.');
    return false;
  }else{
    return true;
  }
}

//////////MAIN FUNCTION CALLS ///////////////////////

new StoreLocation('1st and Pike',23,65,6.3);
new StoreLocation('SeaTac Airport',3,34,1.2);
new StoreLocation('Seattle Center',11,38,3.7);
new StoreLocation('Capitol Hill',20,38,2.3);
new StoreLocation('Alki',2,16,4.6);

renderSalesTable();

var locationFormSubmit = document.getElementById('submit');
locationFormSubmit.addEventListener('click',addLoc);

/*locationFormSubmit.addEventListener('click',function(e){
  console.log(e.srcElement.form[2].value);//gets the min value
});
*/
