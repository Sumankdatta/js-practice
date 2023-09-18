

const shoppingCart = {
    phone: 3,
    laptop: 6,
    sunglass: 1,
    camera: 2
}

const objectKeys = Object.keys(shoppingCart);
const objectValues = Object.values(shoppingCart);

for (let i = 0; i < objectKeys.length; i++) {
    // console.log(objectKeys[i]);
    const keys = objectKeys[i]
    const value = shoppingCart[keys]
    console.log(value);

}


// console.log(objectValues);