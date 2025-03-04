const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let count = 0

function binarySearch(array, item) {
    let start = 0;
    let end = array.length
    let found = false;
    let middle;
    let position = -1;
    while (!found && start <= end) {
        count++;
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            position = middle;
            found = true;
            return position
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

    }
    return position;
}

console.log('found', binarySearch(array, 10))
console.log('count = ', count)

function binaryRecursiveSearch(array, item, start, end) {
    const middle = Math.floor((start + end) / 2);
    console.log(111, middle)
    if (array[middle] === item) {
        return middle;
    }
    if (item < array[middle]) {
        return binaryRecursiveSearch(array, item, start, middle - 1)
    } else {
        return binaryRecursiveSearch(array, item, middle + 1, end)
    }
}

console.log('\nfound recursive', binaryRecursiveSearch(array, 10, 0, array.length))
console.log('count = ', count)

// O(log2n)

const factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log('\nfactorial', factorial(5))

const fibonachi = (n) => {
    if (n === 1) {
        return 1
    }
    return n + fibonachi(n - 1)
}

console.log('\nfibonachi', fibonachi(3))