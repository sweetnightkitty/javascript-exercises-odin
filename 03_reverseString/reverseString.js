const reverseString = function(string) {
    let forwardArray = string.split(""); //s,t,r,i,n,g
    let reverseArray = [];
    const num = forwardArray.length;
    for(let i = 0; i < num; i++){
        reverseArray.push(forwardArray.pop());
    }
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
