function validateInput(input: string): void {
    try {
        const number = Number(input);

        if (input.trim() === "" || !Number.isFinite(number)) {
            throw new Error("Invalid input! Please enter a valid number.");
        }

        console.log("Valid number:", number);
    } catch (error) {
        console.log("Error:", (error as Error).message);
    } finally {
        console.log("Input validation completed.");
    }
}

validateInput("123");
validateInput("abc");
