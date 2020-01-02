// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// An XOR linked list is a more memory efficient doubly linked list. 
// Instead of each node holding next and prev fields, 
// it holds a field named both, which is an XOR of the next node 
// and the previous node. Implement an XOR linked list; 
// it has an add(element) which adds the element to the end, 
// and a get(index) which returns the node at index.

// If using a language that has no pointers (such as Python), 
// you can assume you have access to get_pointer and dereference_pointer 
// functions that converts between nodes and memory addresses.


// XOR is a logical operation, which is also known as the exclusive or operation. 
//Basically, or (||) means if this or that is true, and and (&&) means if both of these are true.
// In the case of XOR, it asks if this or that is true, but NOT if both are true. Whereas or includes
// three possibilities, XOR includes 2. I 




// class Node {
//     constructor(data, next){
//         this.data = data;
//         this.next = next;
//     }
//     Node(data){
//         this.data = data;
//     }
// }

// class LinkedList {

// }

// let nodeA = new Node(6);
// let nodeB = new Node(3);
// let nodeC = new Node(4);
// let nodeD = new Node(2);
// let nodeE = new Node(1);








// class Node {
//     constructor(both, value){
//         this.both = [both.last, both.next];
//         this.value = value;
//         this.index = 0;
//         if (this.both[0] !== undefined){
//             this.isRoot = false;
//         } else {
//             this.isRoot = true;
//         }
//         if (this.both[1] === undefined){
//             this.isEnd = true;
//         } else {
//             this.isEnd = false;
//         }
//     }

//     add(node){ //just pass the value ... ?
//         let newNode = new Node([this.value, undefined], node);
//         this.both = [this.both.last, newNode];
//         this.isEnd = false;

//     }

//     // get(index){

//     // }
// }

// let rootNode = new Node([undefined, undefined], 5);

// rootNode.add(6);

// console.log(rootNode);
