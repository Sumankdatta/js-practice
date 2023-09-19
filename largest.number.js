function maxNum(numbers) {
    let largest = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest
}

const numbers = [12, 23, 33, 34, 55, 4, 7];
const result = maxNum(numbers);
console.log(result);