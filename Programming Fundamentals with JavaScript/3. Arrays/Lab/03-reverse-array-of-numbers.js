// function solve(arr) {
//     let newArr = arr.reverse();
//     console.log(newArr.join(" "));
// }

function reverse(elements) {
    for (let i = 0; i < elements.length / 2; i++) {
        swapElements(elements, i, elements.length - 1 - i);
    }

    console.log(elements.join(" "));

    function swapElements(arr, i, j) {
        
    }
}
reverse(2, [66, 43, 75, 89, 47]);