"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scoresArray){

    let total = 0;

    let lenthOfList = scoresArray.length;

    for(let i=0; i < lenthOfList; i++ ){
        total = total + scoresArray[i];
    }

    return total / lenthOfList;
}

console.log("My Scores Average: " + Math.round(getAverage(myScores)));

console.log("Your Scores Average: " + Math.round(getAverage(yourScores)));