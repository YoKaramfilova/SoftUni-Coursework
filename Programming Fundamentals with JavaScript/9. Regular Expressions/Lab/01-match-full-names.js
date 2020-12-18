// function solve(input) {
//     let names = input.split(', ');
//     let regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/g;
//     let validNames = [];

//     for (let name of names) {
//         if (regex.test(name)) {
//             validNames.push(name);
//         }
//     }
    
//     console.log(validNames.join(' '));

// }

function solve(names) {
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;

    while ((validName = regex.exec(names)) !== null) {
        validNames.push(validName[0]);
    }
    
    console.log(validNames.join(' '));

}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")