const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count = 0
function linearSearch(array, item) {

    for (let index = 0; index < array.length; index++) {
        count++;
        if (item === array[index]) {
            return index
        }

    }
    return null;
}

console.log(linearSearch(array, 11))
console.log('count = ', count)

// O(n)
