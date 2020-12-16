function solve(search, inputSentance) {
    let sentance = inputSentance.toLowerCase().split(' ');
    let isFound = false;

    for (let i = 0; i < sentance.length; i++) {
        if (sentance[i] === search.toLowerCase()) {
            console.log(search);
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log(`${search} not found`);
    }

}

solve('javascript',
'JavaScript is the best programming language');
solve('python',
'JavaScript is the best programming language');