"use strict"

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] },
    { name: "Eric", scores: [65, 72, 55, 27] }
];


function calcStudentAverages(listOfStudents) {

    let numberOfStudents = listOfStudents.length

    for (let i = 0; i < numberOfStudents; i++) {

        let total = 0;

        let currentStudentScoresArray = listOfStudents[i].scores

        let numberOfScoreForStudent = currentStudentScoresArray.length

        for (let i = 0; i < numberOfScoreForStudent; i++) {

            total += currentStudentScoresArray[i];

        }

        let studentAverage = total / numberOfScoreForStudent;

        console.log(`${listOfStudents[i].name} has an average score of ${studentAverage}`)

    }


}

calcStudentAverages(students);