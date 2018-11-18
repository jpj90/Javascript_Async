// https://egghead.io/lessons/rxjs-introducing-the-observable
var Observable = require('rxjs')


// an Observable can be seen as 'a type to model an asynchronous
// operation as a collection. to be be precise, it can be seen
// as a collection that arrives over time. it can also be 
// thought of as an "event stream".'

var observable = Observable.interval(1000);

observable.forEach(function(i){
    console.log(i);
})
