// This is a long one!

// We are interested in finding the longest (number of characters) 

// absolute path to a file within our file system. 

// For example, in the second example above, the longest absolute path is 

// "dir/subdir2/subsubdir2/file2.ext", and its length is 32 

// (not including the double quotes).

let test = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
let testTwo = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";

console.log(test);
console.log(testTwo);
function objectCreator(str){
    str = str.split('');
    str.forEach((value) =>{
        console.log(value[0]);
    });

    return str;
}

console.log(objectCreator(test));