function histogram(arr) {
    let n = arr[0];
    let bellow200 = 0;
    let from200to399 = 0;
    let from400to599 = 0;
    let from600to799 = 0;
    let over800 = 0;
    
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < 200) {
            bellow200 += 1;
        } else if (arr[i] >= 200 && arr[i] < 400) {
            from200to399 += 1;
        } else if (arr[i] >= 400 && arr[i] < 600) {
            from400to599 += 1;
        } else if (arr[i] >= 600 && arr[i] < 800) {
            from600to799 += 1;
        } else if (arr[i] >= 800) {
            over800 += 1;
        }
    }

    let p1 = ((bellow200 / n) * 100).toFixed(2);
    let p2 = ((from200to399 / n) * 100).toFixed(2);
    let p3 = ((from400to599 / n) * 100).toFixed(2);
    let p4 = ((from600to799 / n) * 100).toFixed(2);
    let p5 = ((over800 / n) * 100).toFixed(2);

    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);
}

histogram(["7",

"800",

"801",

"250",

"199",

"399",

"599",

"799"])