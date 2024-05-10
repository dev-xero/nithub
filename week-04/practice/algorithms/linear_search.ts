function linearSearch(key: string, sample: string[]) {
    for (let i = 0; i < sample.length; i++) {
        if (sample[i] == key) {
            return i;
        }
    }
    return -1;
}

const searchSpace = ["this", "is", "some", "search", "space"];
const isIndex = linearSearch("is", searchSpace);

console.log("index:", isIndex);
