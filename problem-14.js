// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// The area of a circle is defined as πr^2 = a. pi = a/r^2 

// Estimate π to 3 decimal places using a Monte Carlo method.

// Hint: The basic equation of a circle is x2 + y2 = r2. x * y = area of sq

let rNumbers = 2000000;

function areaOfCircle(test){
    let pi = 0;
    let circlePoints = 0;
    let squarePoints = 0;
    for(let i = 0; i < test; i++){
        let x = Math.random();
        let y = Math.random();

        // console.log(x);
        // console.log(y);


        if (x * x + y * y <= 1){
            circlePoints++;
        }

        squarePoints++;

        // console.log(circlePoints);
        // console.log(squarePoints);
        
    }
    pi = 4 * circlePoints/squarePoints;
    
    return Number((pi).toFixed(3));
}

// function randomInt(max){

//     return Math.floor(Math.random() * Math.floor(max));
// }

console.log(areaOfCircle(rNumbers));

