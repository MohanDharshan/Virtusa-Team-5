let input = prompt("Enter array elements: ");

let numbers = input.split(" ").map(Number);

numbers = [...new Set(numbers)];
numbers.sort((a, b) => a - b);

if (numbers.length >= 2) {
    console.log("Second smallest element:", numbers[1]);
} else {
    console.log("Second smallest element does not exist");
}