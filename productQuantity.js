const shoppingCart = [
    { name: 'shoe', price: 340, quantity: 5 },
    { name: 'share', price: 500, quantity: 2 },
    { name: 'dress', price: 290, quantity: 3 },
    { name: 'bag', price: 250, quantity: 1 },
    { name: 'leather', price: 330, quantity: 4 }
]

function cartCalculate(cart) {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const productsTotal = product.price * product.quantity
        sum = sum + productsTotal;
    }
    return sum
}

const total = cartCalculate(shoppingCart)
console.log(total);