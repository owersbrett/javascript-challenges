// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// There exists a staircase with N steps, 
// and you can climb up either 1 or 2 steps
// at a time. Given N, write a function that 
// returns the number of unique ways you can 
// climb the staircase. The order of the steps matters.
// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, 
// you could climb any number from a set of positive integers X? 
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

let possibleSteps = [1, 2];
let numberOfSteps = 5;

// 1 is 1, 2 is 2, 3 is 3, 4 is 5
//[1] | [1,1],[2] | [1,1,1],[2,1],[1,2] | [1,1,1,1], [1,1,2], [1,2,1], [2,2], [2,1,1] 

function climbStairs(n){
    if(n === 1) return 1;
    if(n === 2) return 2;
    let countArray = [];
    countArray[1] = 1;
    countArray[2] = 2;
    for(let i = 3; i <= n; i++){
        countArray[i] = countArray[i - 1] + countArray[i - 2];
    }

    return countArray[n];
}

// i went on youtube to find out how to do this recursively, but what I learned is that 
// when i explicitly declare a new Array, i can allocate a particular size via (n + 1)
// line 28 and 29 are base cases, 1 step one way, 2 steps two way [1,1] [2]. if there
// are 3, we create a new Array of n steps plus 1. After messing with line 30, i found
// that this code still works if i replace the specific memory allocation with open and
// close brackets. must set first and second. sort of bothers me that countArray[0] is undefined
// in an array of otherwise integers. It's just the fibonacci sequence... I wonder if it'd be much more difficult 
// to create a version that takes in X possible steps as opposed to 1 and 2. 


console.log(climbStairs(numberOfSteps));