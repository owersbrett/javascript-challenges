// Good morning! Here's your coding interview problem for today.

// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest 

// sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, 

// and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

let iList = [2, 4, 6, 2, 5];

let weird = [55, 20, 85, 19, 44, 100, 17, 14, 88, 13, 25, 88]; 

let mem = [];
function max_sum(arr, i){
    // we pass in the array of numbers and the index
    if (i === 0){ //if i is 0, we'll be returning the initial value of the array. I'm assuming this case only occurs if the following case doesn't occur...
        return arr[0];
    } 
    if (i === 1){ //if i is 1, we will return whichever value is larger of the first two indices in the array
        return Math.max(arr[0], arr[1]);
    } // these cases may potentially only run the first time through if the length of the array is 1 or 0... I think

    //

    if (mem[i]){
        return mem[i];
    }                   //first run through returns max of the first or the second, sets it equal mem of index 3
    mem[i] = Math.max(max_sum(arr, i - 1), arr[i] + max_sum(arr, i - 2));

    // console.log(mem[i]);

    return mem[i];
}
console.log(max_sum(weird, weird.length - 1));

// this was interesting to draw out -> understanding the base case, 
// Math.max, and the idea of comparing adjacent numbers with potential 
// sums that have been accumulated by the adjacent number have all helped expand my programming mind
