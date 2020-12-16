function cinemaTickets(input) {
    let index = 0;
    let kid = 0;
    let student = 0;
    let standard = 0;

    while (input[index] !== 'Finish') {
        let movie = input[index];
        let spaces = Number(input[index + 1]);
        let takenSpaces = 0;
        while (input[index] !== 'End' && takenSpaces < spaces) {
            if (input[index] == 'kid') {
                kid++
                takenSpaces++
            } else if(input[index] == 'student') {
                student++
                takenSpaces++
            } else if(input[index] == 'standard') {
                standard++
                takenSpaces++
            } 
            index++;
        }
        let percentageFull = ((takenSpaces / spaces) * 100).toFixed(2);
        console.log(`${movie} - ${percentageFull}% full.`);
        if (input[index] === 'Finish') {
            break;
        }
        if (input[index] === 'End') {
            index++;
        } 
        

    }

    let totalTickets = kid + student + standard;
    let percentageKids = ((kid / totalTickets) * 100).toFixed(2);
    let percentageStudent = ((student / totalTickets) * 100).toFixed(2);
    let percentageStandard = ((standard / totalTickets) * 100).toFixed(2);

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudent}% student tickets.`);
    console.log(`${percentageStandard}% standard tickets.`);
    console.log(`${percentageKids}% kids tickets.`);
}
cinemaTickets(["Taxi",

"10",

"standard",

"kid",

"student",

"student",

"standard",

"standard",

"End",

"Scary Movie",

"6",

"student",

"student",

"student",

"student",

"student",

"student",

"Finish"])
cinemaTickets(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])
cinemaTickets(["The Matrix",

"3",

"student",

"standard",

"kid",

"The Green Mile",

"3",

"student",

"standard",

"standard",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])
