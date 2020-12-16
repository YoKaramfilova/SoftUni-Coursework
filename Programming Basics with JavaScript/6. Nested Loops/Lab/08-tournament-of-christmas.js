function tournament(input) {
    let index = 0;
    let tournamentDays = Number(input[index++]);
    let raisedMoney = 0;
    let daysPlayed = 0;
    let daysWon = 0;
    let daysLost = 0;

    while (daysPlayed < tournamentDays) {
        let dailyMoney = 0;
        let gamesWon = 0;
        let gamesLost = 0;
        while (input[index] !== 'Finish') {
            let result = input[index + 1];
            if (result === 'win') {
                dailyMoney += 20;
                gamesWon++;
            } else if (result === 'lose') {
                gamesLost++;
            }
            index += 2;
        }
        if (gamesWon > gamesLost) {
            dailyMoney += dailyMoney * 0.10;
            daysWon++;
        } else {
            daysLost++;
        }
        raisedMoney += dailyMoney;
        daysPlayed++;
        index++;
    }

    if (daysWon > daysLost) {
        raisedMoney += raisedMoney * 0.20;
        console.log(`You won the tournament! Total raised money: ${raisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${raisedMoney.toFixed(2)}`);
    }
    
}
tournament(['2',
'volleyball',
'win',
'football',
'lose',
'basketball',
'win',
'Finish',
'golf',
'win',
'tennis',
'win',
'badminton',
'win',
'Finish'])
tournament(['2',
'volleyball',
'win',
'football',
'lose',
'basketball',
'win',
'Finish',
'golf',
'win',
'tennis',
'win',
'badminton',
'win',
'Finish'])
tournament([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ])