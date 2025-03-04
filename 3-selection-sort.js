const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [0,1,1,2,3.......]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        const element1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            count++
            const element2 = array[j];
            if (element1 > element2) {
                array[i] = element2
                array[j] = element1
            }

        }
    }
    return array
}

console.log(selectionSort(arr))
console.log(arr.length) // O(n*n)
console.log('count = ', count)

