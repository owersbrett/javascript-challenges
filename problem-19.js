// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given two singly linked lists that intersect at some point, 

// find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, 

// return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) 

// and constant space.

let A = [3, 7, 8, 10];
let B = [99, 1, 8, 10];

function findIntersectingNode(a, b){
    for (let i = 0; a.length >= b.length ? i < a.length - 1 : i < b.length - 1; i++){
        if (a[i] === b[i]){
            return a[i];
        }
    }
}

console.log(findIntersectingNode(A,B));