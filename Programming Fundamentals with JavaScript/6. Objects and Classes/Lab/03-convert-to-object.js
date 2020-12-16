function solve(json) {
    let obj = JSON.parse(json);

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');