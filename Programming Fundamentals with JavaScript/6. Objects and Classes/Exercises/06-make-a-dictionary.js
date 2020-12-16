function solve(arr) {
    // let dictionary = {};
    //     arr.forEach(element => {
    //         let termObject = JSON.parse(element);
    //         let tuple = Object.entries(termObject);
    //         let term = tuple[0][0];
    //         let definition = tuple[0][1];
    //         dictionary[term] = definition;
    //     })

    //    Object.entries(dictionary)
    //    .sort((a, b) => a[0].localeCompare(b[0]))
    //    .forEach(entry =>
    //     console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`)
    //     )

    let arrObjects = [];
    arr.forEach(element => {
        element = JSON.parse(element);
        arrObjects.push(element);
    })

    let dictionary = Object.assign({}, ...arrObjects);

    Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(entry =>
            console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`)
        )
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Tape":"testsettsyasdhcsdhknbsdlbnfflgs fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);