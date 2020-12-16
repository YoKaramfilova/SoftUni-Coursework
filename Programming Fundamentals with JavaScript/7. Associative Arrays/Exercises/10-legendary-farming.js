function solve(input) {
    let arr = input.split(' ');
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    let junk = {};

    for (let i = 0; i < arr.length; i += 2) {
        let quantity = +arr[i];
        let item = arr[i + 1].toLowerCase();

        if (keyMaterials.hasOwnProperty(item)) {
            keyMaterials[item] += quantity;
            if (keyMaterials[item] >= 250) {
                switch (item) {
                    case 'shards':
                        console.log('Shadowmourne obtained!');
                        break;
                    case 'fragments':
                        console.log('Valanyr obtained!');
                        break;
                    case 'motes':
                        console.log('Dragonwrath obtained!');
                        break;
                }
                keyMaterials[item] -= 250;
                break;
            }
        } else {
            if (!junk.hasOwnProperty(item)) {
                junk[item] = quantity;
            } else {
                junk[item] += quantity;
            }
        }
    }

    Object.entries(keyMaterials)
        .sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        })
        .forEach(entry => {
            console.log(`${entry[0]}: ${entry[1]}`);
        });

    Object.entries(junk)
        .sort((a, b) => {
            return a[0].localeCompare(b[0]);
        })
        .forEach(entry => {
            console.log(`${entry[0]}: ${entry[1]}`);
        });
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');