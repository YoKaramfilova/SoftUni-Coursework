// function graduation(input) {
//     let name = input[0];
//     let index = 0;
//     let grade = 1;
//     let excluded = 0;
//     let gradesSum = 0;
//     while (grade < 12) {
//         index++;
//         if (Number(input[index]) <= 4) {
//             excluded++;
//             if (excluded > 1) {
//                 break;
//             }
//         }
//         if (grade > 12) {
//             break;
//         }
//         gradesSum += Number(input[index]); 
//         grade++;
         
//     }

//     let averageGrade = (gradesSum / 12).toFixed(2);

//     if (grade == 12) {
//         console.log(`${name} graduated. Average grade: ${averageGrade}`);
//     } else {
//         console.log(`${name} has been excluded at ${grade - 1} grade`);
//     }

// }

// function graduation(input) {
//     let name = input[0];
//     let index = 0;
//     let grade = 1;
//     let gradesSum = 0;
//     let excluded = 0;
//     while (grade < 12) {
//         index++; 
//         gradesSum += Number(input[index]);
//         if (Number(input[index]) <= 4) {
//             excluded++;
//             if (excluded > 1) {
//                 break;
//             }
//         }
//         grade++;
               
//     }

//     let averageGrade = (gradesSum / 12).toFixed(2);

//     if (grade == 12) {
//         console.log(`${name} graduated. Average grade: ${averageGrade}`);
//     } else {
//         console.log(`${name} has been excluded at ${grade} grade`);
//     }

// }

function graduation(input) {
    let name = input[0];
    let grade = 1;
    let total = 0;
    let grades = 0;
    let torn = false;
    let index = 1;

    while (index < input.length) {
        let ocenka = Number(input[index])

        if (ocenka < 4) {
            if (torn == true){
                break;
            } else {
                torn = true;
            }
        } else {
          torn = false;
          grade += 1;

          total += ocenka;
          grades += 1;
        }
        index += 1;
    }

    if (torn) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(total / grades).toFixed(2)}`)
    }
}



graduation(["Gosho", 

"5",

"5.5",

"6",

"5.43",

"5.5",

"6",

"5.55",

"5",

"6",

"6",

"5.43",

"5"])


graduation(["Mimi", 

"5",

"6",

"5",

"6",

"5",

"6",

"6",

"2",

"3"])