// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, 
// count the number of ways it can be decoded.

// For example, the message '111' would give 3, 
// since it could be decoded as 'aaa',  'ak',  'ka'  
// '1111'                       'aaaa'  'aak'  'kaa' 'kk' 'aka'
// '11111'                      'aaaaa' 'aaak' 'aaka 'akaa' 'akk' 'kaaa' 'kka' 'kak' 
// You can assume that the messages are decodable. 
// For example, '001' is not allowed.
//


// TESTING
let myMessage = [1,1,1];
let mySecondMessage = [1,1,1,1];
let myThirdMessage = [1,1,1,1,1];

let myMessageLength = myMessage.length;
let mySecondMessageLength = mySecondMessage.length;
let myThirdMessageLength = myThirdMessage.length;



function countWays(msg, myMessageLength){
    // This is a recursive function that keep decreasing the myMessageLength parameter passed. 
    // Once there's only 1 digit in the array left, add one to the count. in this case, it would be
    // as though the message only contained letter A - I, because they represent 1 - 9. in the case of an empty array being passed,
    // the message is undefined, which may or may not be considered a valid decoding. i consider it valid, however.
    if (myMessageLength === 1 || myMessageLength === 0){
        return 1;
    }

    // initialize the count, but considering the count incrementer repeatedly calls countWays, the highest level count will not be affected.
    // obviously

    let count = 0;
    
    // when asking myself what this piece was for, i asked myself, hm, it's going to feed down to when message length is 1... and so it will return one
    
    if (msg[myMessageLength - 1] > 0){
        count = countWays(msg, myMessageLength - 1);
    }

    console.log(count);

    if (msg[myMessageLength - 2] === 1 || (msg[myMessageLength - 2] === 2 && (msg[myMessageLength - 1] < 7))){
        count += countWays(msg, myMessageLength - 2);
    }
    
    console.log(count);

    return count;
}

/// THE TESTS
console.log(countWays(myMessage, myMessageLength));
// console.log(countWays(mySecondMessage, mySecondMessageLength));
// console.log(countWays(myThirdMessage, myThirdMessageLength));