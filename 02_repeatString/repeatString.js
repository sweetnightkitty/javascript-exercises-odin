const repeatString = function(string, num) {
const array = []

if(num >= 0) {
    for(i = 0; i < num; i++) {
        array.push(string);
    }
    return array.join("");    
} else {
    return "ERROR";
}

};

// Do not edit below this line
module.exports = repeatString;
