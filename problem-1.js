// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

let listOfNumbers = [10, 15, 3, 7];

function problemOne(arr, k){
    let addsToK = false;
    arr.forEach((number, index) =>{
        for (let i = 0; i < arr.length; i++){
            if (i !== index){
                if (k === (number + arr[i])){
                    addsToK = true;
                }
            }
        }
    });
    return addsToK;
};
console.log(problemOne(listOfNumbers, 17));


//my biggest misstep in solving this was correctly indentifying the arguments index, 
//but i remembered that the forEach function has other (optional) arguments. my first issue:
//i forgot parathensis around number and index, because if there's only one argument,
//arrow functions don't require parentheses arround the argument. the next 
//step involved me realizing that i shouldn't compare arr[i] to arr[index], but rather
// i and index. after that, addsToK was working the way i intended.