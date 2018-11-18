// https://egghead.io/lessons/javascript-using-the-map-method-with-observable

var {range, map } = require('rxjs');
const Observable = require('rxjs');

range(5,4).forEach(item => console.log(item));

[1,2,3].map(function(item){
    return item * 100;
}).forEach(function(thing){
    console.log(thing);
});


var observable = Observable.interval(1000);

observable.forEach(function(item){
    console.log(item);
})
