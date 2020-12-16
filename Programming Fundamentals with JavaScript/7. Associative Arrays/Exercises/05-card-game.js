function solve(arr) {
    let players = new Map();

    arr.forEach(element => {
        let [player, cards] = element.split(': ');
        cards = cards.split(", ");

        if (!players.has(player)) {
            players.set(player, cards);
        } else {
            players.set(player, players.get(player).concat(cards));
        }

    });

    Array.from(players.entries()).forEach(entry => {
        let hand = new Set(entry[1]);
        let player = entry[0];
        let handSum = 0;

        hand.forEach(card => {
            let power = '';
            let type = '';

            if(card.includes('0')) {
                power = card[0] + card[1];
                type = card[2];
            } else {
                power = card[0];
                type = card[1];
            }
                      
            
            switch (power) {
                case 'J':
                    power = 11;
                    break;
                case 'Q':
                    power = 12;
                    break;
                case 'K':
                    power = 13;
                    break;
                case 'A':
                    power = 14;
                    break;
            }

            switch (type) {
                case 'S':
                    type = 4;
                    break;
                case 'H':
                    type = 3;
                    break;
                case 'D':
                    type = 2;
                    break;
                case 'C':
                    type = 1;
                    break;
            }

            handSum += +power * +type;
        })

        console.log(`${player}: ${handSum}`);
    })
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)