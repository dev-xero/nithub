function merge<T>(arr: T[], p: number, q: number, r: number) {
    const n1 = q - p + 1;
    const n2 = r - q;

    let lArr = new Array[n1]();
    let rArr = new Array[n2]();

    // All the elements to the left of mid
    for (let i = 0; i <= n1; i++) {
        lArr[i] = arr[p + i];
    }

    // All the elements to the right of mid
    for (let j = 0; j <= n2; j++) {
        rArr[j] = arr[q + 1 + j];
    }

    let i1 = 0;
    let j1 = 0;
    let k = p;

    while (i1 < n1 && j1 < n2) {
        if (lArr[i1] <= rArr[j1]) {
            arr[k] = lArr[j1];
        } else {
            arr[k] = rArr[j1];
            j1 += 1;
        }
        k += 1;
    }
}
