function solve(arr) {
    let a = arr[0].concat(arr[1]).toLowerCase().split('');
    let b = arr[2].toUpperCase()
    b = b.padEnd(a.length, b).split('');

    for (let i = 0; i < a.length; i++) {
        if (['a', 'o', 'e', 'u', 'i'].includes(a[i])) {
            let replacement = b.shift();
            a.splice(i, 1, replacement);
        }
    }
    console.log(`Your generated password is ${a.reverse().join('')}`);

}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);
solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]);

solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]);