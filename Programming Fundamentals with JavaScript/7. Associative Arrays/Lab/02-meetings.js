function solve(arr) {
    let meetings = {};
    arr.forEach(element => {
        let [day, person] = element.split(' ');
        if(meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetings[day] = person;
        }
    })

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);