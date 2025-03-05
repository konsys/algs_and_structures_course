const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    const pivotIndex = Math.floor(array.length / 2)
    const pivot = array[pivotIndex]
    const less = []
    const greater = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === pivot) {
            continue
        }
        if (element >= pivot) {
            greater.push(element)
        } else {
            less.push(element)
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]

}


console.log(quickSort([2, 1, 2, 9, 6, 4, 1]))
console.log('count', count)



let arr1 = [2, 1, 2, 9, 6, 4, 1]
let pivot = 9
let less = [2, 1, 2, 6, 4, 1]
let greater = [] // !!!!!!!!!!!!!!!

//less
arr1 = [2, 1, 2, 6, 4, 1]
pivot = 6
less = [2, 1, 2, 4, 1]
greater = []

//greater
arr1 = [2, 1, 2, 4, 1]
pivot = 2
less = [1, 1]
greater = [2, 4]

//less
arr1 = [1, 1]
pivot = 1
less = []
greater = [1]

//less
arr1 = [2, 4]
pivot = 4
less = []
greater = [4]
