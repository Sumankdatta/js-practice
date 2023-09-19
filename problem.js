const { ftruncate } = require("fs");

function mindGame(number) {
    const result = (((number * 3) + 10) / 2) - 5;
    return result
}

const res = mindGame(33)
// console.log(res);

function evenOdd(names) {

    if (names.length % 2 !== 0) {
        return 'odd'
    }
    else {
        return true
    }
}

const names = 'chatgpt'

const result = evenOdd(names)
// console.log(result);

function publicBusFare(man) {
    const sum = (man % 50) % 11
    return sum * 250
}

const man = 365;

const resul = publicBusFare(man)
// console.log(resul);


function oilPrice(oilQuantity, petrolQuantity, octanQuantity) {
    const sum = (oilQuantity * 114) + (petrolQuantity * 130) + (octanQuantity * 135)
    return sum
}

const oilQuantity = 30;
const petrolQuantity = 20;
const octanQuantity = 10;

const price = oilPrice(oilQuantity, petrolQuantity, octanQuantity)

// console.log(price);

function isFriend(friend1, friend2) {
    if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
        return 'best friend'
    }
    else {
        return 'frnd na'
    }
}

const friend1 = { name: "suman", friend: "anu" }
const friend2 = { name: "anu", friend: "suman" }

const results = isFriend(friend1, friend2)
console.log(results);