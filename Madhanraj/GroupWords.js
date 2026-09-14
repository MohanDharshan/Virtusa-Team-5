let input = prompt("Enter words: ");

let words = input.split(" ");
let groups = new Map();

for (let word of words) {
    let first = word[0];

    if (!groups.has(first)) {
        groups.set(first, []);
    }

    groups.get(first).push(word);
}

for (let [key, value] of groups) {
    console.log(key + ":", value);
}