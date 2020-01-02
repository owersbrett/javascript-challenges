// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, 
// count the number of ways it can be decoded.

// For example, the message '111' would give 3, 
// since it could be decoded as 'aaa',  'ak',  'ka'  
// '1111'                       'aaaa'  'aak'  'kaa' 'kk' 
// '11111'                      'aaaaa' 'aaak' 'akk' 'kaaa' 'kka' 'kak' 6
// You can assume that the messages are decodable. 
// For example, '001' is not allowed.
//

let myMessage = '111';
let mySecondMessage = '1111';
let myThirdMessage = '11111';
// let myMessage = '111';
// let myOtherMessage = '211111';

function numberOfWays(data){
    return whatRemains(data, data.length);
}

function whatRemains(data, remaining){
    if (remaining === 0){
        return 1;
    }

    let beginning = data.length - remaining;
    if (data[beginning] === '0'){
        return 0;
    }

    // let result = whatRemains(data, remaining - 1);
    // if (remaining >= 2 && parseInt){

    // }

    return result;

}

