function oddNumberSum(oddNumber) {
    let sum = 0;
    for (let i = 0; i < oddNumber.length; i++) {
        const oddNum = oddNumber[i];
        sum = sum + oddNum
        // console.log(i, oddNum, sum);
    }
    return sum
}

function oddNumbers(numbers) {
    let oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const odd = numbers[i];

        if (odd % 2 !== 0) {
            oddNumbers.push(odd)
            // console.log(i, odd, oddNumbers);
        }

    }
    return oddNumbers
}

const numbers = [12, 11, 44, 45, 66, 67, 34];
const oddNumber = oddNumbers(numbers)

const oddSum = oddNumberSum(oddNumber)

// console.log(oddSum);

const price = [1, 2, 3, 4, 5, 6, 7]
// const reverse = price.reverse()



console.log(reverse);