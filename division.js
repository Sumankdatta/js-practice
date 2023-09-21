function divisionResult(numbers) {

    let resultArray = []
    for (let i = 0; i <= numbers.length; i++) {
        const getNumber = numbers[i]
        console.log(getNumber);
        if (getNumber % 3 === 0 && getNumber % 5 === 0) {
            resultArray.push(getNumber, 'foobar');

        }
        else if (getNumber % 3 === 0) {
            resultArray.push(getNumber, 'foo');
            // return 'foo'
        }
        else if (getNumber % 5 === 0) {
            resultArray.push(getNumber, 'bar');
        }

        else {
            // return getNumber
        }

    }
    return resultArray
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const result = divisionResult(numbers)
console.log(result);