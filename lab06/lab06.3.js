function printNumbers(from, to) {
    let current = from;

    const intervalId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

// Example usage:
printNumbers(1, 5);
