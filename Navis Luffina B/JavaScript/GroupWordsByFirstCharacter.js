function groupByFirstCharacter(words) {
    const groups = new Map();

    for (const word of words) {
        const firstChar = word[0].toLowerCase();

        if (!groups.has(firstChar)) {
            groups.set(firstChar, []);
        }

        groups.get(firstChar).push(word);
    }

    return groups;
}

const words = ["Apple", "Ant", "Ball", "Bat", "Cat", "Car"];

const result = groupByFirstCharacter(words);

for (const [key, value] of result) {
    console.log(key, ":", value);
}
