function areAnagrams(str1: string, str2: string): boolean {
    const a = str1.toLowerCase().replace(/\s/g, "");
    const b = str2.toLowerCase().replace(/\s/g, "");

    if (a.length !== b.length) {
        return false;
    }

    const count: Map<string, number> = new Map();

    for (const char of a) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of b) {
        if (!count.has(char)) {
            return false;
        }

        count.set(char, count.get(char)! - 1);

        if (count.get(char) === 0) {
            count.delete(char);
        }
    }

    return count.size === 0;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
