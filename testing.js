//heavy task....
function task(message) {
    // emulate time consuming task
    console.time();
    let n = 1000000000;
    while (n > 0){
        n--;
    }
    console.timeEnd();
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');


// 18. memoization
function j() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            console.log("from cache");
            return cache[n];
        } else {
            console.log("from calculation");
            cache[n] = n * 100;
            return cache[n];
        }
    }
}
let memo = j();
console.log(memo(10));
console.log(memo(20));
console.log(memo(30));
console.log(memo(10));
console.log(memo(150));



const stri = "Programming";
console.log(...stri);


function abc(){
    for(let i = 1; i <= 5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i * 1000)
        }
        close(i);
    }
}
abc();