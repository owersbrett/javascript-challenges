// Good morning! Here's your coding interview problem for today.

// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair)
// returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

function cons(a, b){
    function pair(f){
        return f(a, b);
    }
    return pair;
}

//if you return a function (pair in this case)

function car(f){
    function left(a, b){
        return a;
    }
    return f(left);
}

//and that function becomes an argument, it may be implemented using a function as its new argument,
// defined within the scope of the new function

function cdr(f){
    function right(a, b){
        return b;
    }
    return f(right);
}

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));


// function cdr(b){

// }