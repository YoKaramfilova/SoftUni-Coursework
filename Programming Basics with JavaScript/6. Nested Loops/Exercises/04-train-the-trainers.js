function solve(input) {
    let index = 0;
    let jury = Number(input[index++]);
    let allScoresSum = 0;
    let finalScore = 0;
    let presentations = 0;
    while (input[index] !== "Finish") {
        let presenatation = input[index++];
        let juryScoreSum = 0;
        let presentionScore = 0;
        for (let i = 1; i <= jury; i++) {
            let score = Number(input[index++]);
            juryScoreSum += score;
        }
        presentionScore = juryScoreSum / jury;
        console.log(`${presenatation} - ${presentionScore.toFixed(2)}.`);
        allScoresSum += presentionScore;
        presentations++;
    }

    finalScore = (allScoresSum / presentations).toFixed(2);
    console.log(`Student's final assessment is ${finalScore}.`)
}
solve(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])
solve(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])
solve(["2",

"Objects and Classes",

"5.77",

"4.23",

"Dictionaries",

"4.62",

"5.02",

"RegEx",

"2.88",

"3.42",

"Finish"])
