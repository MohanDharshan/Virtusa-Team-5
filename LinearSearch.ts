function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers: number[] = [10, 20, 30, 40, 50];

console.log("Index:", linearSearch(numbers, 30));
console.log("Index:", linearSearch(numbers, 90));
