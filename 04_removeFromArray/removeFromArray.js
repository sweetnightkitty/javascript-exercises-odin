const removeFromArray = function(array, ...unwanteds) {
    const filtered = array.filter((value) => {
        return !unwanteds.includes(value);
    });
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
