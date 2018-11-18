// https://egghead.io/lessons/rxjs-introducing-the-observable
import {  Rx } from 'rxjs';

// an Observable can be seen as 'a type to model an asynchronous
// operation as a collection. to be be precise, it can be seen
// as a collection that arrives over time. it can also be 
// thought of as an "event stream".'

var Observable = Rx.Observable;

[1,2,3].forEach(function(i){
    console.log(i);
})
