function swap<T>(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort<T>(space: T[]) {
    for (let i = 0; i < space.length - 1; i++) {
        let minIndex = i;  // assume the current element is the min

        for (let j = i + 1; j < space.length; j++) {
            if (space[j] < space[minIndex]) {
                minIndex = j;
            }
        }

        swap(space, minIndex, i); // swap elements
    }
}

const testCases = [4, 3, 2, 4, 1];

selectionSort(testCases);
console.log(testCases);
