 import { interval } from 'rxjs/observable/interval';
 //import { create } from 'rxjs/observable/create';
 import { range } from 'rxjs/observable/range';
 import { filter, map, take, toArray } from 'rxjs/operators';

console.log("test");

 interval(1000).subscribe(val => {
   console.log("val", val);
 });

 range(0, 10).pipe(
   map(n => n + '!'),
   map(s => 'Hello, ' + s),
 ).subscribe(x => console.log(x))
