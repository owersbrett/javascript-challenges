// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// You are given an M by N matrix consisting of booleans that represents a board. 
// Each True boolean represents a wall. Each False boolean represents a tile you 
// can walk on.

// Given this matrix, a start coordinate, and an end coordinate,
// return the minimum number of steps required to reach the end 
// coordinate from the start. If there is no possible path, then return null. 
// You can move up, left, down, and right. You cannot move through walls. 
// You cannot wrap around the edges of the board.

// For example, given the following board:

// [[f 0,0, f, f, f],
// [t, t, f, t],
// [f, f, f, f],
// [f 3,0, f, f, f]]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left), 
// the minimum number of steps required to reach the end is 7, 
// since we would need to go through (1, 2) because there is a 
// wall everywhere else on the second row.

// let layerThree = [false, false, false, false];
// let layerTwo = [true, true, false, true];
// let layerOne = [false, false, false, false];
// let layerZero = [false, false, false, false];

// let theMatrix = [layerThree, layerTwo, layerOne, layerZero];

// let theStart = theMatrix[3][0];
// let theEnd = theMatrix[0][0];

// function stepsCalculator(matrix, start, end){
//     let stepsRequired = 0

//     matrix.forEach(layer=>{

//     })


//     return stepsRequired;
// }

class Row {
    constructor(...values){
        values.forEach(value=>{
            this.value = value;
        })
    }

}

let a = new Row("Row0", "Row1", "Row2", "Row3");
console.log(a);