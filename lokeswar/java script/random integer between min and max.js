
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 10;
let max = 50;
console.log(getRandomInt(min, max));
