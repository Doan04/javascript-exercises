const sumAll = function(lower,upper) {
    // TODO: implement type-checking
    if(typeof(lower) != "number" || typeof(upper) != "number"){
        return "ERROR";
    }
    if(lower < 0 || upper < 0){
        return "ERROR";
    }
    //swap order if lower > upper
    if(lower > upper){
        let temp = lower;
        lower = upper;
        upper = temp;
    }

    let sum = 0;
    for(let i = lower; i < upper+1; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
