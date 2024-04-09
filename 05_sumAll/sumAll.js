const sumAll = function(small, large) {
    let sum = 0;
    if(typeof small !== 'number' || typeof large !== 'number') return "ERROR";
    if(small < 0 || large < 0) return "ERROR";
    if(small > large) {
        let temp = large;
        large = small;
        small = temp;
    }

    for(let i = small; i <= large; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
