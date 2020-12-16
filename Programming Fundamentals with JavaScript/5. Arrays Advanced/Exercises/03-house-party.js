function solve(arr) {
    let guests = [];
    for (let i = 0; i < arr.length; i++) {
        let status = arr[i].split(' ');
        let name = status[0];
        let isComming = !status.includes('not')

        if (!isComming) {
            if (guests.includes(name)) {
                guests.splice(guests.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        }

    }

    for (let j = 0; j < guests.length; j++) {
        console.log(guests[j]);
    }

}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);