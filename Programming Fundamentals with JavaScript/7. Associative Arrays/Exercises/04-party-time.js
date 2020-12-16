// function solve(arr) {
//     let index = 0;
//     let guests = {};
//     let vip = {};

//     while (arr[index] !== "PARTY") {
//         if (typeof arr[index][0] === 'number') {
//             vip[arr[index]] = 1;
//         } else {
//             guests[arr[index]] = 1;
//         }        
//         index++;
//     }

//     arr.splice(0, index + 1);

//     arr.forEach(element => {
//         if (guests.hasOwnProperty(element)) {
//             delete guests[element];
//         }

//         if (vip.hasOwnProperty(element)) {
//             delete vip[element];
//         }

//     });

//     let allGuests = {...vip, ...guests};

//     console.log(Object.keys(allGuests).length);
    
//     for (let key in allGuests) {
//         console.log(key);
//     }
// }

function solve(arr) {
    let guestList = arr.slice(0, arr.indexOf('PARTY'));
    let incoming = arr.slice(arr.indexOf('PARTY') + 1, arr.length);
    let vip = [];
    let ordinary = [];
    let allGuests = [];

    for (let guest of guestList) {
        if (!isNaN(guest[0])) {
            vip.push(guest);
        } else {
            ordinary.push(guest);
        }
    }

    allGuests = vip.concat(ordinary);

    incoming.forEach(guest => {
        if(incoming.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }) 

    console.log(allGuests.length);

    allGuests.forEach(guest => console.log(guest));
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']
);
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);
