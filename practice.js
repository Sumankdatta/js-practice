const monGive = 1000;
const applePrice = 500;
const orangePrice = 200;

const totalCost = applePrice + orangePrice;

const onHand = monGive - totalCost;

// console.log(onHand);

const math = 75.25;
const bio = 65;
const che = 80;
const phy = 35.45;
const ban = 99.5;

// const average = parseFloat(((math + bio + che + phy + ban) / 5).toFixed(2))

const average = (math + bio + che + phy + ban) / 5;
const ave = parseFloat(average.toFixed(2))
// console.log(ave);


const john = "I am going to be";
const sina = "an awesome web developer";

const teacher = john + " " + sina;

// console.log(teacher);


const remainder = 119 % 5;

// console.log(remainder);


const number = [3, 4, 6, 8, 1]

number[4] = 9;

number.push(31, 34, 45)
// console.log(number);


const price = [1, 2, 3, 4, 5]

price.pop(3)

// console.log(price);

const cockPrice = [1, 2, 3, 4, 5, 6];

// cockPrice.unshift(9)
cockPrice.splice(4, 0, 99)
// console.log(cockPrice);

const phonePrice = 12000;
const myBudget = 5000;

// if (phonePrice <= myBudget) {
//     console.log('phone kinbo');
// }
// else {
//     console.log('briyani khabo');
// }

const totalArray = {}

const fruits = ["Apple", "Banana", "Orange"];
// totalArray.fruits = fruits

const fruitsIndex = fruits.indexOf("Banana");

fruits[1] = "Mango"
// console.log(fruitsIndex);
// console.log(fruits);
// console.log(totalArray);

fruits.pop()
fruits.push("watermelon")

// console.log(fruits);

const marks = 33;

if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade c");
}
else if (marks >= 40) {
    console.log("Grade D");
}

else if (marks <= 39) {
    console.log("Grade F");
}
