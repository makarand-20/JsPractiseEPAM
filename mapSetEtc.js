"use strict";

const arr = [1, 2, 3, 4, 4, 5];

//creating set
const obj = new Set(arr);
console.log(obj);

obj.add(6);
obj.add(7);
obj.delete(1);
console.log(obj.has(3));
console.log(obj);

const arr2 = [...obj];
console.log(arr2);

obj.clear();
console.log(obj);


//creating map
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map);

console.log(map.get('a'));
console.log(map.has('b'));

map.forEach((value, key) =>{
    console.log(value, key);
})

map.delete('c');
console.log(map);

map.clear();
console.log(map);


//WeakSet

let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

carWeakSet.add(car1);
console.log(carWeakSet);
