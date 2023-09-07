let counter = 0;
function deBounce(){
    console.log('counter', counter++);
}

function myDebounce(call, time){
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        setTimeout(() => {
            call();
        }, time);
    }
}

const optimizedDeBounce = myDebounce(deBounce, 1000);
