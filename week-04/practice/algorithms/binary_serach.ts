// Binary Search algorithm: ~ O(n*lg(n))
function binarySearch<T>(key: T, space: T[]) {
    // Sort the array
    space.sort();

    // Search
    let low = 0;
    let high = space.length - 1;
    let steps = 0;

    while (low <= high) {
        steps += 1;
        console.log("took", steps, "steps");

        let mid = Math.floor(low + (high - low) / 2);

        if (space[mid] == key) {
            return mid;
        }

        if (space[mid] < key) {
            low = mid + 1;
            continue;
        }

        high = mid - 1;
    }

    return -1;
}

const sampleSpace = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 6;
const idx = binarySearch(target, sampleSpace);

console.log(`index of ${target}:`, idx); // should return 1
