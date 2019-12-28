
let theArray = [1, 2, 3, 4, 5];
let theSecondArray = [3, 2, 1];

// function productArray(anArr) {
//     let newArray = [];
//     anArr.forEach((multiplier, index) =>{
//         let product = 1;
//         anArr.forEach((multiplicand, i) =>{
//             if (index !== i){
//                 product = product * multiplicand;
//             }
//         });
//         newArray.push(product);
//     });
//     return newArray;
// }

function productArray(anArr) {
    let newArray = anArr.map((number, index, arr)=>{
        let product = 1;
        for (i = 0; i < anArr.length; i++){
            if (index !== i){
                product *= arr[i];
            }
        };
        return product;
    });
    return newArray;
}

console.log(productArray(theArray));
console.log(productArray(theSecondArray));

//second version is cleaner because i use map, 
//don't need number parameter but it is required for map