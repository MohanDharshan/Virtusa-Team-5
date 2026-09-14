let input1 = prompt("Enter first array elements: ");
let input2 = prompt("Enter second array elements: ");

let arr1: number[] = input1!.split(" ").map(Number);
let arr2: number[] = input2!.split(" ").map(Number);

let result: number[] = arr1.concat(arr2);

console.log("Merged array:", result);