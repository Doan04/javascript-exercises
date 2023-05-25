const removeFromArray = function() {
    //convert args to array
    let arr = arguments;
    arr = Array.from(arr);

    // create array of target values
    let targets = [];
    if(arguments[1] != null){
        targets = arr.slice(1);
    }
    //Get length of main array
    let arr_len = arr[0].length;
    let main_arr = arr[0];

    let i = 0;
    while(i < arr_len){
        if(targets.includes(main_arr[i])){
            main_arr.splice(i,1);
        }
        else{
            i++;
        }
    }
    return main_arr;
};

// Do not edit below this line
module.exports = removeFromArray;


// Use splice with arguments (index, number of elems) to remove items 
// from array without leaving holes