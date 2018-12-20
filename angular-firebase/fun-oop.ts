const hasName = (name) => {
  return { name };
}

const canSayHi = (name) => {
  return {
    sayHi: () => `Hello, ${name}`
  }
}

const Person = function(name) {
  return {
    ...hasName(name),
    ...canSayHi(name)
  }
}

const person = Person('Jeff');
console.log( person.sayHi() );