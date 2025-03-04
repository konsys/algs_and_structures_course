const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count = 0

function bubbleSort(ar) {
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length - 1; j++) {
            if (ar[j] > ar[j + 1]) {
                const tmp = ar[j];
                ar[j] = ar[j + 1];
                ar[j + 1] = tmp;
            }
        }
    }
    return ar
}


console.log('length', arr.length)
console.log(bubbleSort(arr)) // O(n*n)
console.log('count = ', count)
