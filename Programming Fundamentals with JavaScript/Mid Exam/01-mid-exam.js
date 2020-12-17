function solve(arr) { 
    let cost = +arr[0];
    let months = +arr[1];
    let savings = 0;

    for (let i = 1; i <= months; i++) {
        if (i !== 1 && i % 2 !== 0) {
            savings -= savings * 0.16;
        }

        if (i % 4 === 0) {
            savings += savings * 0.25;
        }

        savings += cost * 0.25;

    }

    if (savings >= cost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savings - cost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(cost - savings).toFixed(2)}lv. more.`);
    }

}

solve((["1000",
"4"]));
solve((["3265",
"3"]));