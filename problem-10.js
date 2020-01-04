
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, 

// and calls f after n milliseconds.

let delay = 3000;

function jobScheduler(f, n){
    setTimeout(f, n);
}

function logger(){
    console.log('Successful passed function as argument');
}

jobScheduler(logger, delay);

//this one was easy once i learned what setTimeout does => i was unsure 
//what it was before this, but i there was a native method to wait