function fibonacciCalc(x){
    if (x === 0){
        return 0;
    }
    if (x === 1){
        return 1;
    }
    return (fibonacciCalc(x-1) + fibonacciCalc(x-2));
}

function fibonacciArray(y){
    arr = [];
    for (let i = 0; i < y; i++){
        arr.push(fibonacciCalc(i));
    }
    return arr;
}

function areaOfCircle(d){
    r = d/2;
    return (3.14 * r * r)
}

function sumOfAreas(a){
    theSum = a.reduce((a,b)=>{
        return a+b;
    });
    return theSum;
}

let myCircles = [22, 18, 13, 8, 4]
console.log(sumOfAreas(myCircles));


// console.log(areaOfCircle(22));

// console.log(fibonacciArray(40));