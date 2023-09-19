const numbers = [12, 23, 34, 4, 5, 56];

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    sum = sum + number
    // console.log(i, number, sum);
}

//with function:

function getSumInArray(productPrice) {
    let sum = 0;

    for (let i = 0; i < productPrice.length; i++) {
        const priceIndex = productPrice[i]
        sum = sum + priceIndex
        console.log(i, priceIndex, sum);
    }
    return sum
}

const productPrice = [12, 22, 33, 44, 55, 66, 77, 45];
const totalSum = getSumInArray(productPrice)

console.log(totalSum);