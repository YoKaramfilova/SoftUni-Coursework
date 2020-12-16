function solve(input) {
    let index = 0;
    let capacity = Number(input[index++]);
    let suitcasesVolume = 0;
    let suitcasesNum = 0;

    while (input[index] !== "End") {
        let currentSuitcaseVolume = Number(input[index++]);
        suitcasesNum++;
        if (suitcasesNum % 3 == 0) {
            currentSuitcaseVolume *= 1.1;
        }
        suitcasesVolume += currentSuitcaseVolume;

        if (suitcasesVolume > capacity) {
            console.log("No more space!");
            suitcasesNum--;
            break;
        }    
    }

    if (suitcasesVolume <= capacity) {
        console.log("Congratulations! All suitcases are loaded!");
    }

    console.log(`Statistic: ${suitcasesNum} suitcases loaded.`);

}
solve([ '550', '100', '252', '72', 'End' ])
solve([ '700.5', '180', '340.6', '126', '220' ])
solve([ '1200.2', '260', '380.5', '125.6', '305', 'End' ])