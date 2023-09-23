const shoppingCart = [
    { name: 'shoe', price: 340 },
    { name: 'share', price: 500 },
    { name: 'dress', price: 290 },
    { name: 'bag', price: 250 },
    { name: 'leather', price: 330 }
]

function cartCalculate(cart) {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        const productsPrice = cart[i];
        sum = sum + productsPrice.price;
    }
    return sum
}

const total = cartCalculate(shoppingCart)
console.log(total);