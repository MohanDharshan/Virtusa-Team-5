function reverseString(text) {
    return text.split("").reverse().join("");
}

let text = prompt("Enter a string:");

console.log("Reversed string:", reverseString(text));