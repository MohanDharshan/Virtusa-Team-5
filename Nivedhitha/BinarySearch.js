let n = Number(prompt("Enter the number of elements:"));

let arr = prompt("Enter the elements:").split(" ").map(Number);

let target = Number(prompt("Enter the target element:"));

let low = 0;
let high = n - 1;
let found = -1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        found = mid;
        break;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

if (found !== -1) {
    console.log("Element found at index:", found);
} else {
    console.log("Element not found");
}