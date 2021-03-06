'use strict';

let restaruntArray = []; 

function restarunt (shopLocation, minCust, maxCust, avgCookieSale){

this.shopLocation = shopLocation; 
this.minCust = minCust; 
this.maxCust = maxCust; 
this.avgCookieSale = avgCookieSale; 
this.shopHour = ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
this.totalSales = 0; 
this.custNumb = []; 
this.numOfSales = []; 

restaruntArray.push(this); 
}
restarunt.prototype.numCust= function () {
    for(let hour = 0; hour < this.shopHour.length; hour++){
        this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
}
restarunt.prototype.avgSalesHourly = function(){
    for(let i=0; i<this.shopHour.length;i++){
    this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
    this.totalSales += this.numOfSales[i]; 
    }
} 

let divEl = document.getElementById('stats'); 
    
    let articleEl = document.createElement('article'); 
    divEl.appendChild(articleEl); 

    let tableEl = document.createElement('table'); 
    articleEl.appendChild(tableEl); 

restarunt.prototype.tableHead = function (){
    
    let tableHead = document.createElement('tr'); 
    tableEl.appendChild(tableHead); 

    let thEl = document.createElement('th');
    thEl.textContent = 'Location';
    tableHead.appendChild(thEl);
     
    for(let j = 0; j < this.shopHour.length; j++){
    let thEl = document.createElement('th');
    thEl.textContent = this.shopHour[j];
    tableHead.appendChild(thEl);
    }
    let thEl2 = document.createElement('th');
    thEl2.textContent = 'Daily Location Total';
    tableHead.appendChild(thEl2);
}
restarunt.prototype.rsults = function () {

    let shop1 = document.createElement('tr'); 
    tableEl.appendChild(shop1); 
    
    let tdEl = document.createElement('td'); 
        shop1.appendChild(tdEl); 
        tdEl.textContent =  this.shopLocation; 

    for(let k = 0; k< this.shopHour.length; k++){
        let tdEl = document.createElement('td'); 
        shop1.appendChild(tdEl); 
        tdEl.textContent =  this.numOfSales[k]; 
}
let tdEl2 = document.createElement('td'); 
shop1.appendChild(tdEl2); 
tdEl2.textContent =  this.totalSales; 
}


    
let Seattle = new restarunt('Seattle', 23, 65, 6.3); 
Seattle.numCust(23, 65); 
Seattle.avgSalesHourly();
Seattle.tableHead();  
Seattle.rsults(); 


let Tokyo = new restarunt('Tokyo', 3, 24, 1.2); 
Tokyo.numCust(3, 24); 
Tokyo.avgSalesHourly(); 
Tokyo.rsults(); 

let Dubai = new restarunt('Dubai', 11, 38, 3.7); 
Dubai.numCust(11, 38); 
Dubai.avgSalesHourly(); 
Dubai.rsults(); 

let Paris = new restarunt('Paris', 20, 38, 2.3); 
Paris.numCust(11, 38); 
Paris.avgSalesHourly(); 
Paris.rsults(); 

let Lima = new restarunt('Lima', 2, 16, 4.6); 
Lima.numCust(11, 38); 
Lima.avgSalesHourly(); 
Lima.rsults(); 


let addingCookie = document.getElementById('addingCookie'); 
addingCookie.addEventListener('submit', addLoocation); 
function addLoocation(event) {
event.preventDefault();

let shopLocation = event.target.shopLocation.value; 
let minCust = event.target.MinimumNumberOfCustmers.value; 
let maxCust = event.target.MaximumNumberOfCustmers.value; 
let avgCookieSale = event.target.Averagecookies.value; 

let newShop = new restarunt(shopLocation, minCust, maxCust, avgCookieSale);

newShop.numCust(minCust, maxCust); 
newShop.avgSalesHourly(); 
newShop.rsults(); 
}



// let Seattle = {
//     shopLocation: 'Seattle', 
//     minCust: 23, 
//     maxCust: 65, 
//     avgCookieSale: 6.3, 
//     shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
//     custNumb : [], 
//     numOfSales: [], 
//     totalSales: 0, 
//     numCust: function () {
//     for(let hour = 0; hour < this.shopHour.length; hour++){
//         this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
// }, 
// avgSalesHourly: function(){
//     for(let i=0; i<this.shopHour.length;i++){
//     this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
//     this.totalSales += this.numOfSales[i]; 
//     }
// }, 
// rsults: function () {
// let divEl = document.getElementById('stats'); 
// let h1El = document.createElement('h1'); 
// divEl.appendChild(h1El); 
// h1El.textContent = 'Welcome to the sales page'; 

// let articleEl = document.createElement('article'); 
// divEl.appendChild(articleEl); 

// let h3El = document.createElement('h3'); 
// articleEl.appendChild(h3El); 
// h3El.textContent = this. shopLocation; 

// let ulEl = document.createElement('ul'); 
// articleEl.appendChild(ulEl); 
// for(let i = 0; i < this.shopHour.length; i++){

//     let liEl = document.createElement('li');
//     liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li'); 
// ulEl.appendChild(totalLi); 
// totalLi.textContent = this.totalSales + ' cookies'
// }
// }

// let Tokyo = {
//     shopLocation: 'Tokyo', 
//     minCust: 3, 
//     maxCust: 24, 
//     avgCookieSale: 1.2, 
//     shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
//     custNumb : [], 
//     numOfSales: [], 
//     totalSales: 0, 
//     numCust: function () {
//     for(let hour = 0; hour < this.shopHour.length; hour++){
//         this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
// }, 
// avgSalesHourly: function(){
//     for(let i=0; i<this.shopHour.length;i++){
//     this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
//     this.totalSales += this.numOfSales[i]; 
//     }
// }, 
// rsults: function () {
// let divEl = document.getElementById('stats'); 

// let articleEl = document.createElement('article'); 
// divEl.appendChild(articleEl); 

// let h3El = document.createElement('h3'); 
// articleEl.appendChild(h3El); 
// h3El.textContent = this. shopLocation; 

// let ulEl = document.createElement('ul'); 
// articleEl.appendChild(ulEl); 
// for(let i = 0; i < this.shopHour.length; i++){

//     let liEl = document.createElement('li');
//     liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li'); 
// ulEl.appendChild(totalLi); 
// totalLi.textContent = this.totalSales + ' cookies'
// }
// }

// let Dubai = {
//     shopLocation: 'Dubai', 
//     minCust: 11, 
//     maxCust: 38, 
//     avgCookieSale: 3.7, 
//     shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
//     custNumb : [], 
//     numOfSales: [], 
//     totalSales: 0, 
//     numCust: function () {
//     for(let hour = 0; hour < this.shopHour.length; hour++){
//         this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
// }, 
// avgSalesHourly: function(){
//     for(let i=0; i<this.shopHour.length;i++){
//     this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
//     this.totalSales += this.numOfSales[i]; 
//     }
// }, 
// rsults: function () {
// let divEl = document.getElementById('stats'); 

// let articleEl = document.createElement('article'); 
// divEl.appendChild(articleEl); 

// let h3El = document.createElement('h3'); 
// articleEl.appendChild(h3El); 
// h3El.textContent = this. shopLocation; 

// let ulEl = document.createElement('ul'); 
// articleEl.appendChild(ulEl); 
// for(let i = 0; i < this.shopHour.length; i++){

//     let liEl = document.createElement('li');
//     liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li'); 
// ulEl.appendChild(totalLi); 
// totalLi.textContent = this.totalSales + ' cookies'
// }
// }

// let Paris = {
//     shopLocation: 'Paris', 
//     minCust: 20, 
//     maxCust: 38, 
//     avgCookieSale: 2.3, 
//     shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
//     custNumb : [], 
//     numOfSales: [], 
//     totalSales: 0, 
//     numCust: function () {
//     for(let hour = 0; hour < this.shopHour.length; hour++){
//         this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
// }, 
// avgSalesHourly: function(){
//     for(let i=0; i<this.shopHour.length;i++){
//     this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
//     this.totalSales += this.numOfSales[i]; 
//     }
// }, 
// rsults: function () {
// let divEl = document.getElementById('stats'); 

// let articleEl = document.createElement('article'); 
// divEl.appendChild(articleEl); 

// let h3El = document.createElement('h3'); 
// articleEl.appendChild(h3El); 
// h3El.textContent = this. shopLocation; 

// let ulEl = document.createElement('ul'); 
// articleEl.appendChild(ulEl); 
// for(let i = 0; i < this.shopHour.length; i++){

//     let liEl = document.createElement('li');
//     liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li'); 
// ulEl.appendChild(totalLi); 
// totalLi.textContent = this.totalSales + ' cookies'
// }
// }

// let Lima = {
//     shopLocation: 'Lima', 
//     minCust: 2, 
//     maxCust: 16, 
//     avgCookieSale: 4.6, 
//     shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
//     custNumb : [], 
//     numOfSales: [], 
//     totalSales: 0, 
//     numCust: function () {
//     for(let hour = 0; hour < this.shopHour.length; hour++){
//         this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
// }, 
// avgSalesHourly: function(){
//     for(let i=0; i<this.shopHour.length;i++){
//     this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
//     this.totalSales += this.numOfSales[i]; 
//     }
// }, 
// rsults: function () {
// let divEl = document.getElementById('stats'); 

// let articleEl = document.createElement('article'); 
// divEl.appendChild(articleEl); 

// let h3El = document.createElement('h3'); 
// articleEl.appendChild(h3El); 
// h3El.textContent = this. shopLocation; 

// let ulEl = document.createElement('ul'); 
// articleEl.appendChild(ulEl); 
// for(let i = 0; i < this.shopHour.length; i++){

//     let liEl = document.createElement('li');
//     liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li'); 
// ulEl.appendChild(totalLi); 
// totalLi.textContent = this.totalSales + ' cookies'
// }
// }

// Seattle.numCust(23, 65); 
// Seattle.avgSalesHourly(); 
// Seattle.rsults(); 

// Tokyo.numCust(3, 24);
// Tokyo.avgSalesHourly(); 
// Tokyo.rsults(); 

// Dubai.numCust(11, 38); 
// Dubai.avgSalesHourly(); 
// Dubai.rsults(); 

// Paris.numCust(20, 38); 
// Paris.avgSalesHourly(); 
// Paris.rsults(); 

// Lima.numCust(2, 16); 
// Lima.avgSalesHourly(); 
// Lima.rsults();  
