/**
 * getPins - Given pins that was observed, returns an array of strings for all the potential digits that or vertically or horizontally possible pin inputs
 * observed string possible number that was inputed by the mark
 */
getPINs = function(observed){
    var positions = [];
    for(var input in observed){
        var num = parseInt(input);
        positions.push(allNearNums(num));
    }
    allCombos();
}
/**
 * allNearNums - Given an int, outputs an array of possible, inputs that could have been entered by a mark
 * num int - number though to have been inputed by the mark
 */
allNearNums = function(num) {
    var possibleNum = [num];
    // top
    if(num > 3){
        possibleNum.push(num - 3);
    }else if(num == 0){
        possibleNum.push(8);
    }
    // right
    if((num - 1) % 3 == 0){
        possibleNum.push(num + 1);
    }
    // bottom
    if(num < 7 && num > 0){
        possibleNum.push(bottom = num + 3);
    }
    // left
    if((num % 3) != 0){
        possibleNum.push(num - 1);
    }
    return possibleNum;
}
/**
 * allCombos - Takes a 2D array and outputs all possible combos of the numbers as an array of strings
 * positions array An array of arrays that hold all the possible numbers in a given position
 */
var allCombos = function(positions){
    // if only 1 position
    if(positions.length == 1){
        var answer = "";
        for(var num in positions){
            answer += positions[num].toString(10);
        }
        return answer;
    }
    // > 1 positions
    
}
//11
//11,12,14,21,22,24,41,42,44