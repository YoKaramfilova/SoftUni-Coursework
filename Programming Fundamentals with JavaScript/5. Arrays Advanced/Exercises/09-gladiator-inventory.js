function solve(arr) {
    let equipment = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let commandAction = command[0];
        let upgradeCommand = [];
        let item = '';
        let upgrade = '';
        
        if (command[1].includes('-')) {
            upgradeCommand = command[1].split('-');
            item = upgradeCommand[0];
            upgrade = upgradeCommand[1];
        } else {
            item = command[1];
        }

        if (commandAction === "Buy" && !equipment.includes(item)) {
            equipment.push(item);
        } else if (commandAction === "Trash" && equipment.includes(item)) {
            equipment.splice(equipment.indexOf(item), 1);
        } else if (commandAction === "Repair" && equipment.includes(item)) {
            equipment.splice(equipment.indexOf(item), 1);
            equipment.push(item);
        } else if (commandAction === "Upgrade" && equipment.includes(item)) {
            let itemPlusUpgrade = item + ":" + upgrade;
            equipment.splice(equipment.indexOf(item) + 1, 0, itemPlusUpgrade);
        }
    }

    console.log(equipment.join(' '));

}

solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);
solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);