function solve(arr) {
    
    class Employee {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }

    arr = arr.map(x => new Employee(x)).forEach(x => x.print());

    // let employees = [];

    // arr.forEach(element => {
    //     let person = {
    //         name: element,
    //         number: element.length
    //     }

    //     employees.push(person);        
    // });

    // employees.forEach(obj => {
    //     console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`)
    // })
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
