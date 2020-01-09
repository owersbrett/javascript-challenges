// Good morning! Here's your coding interview problem for today.

// This problem was asked by Twitter.

// Implement an autocomplete system. 

// That is, given a query string s and a set of all possible query strings, 

// return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings 

// [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data 

// structure to speed up queries.

let theString = 'de';
let possibleStrings = ['dog', 'deer', 'deal', 'dastroy', "detonate"];


function autocompleteString(str, posArr){
    posArr = posArr.sort();
    let potentialQueries = [];

    posArr.forEach(word =>{
        if(checkEachIndex(str, word)){
            potentialQueries.push(word);
        }
    });
   return potentialQueries;
}

function checkEachIndex(str1, str2){
    str1 = str1.split('');
    str2 = str2.split('');
    let theyMatch = false;

    str1.every((letter, index) =>{
        if (letter === str2[index]){
            theyMatch = true;
            return true;
        } else {
            theyMatch = false;
            return false;
        }
    });
    return theyMatch;
}

console.log(autocompleteString(theString, possibleStrings));

// This one was fun, I am trying to learn to separate functional responsibilities
// I think it can be improved, and perhaps later I will refactor it, because 
// Once it's been sorted, once there are no more words that match the string,
// There will be no more words that match the string, so it should cut off there.