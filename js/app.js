'use strict';

let Seattle = {
    shopLocation: 'Seattle', 
    minCust: 23, 
    maxCust: 65, 
    avgCookieSale: 6.3, 
    numCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
}, 
shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
avgHourly: (this.num * this.avgCookieSale), 
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
    liEl.textContent = this.shopHour[i] + ' : ' + this.avgHourly[i] + ' cookies';
    ulEl.appendChild(liEl);
}
}
}

let Tokyo = {
    shopLocation: 'Tokyo', 
    minCust: 3, 
    maxCust: 24, 
    avgCookieSale: 1.2, 
    numCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
}, 
shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
avgHourly: (this.num * this.avgCookieSale), 
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
    liEl.textContent = this.shopHour[i] + ' : ' + this.avgHourly[i] + ' cookies';
    ulEl.appendChild(liEl);
}
}
}

let Dubai = {
    shopLocation: 'Dubai', 
    minCust: 11, 
    maxCust: 38, 
    avgCookieSale: 3.7, 
    numCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
}, 
shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
avgHourly: (this.num * this.avgCookieSale), 
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
    liEl.textContent = this.shopHour[i] + ' : ' + this.avgHourly[i] + ' cookies';
    ulEl.appendChild(liEl);
}
}
}

let Paris = {
    shopLocation: 'Paris', 
    minCust: 20, 
    maxCust: 38, 
    avgCookieSale: 2.3, 
    numCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
}, 
shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
avgHourly: (this.num * this.avgCookieSale), 
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
    liEl.textContent = this.shopHour[i] + ' : ' + this.avgHourly[i] + ' cookies';
    ulEl.appendChild(liEl);
}
}
}

let Lima = {
    shopLocation: 'Lima', 
    minCust: 2, 
    maxCust: 16, 
    avgCookieSale: 4.6, 
    numCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
}, 
shopHour: ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], 
avgHourly: (this.num * this.avgCookieSale), 
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
    liEl.textContent = this.shopHour[i] + ' : ' + this.avgHourly[i] + ' cookies';
    ulEl.appendChild(liEl);
}
}
}

Seattle.numCust(23, 65); 
Seattle.rsults(); 

Tokyo.numCust(3, 24);
Tokyo.rsults(); 

Dubai.numCust(11, 38); 
Dubai.rsults(); 

Paris.numCust(20, 38); 
Paris.rsults(); 

Lima.numCust(2, 16); 
Lima.rsults(); 