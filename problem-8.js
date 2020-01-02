// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// A unival tree (which stands for "universal value") 

// is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

class Node {
    constructor(value, left = undefined, right = undefined){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let mySecondNode = new Node(5);
let myFourthNode = new Node(5);
let mySixthNode = new Node(5);
let mySeventhNode = new Node(5);


let myFifthNode = new Node(5, mySixthNode, mySeventhNode);
let myThirdNode = new Node(5, myFourthNode, myFifthNode);
let myRootNode = new Node(5, mySecondNode, myThirdNode);

    //     1
    // 2       3
    //     4       5
    //         6       7

console.log(myRootNode);

function countUnivals(root){
    if (root === undefined){
        return 0;
    }

    let totalCount = countUnivals(root.left) + countUnivals(root.right);
    if (isUnival(root)){
        totalCount++;
    }
    return totalCount;
}

function isUnival(root){
    if (root === undefined){
        return true; 
    }
    if (root.left !== undefined && root.left.value !== root.value){
        return false;
    }
    if (root.right !== undefined && root.right.value !== root.value){
        return false;
    }

    if (isUnival(root.left) && isUnival(root.right)){
        return true;
    }
    return false;
}

console.log(countUnivals(myRootNode));

// console.log(countUnivalSubtrees(myRoot));

// myObj = {
//     "name":"John",
//     "age":30,
//     "cars": {
//       "car1":"Ford",
//       "car2":"BMW",
//       "car3":"Fiat"
//     }
//    }

//I think I got this one, I'll have to look over my code a few more times. I watched CSDOJO describe his technique.
// I like how he talks about the time it takes for certain functions to occur, I think keeping it in mind will make me a better programmer.
// The XOR problem-6 still has me wondering how to implement it in JS -> I'm wondering if it can be done via hashing, so that I can store
//both right and left values in one value, but i doubt it. I think the purpose of the problem is to make a more memory efficient system,
//because with XOR i'll be able to go up or down based on what's passed.
//problem 7 is still giving me grief, and I would say i'm more motivated to get to the bottom of it because the idea of encoding/decoding
//cyphers really intrigues me.