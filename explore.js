const { array } = require("prop-types");

const country = 'Bangladesh';

// console.log(typeof (country));

const friends = ['jibin', 'moron', 'agun'];
const newFriend = ['sajib', 'pintu']

const match = friends.concat(newFriend)
// console.log(match);
// console.log(friends.includes('moron'));

// console.log(friends.indexOf('moron'));

friends[2] = 'pamm';

console.log(friends);

const student = {
    id: 3,
    name: 'suman',
    age: 44
}

console.log(Object.keys(student));