async function getData() {
    const api1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
    const api2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
    const api3 = fetch("https://jsonplaceholder.typicode.com/posts/3");
    try {
        const responses = await Promise.all([api1, api2, api3]);

        const data = await Promise.all([
            responses[0].json(),
            responses[1].json(),
            responses[2].json()
        ]);

        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

getData();