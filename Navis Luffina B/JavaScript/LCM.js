function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return Math.abs(a);
}

function lcm(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }

    return Math.abs(a * b) / gcd(a, b);
}

console.log("LCM:", lcm(4, 6));
console.log("LCM:", lcm(12, 18));
