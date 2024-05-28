//Template Literals:
function greetingFunc( name, greeting){
    return (`${greeting} ,${name}!`);
}
console.log(greetingFunc("Chinthana", "Keep Going"));

//Arrow Functions:
const squar=(num)=>{
    console.log(num*num);
} 
squar(5);

//let and const:

const userName = "Alice";
let userAge = 30;

console.log("Initial name:", userName);
console.log("Initial age:", userAge);

userAge = 31;

console.log("Updated age:", userAge);

//Destructuring Assignment:
var firstArray=[1, 2, 3, 4, 5];
const[a,b,c,d,e]=firstArray;

console.log(a);
console.log(e);

//Default Parameters:
function cityCountry(city, country='Unknown'){
    console.log(`${city},${country}`);
    return (`${city},${country}!`);
}
cityCountry("Paris");

//Spread Operator:
var array1=[1, 2, 3] ;
var array2=[4, 5, 6];
var spreadArray=[...array1,...array2];
console.log(spreadArray);

//Rest Parameter:
function sum(...val){
    let sumval=0;
    val.forEach(val => {
        sumval+=val;
    });
    console.log(sumval);
}

sum(1, 2, 3, 4);

//Classes and Inheritance:
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); 

//Modules and Imports:
import {PI} from "./util.js"
console.log(PI);

//Enhanced Object Literals:
const book={
    title,
    author,
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}

var title ="Jamila";
var author="Chinghiz Aitmatov"
book.displayInfo();

//New Array Methods:
const numbers1 = [1, 2, 3, 4];

const doubledNumbers = numbers1.map(number => number * 2);

console.log(doubledNumbers);  

const numbers2 = [1, 2, 3, 4, 5];

const oddNumbers = numbers2.filter(number => number % 2 !== 0);

console.log(oddNumbers);  


