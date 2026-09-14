let num: number = Number(prompt("Enter a number:"));
let sum: number = 0;

num = Math.abs(num);

while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);