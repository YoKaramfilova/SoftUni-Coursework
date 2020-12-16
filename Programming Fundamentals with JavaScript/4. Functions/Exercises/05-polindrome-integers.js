function findPolindromes(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNum = toArray(arr[i]);

        if (arraysEqual(currentNum, mirrorNum(currentNum))) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    function toArray(a) {
        let arr = a.toString().split('');

        return arr;
    }

    function mirrorNum(a) {
        let mirrorArray = [...a].reverse();

        return mirrorArray;        
    }

    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        
        return true;
    }
}

findPolindromes([123,323,421,121]);
findPolindromes([32,2,232,1010]);
