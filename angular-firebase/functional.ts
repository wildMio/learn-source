// Pure Function

let num = 123;

function toString(val) {
  return val.toString();
}

const str = toString(num);
console.log(typeof str); 


// Immutable Data

const data = Object.freeze([1,2,3,4,5,6]);


// Fuction as Arguments

const addEmoji = (val) => toString(val) + '😄';

const emojiData = data.map(addEmoji);
console.log(emojiData);


// Functions as return value

const appendEmoji = (fixed) => (dynamic) => fixed + dynamic;

const rain = appendEmoji('☁️');
const sun = appendEmoji('☀️');

console.log( rain(' today') );
console.log( sun(' tomorrow') );