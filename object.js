const shoppingCart = {
    phone: 2,
    mouse: 5,
    keyboard: 3,
    motherBoard: 4
}

shoppingCart.mouse = 99;

// console.log(shoppingCart);

const result = Object.keys(shoppingCart);
const result1 = Object.values(shoppingCart)

console.log(result);
console.log(result1);