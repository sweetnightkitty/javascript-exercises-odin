const palindromes = function (string) {
const punctuation = /[\.,?! ]/g;

let newString = string.toLowerCase();
newString = newString.replace(punctuation, "");

let forwards = newString.split("");
let backwards = [];
let length = forwards.length;

for(let i = length - 1; i >= 0; i--) {
    backwards.push(forwards[i]);
};

return forwards.join() === backwards.join();
};


// Do not edit below this line
module.exports = palindromes;
