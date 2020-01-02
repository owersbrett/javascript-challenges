// two integer arrays of sensor data

// ideally they have the same data, but our problem is to calculate the difference between the two arrays

// because the sensors arent perfect

// sum the differences

// WITHOUT RECURSION

let sensorA = [15, -4, 56, 10, -23];
let sensorB = [14, -9, 56, 14, -23];

function compareSensors(sensA, sensB){
    let differences = 0; //for some reason if i don't initialize this with a number the expected result fails

    sensA.forEach((n, i) =>{
        differences += (Math.abs(Math.abs(n) - Math.abs(sensB[i])));
    });
    return differences;
}

console.log(compareSensors(sensorA, sensorB));

// with recursion

function compareSens(sensA, sensB, arrLength){
    if (arrLength === 0) {
        return 0; //base case is important
    }
    let lastDifference = Math.abs(Math.abs(sensA[arrLength - 1]) - Math.abs(sensB[arrLength - 1]));
    let difference = compareSens(sensA, sensB, arrLength - 1) + lastDifference;
    return difference;
}

console.log(compareSens(sensorA, sensorB, sensorA.length));