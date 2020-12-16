function solve(arr) {
    let participants = arr.shift().split(', ');
    let participantData = {};
    let index = 0;

    
    while (arr[index] !== 'end of race') {
        let patternName = /[A-Za-z]/g;
        let name = arr[index].match(patternName).join('');
        let patternDistance = /[0-9]/g;
        let distance = arr[index].match(patternDistance).join('');
        let distanceSum = 0;

        for (let i = 0; i < distance.length; i++) {
            let digit = +distance[i];
            distanceSum += digit;
        }
        if (participants.includes(name)){
            if (!participantData.hasOwnProperty(name)) {
                participantData[name] = distanceSum;
            } else {
                participantData[name] += distanceSum;
            }
        }

        index++
    }

    let partsArr = [];

    for (let name in participantData) {
        partsArr.push([name, participantData[name]])
    }

    partsArr.sort((a,b) => b[1]-a[1]);

    console.log(`1st place: ${partsArr[0][0]}`);
    console.log(`2nd place: ${partsArr[1][0]}`);
    console.log(`3rd place: ${partsArr[2][0]}`);
}


solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )