import * as _ from 'lodash';

async function hello() {
  return 'world';
}


let lucky = 23; // implicit declared number
// lucky = '23'; warn message occur

let lucky_day: number = 23; // explicit declared number
// lucky_day = '23';


type Style = 'bold' | 'italic' | 23;

let font: Style;


interface Person {
  first: string;
  last: string;
  [key: string]: any; // 允許之後使用此介面的物件可以加入任意屬性
}

const person: Person = {
  first: 'wild',
  last: 'mio'
}

const person2: Person = {
  first: "Jeff",
  last: "lovika",
  fast: true
}


function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(5, 10);


const arr: number[] = [];
arr.push(1);
// arr.push(false)

// tuple
type MyList = [number?, string?, boolean?];

const arr_tuple: MyList = []
arr_tuple.push(1);
arr_tuple.push(23);
arr_tuple.push(false);


// Generics
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);