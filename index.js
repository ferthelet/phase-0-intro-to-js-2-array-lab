// Write your solution here!
// js- phase 0 and phase 1?

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    // appends a cat to the cats array and returns a 
    // new array, leaving the cats array unchanged
    return [...cats, name];
}

function prependCat(name) {
    // prepends a cat to the cats array and returns 
    // a new array, leaving the cats array unchanged
    return [name, ...cats];
}

function removeLastCat() {
    // removes the last cat in the cats array and
    // returns a new array, leaving the cats array unchanged
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    // removes the first cat from the cats array and returns
    // a new array, leaving the cats array unchanged
    return cats.slice(1, cats.length);
}
