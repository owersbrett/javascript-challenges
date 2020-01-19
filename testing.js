// // const myAnon = (param) => console.log(param);

// // myAnon("yeet");
// // myAnon("yeo");

// function yo(){
//     console.log(this);
// }

// this.setInterval(() => console.log('things'), 1000);

// yo();

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer; // (*)
  
//       // do something with the value...
//     }
//   }
//   alert('Done!');

class Node {
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  checkWhatThisIs(){
    console.log(this.y)
  }
}

let myFirst = new Node("parent", "parent", "parent");
let mySecond = new Node(myFirst, "parent", "parent");
let myThird = new Node(myFirst, mySecond, "parent");
console.log(myFirst);
console.log(mySecond);
console.log(myThird);
console.log(myThird.y.x);



// myThird.checkWhatThisIs();
