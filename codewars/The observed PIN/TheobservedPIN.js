/**
 * getPins - Given pins that was observed, returns an array of strings for all the potential digits that or vertically or horizontally possible pin inputs
 * observed string possible number that was inputed by the mark
 */
var getPINs = function(observed) {
    var numArray = strToNumArray(observed);
    var positions = [];
    for (var num in numArray){
        positions.push(allNearNums(numArray[num]));
    }
    var pinsArray = allCombos(positions);
}
/**
 * strToNumArray - Converts a string of numbers into an array of numbers
 * @param {string} numStr 
 */
var strToNumArray = function(numStr){
    var positions = [];
    for (var input in numStr) {
        var num = parseInt(numStr[input]);
        positions.push(num);
    }
    return positions
}
/**
 * allNearNums - Given an int, outputs an array of possible, inputs that could have been entered by a mark
 * num int - number though to have been inputed by the mark
 */
var allNearNums = function(num) {
    var possibleNum = [num];
    // top
    if (num > 3) {
        possibleNum.push(num - 3);
    } else if (num == 0) {
        possibleNum.push(8);
    }
    // right
    if ((num) % 3 != 0) {
        possibleNum.push(num + 1);
    }
    // bottom
    if (num < 7 && num > 0) {
        possibleNum.push(bottom = num + 3);
    } else if (num == 8) {
        possibleNum.push(0);
    }
    // left
    if ((num - 1) % 3 != 0 && num != 0) {
        possibleNum.push(num - 1);
    }
    return possibleNum;
}
/**
 * allCombos - Takes a 2D array and outputs all possible combos of the numbers as an array of strings
 * positions array An array of arrays that hold all the possible numbers in a given position
 */
var allCombos = function(positions) {
    // if only 1 position
    if (positions.length == 1) {
        var answer = "";
        for (var num in positions) {
            answer += positions[num].toString(10);
        }
        return answer;
    }
    // > 1 positions
}

//For 11: 11,12,14,21,22,24,41,42,44