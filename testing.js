// js magic
function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
}
runFunc();


//truthy and falsy
let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));


// magic
var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 


// apply function
let hero = {
powerLevel: 99,
getPower(){
    return this.powerLevel;
}
}

let getPower = hero.getPower;

let hero2 = {powerLevel:42};
console.log(getPower());
console.log(getPower.apply(hero2));
  

//
const aa = function(){
console.log(this);

    const b = {
        func1: function(){
        console.log(this);
        }  
    }

    const c = {
        func2: ()=>{
        console.log(this);
        }
    }

    b.func1();
    c.func2();
}
aa();


//
(function(a){
    return (function(){
      console.log(a);
      a = 23;
    })()
  })(45);

// hoisting magic

var aaa = 10;
{
    var aaa = -10;
}
let bb = aaa;
{
    let bb = -20;
}

console.log(bb)


// magic magic....
let obj = {
    a: 100,
    fun1() {
        let a = 20;
        let fun2 = () => {
            console.log(this.a);
        }
        fun2();
    }
}
obj.fun1();


//new one (eval function takes string as input and executes it as js code)
var x=12;
var y=8;
var res=eval("x*y");
console.log(res);


//
(function(a){
    return (function(){
        a++;
        console.log(a);
        a = 6;
    })()
})(21);


//
var maxi = Math.max();
var mini = Math.min();
console.log(maxi);
console.log(mini);

//
var test = true + true + true * 3;
console.log(test);

//
const example = ({ a, b, c }) => {
 console.log(a, b, c);
};
example({ a:1, b:2, c:3 });
example(1,2,3);

//
function frequency(str){
    let obj = {};
    str.split("").forEach(function(ele){
        obj[ele] = obj[ele] + 1 || 1;
    }
    );
    return obj;
}
console.log(frequency("abca"));


//
const ar = [1,2,3,4,5];
function sum(){
    let sum = 0;
    sum = ar.reduce((acc, ele) => {
        return acc + ele
    },0);
    return sum;
}
console.log(sum(ar));


// destructuring the numbers for swapping their values
let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log("Swap :",num1, num2);

//
console.log(+("165"+"1") + 10);

//
var bool = new Boolean(false);
if (bool) {
    console.log(`Hello`);
} else {
    console.log(`Error`);
}

// consider default by default
var ad = 3; 
switch (ad) {
    default:
        ad += 4;
    case 1:
        ad += 2;
    break;
    case 2:
        ad += 3;
    break;
}
console.log(ad);

//
function xyz(){
    let a = 10;
    function abc(){
        let b = 20;
        return a+b;
    }
    return abc;
}
console.log("Clouser :", xyz()());

//



