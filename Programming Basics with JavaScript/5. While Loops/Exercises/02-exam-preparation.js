function examPreparation(input) {
    let badGradesLimit = Number(input[0]);
    let index = 1;
    let problemName = '';
    let problemGrade = 0;
    let problemNum = 0;
    let gradesSum = 0;
    let badGrades = 0;

    while (input[index] !== 'Enough') {
        problemName = input[index];
        problemGrade = Number(input[index + 1]);
        if (problemGrade <= 4) {
            badGrades++;
            if (badGrades >= badGradesLimit) {
                break;
            }
        }
        gradesSum += problemGrade;
        problemNum++;
        index += 2;
    }

    let averageGrade = (gradesSum / problemNum).toFixed(2);

    if (badGrades >= badGradesLimit) {
        console.log(`You need a break, ${badGradesLimit} poor grades.`);
    } else {
        console.log(`Average score: ${averageGrade}`);
        console.log(`Number of problems: ${problemNum}`)
        console.log(`Last problem: ${problemName}`)

    }
}

examPreparation(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])
examPreparation(["2",

"Income",

"3",

"Game", "Info",

"6",

"Best", "Player",

"4"])
