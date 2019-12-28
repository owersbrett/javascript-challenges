// Good morning! Here's your coding interview problem for today.

// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer 

//in linear time and constant space. In other words, find the lowest 

//positive integer that does not exist in the array. 

//The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. 

//The input [1, 2, 0] should give 3.

// You can modify the input array in-place.


let testOne = [3, 4,-1,1];
let testTwo = [1,2,0];


function loPoIn(arr){
    let sortedArr = arr.sort((a,b) => {return a - b});  //[3,4,-1,1,2] => [-1, 1, 2, 3, 4]
    let lowestPositiveInteger = 0;
    i = 0;

    while (sortedArr[i] < 0){
        i++;
    }
    while (((sortedArr[i + 1] - sortedArr[i]) === 1)){
        i++;
        if (sortedArr[i + 1] === undefined){
            lowestPositiveInteger = sortedArr[i] + 1;
        }
    }
    if (sortedArr[i + 1] - sortedArr[i] > 1){
        lowestPositiveInteger = sortedArr[i] + 1;
    }

    return lowestPositiveInteger;
}


console.log(loPoIn(testOne));

// my biggest issue with this one was making sure that the 
// following number in the array was not exactly one greater than 
// the current, potential lowest positive integer. i tried foreach,
// for, and all encompassing while loops, but i found it easier if 
// i just kept performing tests. i thought sorting would be essential
// so that i could be confident that when i increased the index, 
// i would only ever find the next biggest number in the array.
// the tests from this point involve making sure the difference between the next number
// in the index and the current is greater than one.