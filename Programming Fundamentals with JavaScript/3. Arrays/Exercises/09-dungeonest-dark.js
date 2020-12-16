function solve(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split('|');
    let hasWon = true;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(' ');
        let item = currentRoom[0];
        let num = +currentRoom[1];

        if (item === "potion") {
            health += num;
            
            if (health <= 100) {
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                num = num - (health - 100);
                health = 100;
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (item === "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;

            if (health > 0) {
                console.log(`You slayed ${item}.`);

            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                hasWon = false;
                break;
            }
        }
    }

    if (hasWon === true) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

// ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]	You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 coins.
// You died! Killed by boss.
// Best room: 6
// ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]	You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 coins.
// You slayed snake.
// You found 110 coins.
// You've made it!
// Coins: 120
// Health: 65
