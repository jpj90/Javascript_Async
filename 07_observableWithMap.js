// https://egghead.io/lessons/javascript-using-the-map-method-with-observable

const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');

/* CommonJS example from https://github.com/ReactiveX/rxjs
range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x * 2))
  .subscribe(x => console.log(x));
*/
  range(1,10)
    .pipe(map(function(item){ return item * 5 })).forEach(out => console.log(out));

