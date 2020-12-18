// function solve(n, arr) {
//     let newArr = arr.slice(0, n)
//     let reversed = newArr.reverse();
//     console.log(reversed.join(" "));
// }

function reverse(n, elements) {
    let arr = elements.slice(0, n);

    for (let i = 0; i < arr.length / 2; i++) {
        swapElements(arr, i, arr.length - 1 - i);
    }

    console.log(arr.join(" "));

    function swapElements(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;        
    }
}
reverse(2, [66, 43, 75, 89, 47]);