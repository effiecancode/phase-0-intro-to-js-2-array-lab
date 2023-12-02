// Write your solution here! 🤩

const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name){
    return cats.push(`${name}`);
}

function destructivelyPrependCat(name) {
    return cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

// (...) - spread oparator creates a shallow copy, also unpacks.
function appendCat(name) {
    const cat = [...cats, `${name}`];
    return cat;
}

function prependCat(name) {
    const newcat = [`${name}`, ...cats];
    return newcat;
}

// pop returns the popped element
// slice creates a new array and removes element at specified index
// 0, means do nothing at begining
function removeLastCat() {
    const newcat2 = cats.slice(0, -1); // means start removing from index 0, (-1) means from the back/end of arr
    return newcat2;
}
// const them = removeLastCat();
// console.log(them);


function removeFirstCat() {
    const newcat3 = cats.slice(1); // simply remove first element
    return newcat3;
}

// only when working with indexes is when you count from 0.
