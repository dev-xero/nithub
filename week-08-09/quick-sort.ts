import swap from './swap.ts';

// Partitions an array for quick sort
function partition<T>(arr: T[], p: number, r: number): number {
    const pivot = arr[r];
    let i = p - 1;

    for (let j = p; j < r; j++) {
        if (arr[j] < pivot) {
            i += 1;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, r);
    return i + 1;
}

// Recursively sorts an array
function quickSort<T>(arr: T[], low: number, high: number) {
    if (low < high) {
        const pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1); // recursively sort left
        quickSort(arr, pivot + 1, high); // recursively sort right
    }
}

// Testing
const test = [9, 8, 7, 6, 5];
const N = test.length;

console.log("Before sorting:", test);
quickSort(test, 0, N - 1);
console.log("After sorting:", test);
