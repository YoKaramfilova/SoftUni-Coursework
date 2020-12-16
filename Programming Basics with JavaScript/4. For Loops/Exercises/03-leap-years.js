function solve(leapYear, finalYear) {
    leapYear = Number(leapYear);
    finalYear = Number(finalYear);
    for (let i = leapYear; i <= finalYear; i += 4) {
        console.log(i);
    }
}
solve('1908','1919')