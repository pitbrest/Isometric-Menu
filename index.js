class Person {
  constructor (options){
    this.name = options.name,
    this.age = options.age      
  }  
  #id = 1111;
  sayHi = () => {
    console.log(`Hello ${this.name}, your id is ${this.#id}`);
  }
}

const alex = new Person({
  name: 'Alex',
  age: 38  
})

console.log(alex);
alex.sayHi()