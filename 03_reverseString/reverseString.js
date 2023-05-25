const reverseString = function(string) {
    // splits string and get the number of chars    
    let str_arr = string.split("");
    let str_len = str_arr.length;

    let rev_str = "";

    for(let i = 0; i < str_len; i++){
        rev_str += str_arr[str_len - 1 - i];
    }

    return rev_str;
};
// Do not edit below this line
module.exports = reverseString;
