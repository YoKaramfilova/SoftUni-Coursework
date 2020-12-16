function vacation(input) {
    let vacationBudget = Number(input[0]);
    let savings = Number(input[1]);
    let index = 2;
    let action = '';
    let sum = 0;
    let days = 0;
    let spendDays = 0;

    while (vacationBudget > savings) {
        action = input[index];
        sum = Number(input[index + 1]);
        days++;
        if (action === 'spend') {
            savings -= sum;
            if (savings < 0) {
                savings = 0;
            }
            spendDays++;
            if (spendDays == 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
        } else if (action === 'save') {
            savings += sum;
            spendDays = 0;
        }
        index += 2;
    }

    if (savings >= vacationBudget) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["2000",

"1000",

"spend",

"1200",

"save",

"2000"])
vacation(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10"])
vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])