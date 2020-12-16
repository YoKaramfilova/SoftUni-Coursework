function solve(city) {
    // let entries = Object.entries(city);

    // for ( let [key, value] of entries) {
    //     console.log(`${key} -> ${value}`)
    // }

    for (let key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }

}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);