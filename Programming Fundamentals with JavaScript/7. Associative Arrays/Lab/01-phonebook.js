function solve(arr) {
    let assocArray = {};

    arr.forEach(element => {
        let [name, number] = element.split(' ');
        assocArray[name] = number;
    });

    for (let key in assocArray) {
        console.log(`${key} -> ${assocArray[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);