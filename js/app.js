'use strict';



let Seattle = {
    shopLocation: 'Seattle', 
    minCust: 23, 
    maxCust: 65, 
    avgCookieSale: 6.3, 
    shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
    custNumb : [], 
    numOfSales: [], 
    totalSales: 0, 
    numCust: function () {
    for(let hour = 0; hour < this.shopHour.length; hour++){
        this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
}, 
avgSalesHourly: function(){
    for(let i=0; i<this.shopHour.length;i++){
    this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
    this.totalSales += this.numOfSales[i]; 
    }
}, 
rsults: function () {
let divEl = document.getElementById('stats'); 
let h1El = document.createElement('h1'); 
divEl.appendChild(h1El); 
h1El.textContent = 'Welcome to the sales page'; 

let articleEl = document.createElement('article'); 
divEl.appendChild(articleEl); 

let h3El = document.createElement('h3'); 
articleEl.appendChild(h3El); 
h3El.textContent = this. shopLocation; 

let ulEl = document.createElement('ul'); 
articleEl.appendChild(ulEl); 
for(let i = 0; i < this.shopHour.length; i++){

    let liEl = document.createElement('li');
    liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li'); 
ulEl.appendChild(totalLi); 
totalLi.textContent = this.totalSales + ' cookies'
}
}

let Tokyo = {
    shopLocation: 'Tokyo', 
    minCust: 3, 
    maxCust: 24, 
    avgCookieSale: 1.2, 
    shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
    custNumb : [], 
    numOfSales: [], 
    totalSales: 0, 
    numCust: function () {
    for(let hour = 0; hour < this.shopHour.length; hour++){
        this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
}, 
avgSalesHourly: function(){
    for(let i=0; i<this.shopHour.length;i++){
    this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
    this.totalSales += this.numOfSales[i]; 
    }
}, 
rsults: function () {
let divEl = document.getElementById('stats'); 

let articleEl = document.createElement('article'); 
divEl.appendChild(articleEl); 

let h3El = document.createElement('h3'); 
articleEl.appendChild(h3El); 
h3El.textContent = this. shopLocation; 

let ulEl = document.createElement('ul'); 
articleEl.appendChild(ulEl); 
for(let i = 0; i < this.shopHour.length; i++){

    let liEl = document.createElement('li');
    liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li'); 
ulEl.appendChild(totalLi); 
totalLi.textContent = this.totalSales + ' cookies'
}
}

let Dubai = {
    shopLocation: 'Dubai', 
    minCust: 11, 
    maxCust: 38, 
    avgCookieSale: 3.7, 
    shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
    custNumb : [], 
    numOfSales: [], 
    totalSales: 0, 
    numCust: function () {
    for(let hour = 0; hour < this.shopHour.length; hour++){
        this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
}, 
avgSalesHourly: function(){
    for(let i=0; i<this.shopHour.length;i++){
    this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
    this.totalSales += this.numOfSales[i]; 
    }
}, 
rsults: function () {
let divEl = document.getElementById('stats'); 

let articleEl = document.createElement('article'); 
divEl.appendChild(articleEl); 

let h3El = document.createElement('h3'); 
articleEl.appendChild(h3El); 
h3El.textContent = this. shopLocation; 

let ulEl = document.createElement('ul'); 
articleEl.appendChild(ulEl); 
for(let i = 0; i < this.shopHour.length; i++){

    let liEl = document.createElement('li');
    liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li'); 
ulEl.appendChild(totalLi); 
totalLi.textContent = this.totalSales + ' cookies'
}
}

let Paris = {
    shopLocation: 'Paris', 
    minCust: 20, 
    maxCust: 38, 
    avgCookieSale: 2.3, 
    shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
    custNumb : [], 
    numOfSales: [], 
    totalSales: 0, 
    numCust: function () {
    for(let hour = 0; hour < this.shopHour.length; hour++){
        this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
}, 
avgSalesHourly: function(){
    for(let i=0; i<this.shopHour.length;i++){
    this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
    this.totalSales += this.numOfSales[i]; 
    }
}, 
rsults: function () {
let divEl = document.getElementById('stats'); 

let articleEl = document.createElement('article'); 
divEl.appendChild(articleEl); 

let h3El = document.createElement('h3'); 
articleEl.appendChild(h3El); 
h3El.textContent = this. shopLocation; 

let ulEl = document.createElement('ul'); 
articleEl.appendChild(ulEl); 
for(let i = 0; i < this.shopHour.length; i++){

    let liEl = document.createElement('li');
    liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li'); 
ulEl.appendChild(totalLi); 
totalLi.textContent = this.totalSales + ' cookies'
}
}

let Lima = {
    shopLocation: 'Lima', 
    minCust: 2, 
    maxCust: 16, 
    avgCookieSale: 4.6, 
    shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
    custNumb : [], 
    numOfSales: [], 
    totalSales: 0, 
    numCust: function () {
    for(let hour = 0; hour < this.shopHour.length; hour++){
        this.custNumb.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));}
}, 
avgSalesHourly: function(){
    for(let i=0; i<this.shopHour.length;i++){
    this.numOfSales.push(Math.ceil(this.custNumb[i] * this.avgCookieSale)); 
    this.totalSales += this.numOfSales[i]; 
    }
}, 
rsults: function () {
let divEl = document.getElementById('stats'); 

let articleEl = document.createElement('article'); 
divEl.appendChild(articleEl); 

let h3El = document.createElement('h3'); 
articleEl.appendChild(h3El); 
h3El.textContent = this. shopLocation; 

let ulEl = document.createElement('ul'); 
articleEl.appendChild(ulEl); 
for(let i = 0; i < this.shopHour.length; i++){

    let liEl = document.createElement('li');
    liEl.textContent = this.shopHour[i] + ' : ' + this.numOfSales[i] + ' cookies';
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li'); 
ulEl.appendChild(totalLi); 
totalLi.textContent = this.totalSales + ' cookies'
}
}

Seattle.numCust(23, 65); 
Seattle.avgSalesHourly(); 
Seattle.rsults(); 

Tokyo.numCust(3, 24);
Tokyo.avgSalesHourly(); 
Tokyo.rsults(); 

Dubai.numCust(11, 38); 
Dubai.avgSalesHourly(); 
Dubai.rsults(); 

Paris.numCust(20, 38); 
Paris.avgSalesHourly(); 
Paris.rsults(); 

Lima.numCust(2, 16); 
Lima.avgSalesHourly(); 
Lima.rsults(); 