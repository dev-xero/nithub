function factorial(n: number): number {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120