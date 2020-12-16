// function travel(input) {
//     let index = 0;

//     while (index < input.length) {
//         let destination = input[index];
//         let cost = Number(input[index + 1]);
//         let savings = 0;
//         index += 2;

//         while (savings < cost) {
//             savings += Number(input[index])
//             index++
//         }

//         console.log(`Going to ${destination}!`);
//         if (input[index] === 'End') {
//             break;
//         }
        
//     }

// }
// function travel(input) {
//     let index = 0;

//     while (input[index] !== 'End') {
//         let destination = input[index++];
//         let cost = Number(input[index++]);
//         let savings = 0;

//         while (savings < cost) {
//             savings += Number(input[index++])
//         }

//         console.log(`Going to ${destination}!`);        
//     }

// }

function travel(input) {
    let i = 0;
    let command = input[i];
    while (command !== "End") {
        let destination = input[i++];
        let budget = Number(input[i++]);
 
        while (budget > 0) {
            let savings = Number(input[i++]);
            budget -= savings;
        }
        console.log(`Going to ${destination}!`);
        command = input[i];
    }
}
travel(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])

travel(["France",

"2000",

"300",

"300",

"200",

"400",

"190",

"258",

"360",

"Portugal",

"1450",

"400",

"400",

"200",

"300",

"300",

"Egypt",

"1900",

"1000",

"280",

"300",

"500",

"End"])