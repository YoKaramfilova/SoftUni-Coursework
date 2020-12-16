function solve(arr) {
    let companies = {};

    arr.forEach(element => {
        let [company, employee] = element.split(' -> ');

        if(!companies.hasOwnProperty(company)) {
            companies[company] = [];
            companies[company].push(employee);
        } else {
            companies[company].push(employee);
        }
        
    });

    Object.entries(companies)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(entry => {
        console.log(entry[0]);

        let uniqueEmployees = new Set(entry[1]);

        uniqueEmployees.forEach(employee => {
            console.log(`-- ${employee}`);
        })
    });
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );