

function friendsName(friends) {
    let unique = [];
    for (let i = 0; i < friends.length; i++) {
        const name = friends[i]

        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique
}
const friends = ['suman', 'sanjay', 'anurag', 'suman', 'suman', 'sanjay', 'anurag', 'porag']
const accurateName = friendsName(friends)
// console.log(accurateName);
console.log(friends.includes('manjay'));