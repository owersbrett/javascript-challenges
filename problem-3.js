// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), 
//which serializes the tree into a string, and deserialize(s), 
//which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'



class Node {
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
    toString(){
        return JSON.stringify(this);
    }
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

let serialize = node => node.toString();

console.log(serialize(node));

const deserialize = string => JSON.parse(string);

console.log(deserialize(serialize(node)).left.left.val); // prints "left.left"

// I struggled quite a bit with this one. First, I was clueless as to what "serializes a tree into a string" meant.
// My first attempt involved decomposing the object which the prompt explained how to create, but i didn't use the same notation
// as my final answer, instead separating them by spaces, because i didn't know how to use JSON methods to accomplish my goal.
// putting those back into an object, I found much more difficult to do recursively, though I know there is a way. this is the first
// challenge answer that i got directly from online. line 29 - 31 opened my eyes, but it makes sense that javascripts object notation
// object has methods to transform data to the form i'd like, because who knows how the data will be coming in.
// line 34 initializes the tree, 36 creates a global function which takes in the node parameter, and accesses the nodes toString method
// line 36 confused me for a bit, because I was mixed up with if the node being passed in was the object i just initialized.
// in retrospect, this is a very silly mistake, and as i tried to break it, i would console.log(serialize) and not get my object serialized.
// obviously, because in this case node is referring to the argument, not the object i created. i'm a dumb dumb
// deserialize json.parse(string) makes sense, given the notation of the string.
// the final console.log accessess the serialize, then deserialized node object, then prints out the value of the left, left, value property