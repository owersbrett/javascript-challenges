// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// Given an integer k and a string s, find the length of the longest 

// substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring 

// with k distinct characters is "bcb".

let s = "abcba";
let k = 2;

function distinctCharacters(str, num, l){

    if (charChecker(str, num)){
        
    }


    let longestSub = "";
    
    console.log(charChecker(str, num));

    return longestSub;
}




function charChecker(str, num){
    let counter = 0;
    let theChars = [];
    let checker = false;
    str = str.split('');
    str.forEach(letter =>{
        if (!theChars.includes(letter)){
            theChars.push(letter)
            counter++;
        }
    });
    if (counter > num){
        checker = false;
    }
    return checker;
}

console.log(distinctCharacters(s,k, s.length));
