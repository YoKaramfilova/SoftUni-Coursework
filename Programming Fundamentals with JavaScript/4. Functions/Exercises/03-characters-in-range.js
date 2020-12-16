function charactersInRange(a, b) {
    let charCodeA = a.charCodeAt(0);
    let charCodeB = b.charCodeAt(0);

    let characters = charactersFromNumbers(createNumbersRange(charCodeA, charCodeB)).join(' ');

    function createNumbersRange(a, b) {
        let start = Math.min(a, b) + 1;
        let end = Math.max(a, b);
        let arr = [];

        for (let i = start; i < end; i++) {
            arr.push(i);
        }

        return arr;
    }

    function charactersFromNumbers(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = String.fromCharCode(arr[i]);
        }

        return arr;
    }

    console.log(characters);
}

charactersInRange('C',
'#'
);
charactersInRange('#',
':'
);
charactersInRange('a',
'd'
);
