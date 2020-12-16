function readText(arr) {
    let index = 0;
    while (true) {
        if (arr[index] !== 'Stop') {
            console.log(arr[index]);
        } else {
            break;
        }
        index++
    }
}
readText((["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"]))