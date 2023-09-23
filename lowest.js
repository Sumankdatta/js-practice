const product = [
    { name: 'samsung', price: 20000, location: 'japan', quantity: 2 },
    { name: 'nokia', price: 30000, location: 'bangladesh', quantity: 23 },
    { name: 'iphone', price: 90000, location: 'usa', quantity: 2 },
    { name: 'realme', price: 15000, location: 'chaina', quantity: 2 },
    { name: 'vivo', price: 25000, location: 'hongkong', quantity: 1 },
    { name: 'oppo', price: 35000, location: 'india', quantity: 3 }
]

function lowestPrice(product) {
    let lowest = product[0];
    console.log('lowest', lowest);

    for (let i = 0; i < product.length; i++) {
        const phone = product[i]

        if (phone.price < lowest.price) {
            lowest = phone
        }

    }
    return lowest
}

const result = lowestPrice(product)
console.log(result);