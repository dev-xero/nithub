function insertionSort<T>(space: T[]) {
    for (let i = 1; i < space.length; i++) {
        let key = space[i];
        let j = i - 1;

        while (j >= 0 && space[j] > key) {
            space[j + 1] = space[j];
            j -= 1;
        }

        space[j + 1] = key;
    }
}

const testspace = [23, 45, 23, 11, 0, 1];

console.log("Before sorting:", testspace);
insertionSort(testspace);
console.log("After sorting:", testspace);
