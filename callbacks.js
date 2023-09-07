// Description: Callbacks are functions that are passed into another function as an argument
function attachEventListener(){
    let count = 0;
    document.getElementById('btnClick').addEventListener('click', function btnClick() {
        console.log('Button Clicked', count += 1);
    });
}
attachEventListener();


// map(), filter() and reduce() are also callback functions
let arr = [1,2,3,4];

// map() is a higher order function which takes a callback function as an argument and returns a new array as a result
let arr2 = arr.map((item) => item.toString(2));
console.log("map() :",arr2);

// filter() is a higher order function which takes a callback function as an argument and returns a new array as a result
let arr3 = arr.filter((item) => item % 2 != 0);
console.log("filter() :", arr3);

// reduce() is a higher order function which takes a callback function as an argument and returns only a single value as a result
let maxi = arr.reduce((acc, item) => {
    if(acc < item){
        acc = item;
    }
    return acc;
}, 0);
console.log("reduce() :", maxi);

// short method for reduce()
let maxii = arr.reduce((maxx, item) => maxx > item ? maxx : item, 0);
console.log("reduce() max :", maxii);

let mini = arr.reduce((mini, item) => mini > item ? item : mini, 999999);
console.log("reduce() min :", mini);


//sort()
let sorted = arr.sort((a,b) => b-a);
console.log("sort() :", sorted);
