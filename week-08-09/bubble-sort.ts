import swap from "./swap.ts";

function bubbleSort<T>(arr: T[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

const testcases = [24, 52, 12, 11];

console.log("Before sorting:", testcases);
bubbleSort(testcases); // sort
console.log("After sorting:", testcases);
