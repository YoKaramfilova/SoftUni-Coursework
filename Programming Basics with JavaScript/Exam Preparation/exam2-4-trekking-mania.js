function solve(input) {
    let groups = Number(input[0]);
    let allClimbers = 0;
    let musalaClimbers = 0;
    let montBlancClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    for (let i = 1; i <= groups; i++) {
        let currentGroup = Number(input[i]);
        if (currentGroup <= 5) {
            musalaClimbers += currentGroup;
        } else if (currentGroup > 5 && currentGroup <= 12) {
            montBlancClimbers += currentGroup;
        } else if (currentGroup > 12 && currentGroup <= 25) {
            kilimanjaroClimbers += currentGroup;
        } else if (currentGroup > 25 && currentGroup <= 40) {
            k2Climbers += currentGroup;
        } else if (currentGroup > 40) {
            everestClimbers += currentGroup;
        } 
        allClimbers += currentGroup;
    }

    let musalaPercentage = (musalaClimbers / allClimbers) * 100;
    let montBlancPercentage = (montBlancClimbers / allClimbers) * 100;
    let kilimanjaroPercentage = (kilimanjaroClimbers / allClimbers) * 100;
    let k2Percentage = (k2Climbers / allClimbers) * 100;
    let everestPercentage = (everestClimbers / allClimbers) * 100;

    console.log(`${(musalaPercentage).toFixed(2)}%`);
    console.log(`${(montBlancPercentage).toFixed(2)}%`);
    console.log(`${(kilimanjaroPercentage).toFixed(2)}%`);
    console.log(`${(k2Percentage).toFixed(2)}%`);
    console.log(`${(everestPercentage).toFixed(2)}%`);
}
solve(
    [
        '10', '10',  '5',
        '1',  '100', '12',
        '26', '17',  '37',
        '40', '78'
      ]
)
solve(
    [ '5', '25', '41', '31', '250', '6' ]
)