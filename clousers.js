//closure example

function mostOuter(){
    let y = 20;
    function outer(){
        let x = 10;
        function inner(){
            console.log("Clouser Called :",x,y);
        }
        return inner;
    }
    return outer;
}
let x = 100;

mostOuter()()();


// data hiding and encapsulation using closure..........
function counter(){
    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    return {
        inc: increment,
        dec: decrement
    }
}
let closure_encap = counter();
closure_encap.inc();
closure_encap.inc();
closure_encap.inc();
closure_encap.dec();


//one more example of closure
function sum1(){
    return{
        sumOfThree: function(a,b,c){
            console.log(a+b+c);
        },
        sumOfTwo: function(a,b){
            console.log(a+b);
        }
    }
}
let output = sum1();
output.sumOfThree(10,20,30);
output.sumOfTwo(20,30);


//same example as above 👆 just slightly different
//one more example of closure
function sum2(a,b,c){
    return{
        sumOfThree: function(){
            console.log(a+b+c);
        },
        sumOfTwo: function(){
            console.log(a+b);
        }
    }
}
let output2 = sum2(100,200,300);
output2.sumOfThree();
output2.sumOfTwo();