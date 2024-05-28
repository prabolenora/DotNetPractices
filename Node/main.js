import {PI} from "./util.js"
console.log(PI);

const f1=()=>{console.log('task 1')}
const f2=()=>{f1();console.log('task 2')}
const f3=()=>{console.log('task 3');f2()}
f3(); // single thread execution

//closure asyncronous programming
//a function having access to the parent scope, even after the parent function has closed.
const foo=(x)=>{
    let temp=3
    return function(y){
        console.log(x+y+(++temp))
    }    
}

var bar=foo(2)
bar(10); //16
bar(10); //17

var bar=foo(2)
bar(10); //16
bar(10); //17