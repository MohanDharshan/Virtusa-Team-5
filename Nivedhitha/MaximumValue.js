let n = Number(prompt("Enter the number of elements:"));

let arr = prompt("Enter the elements:").split(" ").map(Number);

let maximum = Math.max(...arr);

console.log("Maximum value:", maximum);