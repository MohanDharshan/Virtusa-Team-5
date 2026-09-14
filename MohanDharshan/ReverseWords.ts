import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence: string) => {
    const words = sentence.split(" ");
    const result: string[] = [];

    for (let i = 0; i < words.length; i++) {
        const reversed = words[i]!.split("").reverse().join("");
        result.push(reversed);
    }

    console.log(result.join(" "));

    rl.close();
});