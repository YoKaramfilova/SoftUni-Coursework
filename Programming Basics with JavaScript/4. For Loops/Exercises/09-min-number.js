// function minNumber(arr) {
//     let n = Number(arr[0]);
//     let minNumber = Number(arr[1]);

//     for (let i = 1; i <= n; i++) {
//         if (Number(arr[i]) < Number(arr[i-1])) {
//             minNumber = Number(arr[i])
//         }
//     }
//     console.log(minNumber);
// }

function minNumber(arr) {
    arr.splice(0, 1);
    console.log(Math.min(...arr));
}

minNumber([4, 45, -20, 7, 99])