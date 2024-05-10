function factorial(n: number): number {
    if (n > 0) {
        if (n == 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }
    return -1;
}

console.log(factorial(5)); // should print 6
