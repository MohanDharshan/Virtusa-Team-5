async function apiCall1(): Promise<string> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    return JSON.stringify(data);
}

async function apiCall2(): Promise<string> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data = await response.json();
    return JSON.stringify(data);
}

async function apiCall3(): Promise<string> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const data = await response.json();
    return JSON.stringify(data);
}

async function executeCalls(): Promise<void> {
    const result1 = await apiCall1();
    console.log("API Call 1:", result1);

    const result2 = await apiCall2();
    console.log("API Call 2:", result2);

    const result3 = await apiCall3();
    console.log("API Call 3:", result3);
}

console.log("Program started");
executeCalls();