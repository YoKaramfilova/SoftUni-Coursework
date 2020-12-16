function solve(arr) {
    let countries = {};

    arr.forEach(element => {
        let [country, city, cost] = element.split(' > ');

        if(!countries.hasOwnProperty(country)) {
            countries[country] = {
                [city]: cost,
            };
        } else if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = cost;
        } else if (countries[country].hasOwnProperty(city)) {
            let previousCost = countries[country][city];
            let newCost = Math.min(previousCost, cost);
            countries[country][city] = newCost;
        }
        
    });

    Object.entries(countries)
    .sort((a, b) => {
        let pricesA = Object.values(a[1]).reduce((a, b) => a + b);
        let pricesB = Object.values(b[1]).reduce((a, b) => a + b);

        return a[0].localeCompare(b[0]) || pricesA - pricesB;

    }).forEach(country => {
        let line = country[0] + " -> ";
        let cities = Object.entries(country[1]);

        cities.forEach(city => {
            line += city[0] + " -> " + city[1] + " ";
        })

        console.log(line.trim());
    });
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );