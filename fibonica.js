let number = [90, 91]

for (let i = 2; i <= 10; i++) {
    number[i] = number[i - 1] + number[i - 2]
}
console.log(number);