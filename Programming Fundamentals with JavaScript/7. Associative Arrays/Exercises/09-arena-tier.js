function solve(arr) {
    let arena = {};
    let index = 0;

    while (arr[index] !== 'Ave Cesar') {
        if (arr[index].includes('->')) {
            let [gladiator, technique, skill] = arr[index].split(' -> ');

            if (!arena.hasOwnProperty(gladiator)) {
                arena[gladiator] = {};
            }

            if (!arena[gladiator].hasOwnProperty(technique)) {
                arena[gladiator][technique] = +skill;
            } else if (arena[gladiator].hasOwnProperty(technique)) {
                let currentSkill = arena[gladiator][technique];
                let newSkill = Math.max(currentSkill, skill);
                arena[gladiator][technique] = newSkill;
            }
        }

        if (arr[index].includes(' vs ')) {
            let [gladiator1, gladiator2] = arr[index].split(' vs ');

            if (arena.hasOwnProperty(gladiator1) && arena.hasOwnProperty(gladiator2)) {
                let gladiator1Techniques = Object.keys(arena[gladiator1]);
                let gladiator2Techniques = Object.keys(arena[gladiator2]);

                if (gladiator1Techniques.some(element => gladiator2Techniques.includes(element))) {
                    let commonTechniques = gladiator1Techniques.filter(element => gladiator2Techniques.includes(element));

                    for (let i = 0; i < commonTechniques.length; i++) {
                        let battleTechnique = commonTechniques[i];

                        let gladiator1Skill = arena[gladiator1][battleTechnique];
                        let gladiator2Skill = arena[gladiator2][battleTechnique];

                        if (gladiator1Skill > gladiator2Skill) {
                            delete arena[gladiator2];
                            break;
                        } else if (gladiator1Skill < gladiator2Skill) {
                            delete arena[gladiator1];
                            break;
                        }
                    }
                }
            }

        }
        index++;
    }


    Object.entries(arena)
        .sort((a, b) => {
            let aSkill = Object.values(a[1]).reduce((a, b) => a + b);
            let bSkill = Object.values(b[1]).reduce((a, b) => a + b);

            return bSkill - aSkill || a[0].localeCompare(b[0]);

        })
        .forEach(gladiator => {
            let skills = Object.entries(gladiator[1]);

            skills.sort((a, b) => {
                let aSkill = a[1];
                let bSkill = b[1];

                return bSkill - aSkill || a[0].localeCompare(b[0]);
            })

            let totalSkill = 0;

            skills.forEach(skill => {
                totalSkill += skill[1];
            })

            console.log(`${gladiator[0]}: ${totalSkill} skill`);

            skills.forEach(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));
        });

}



solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
);

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Julius -> Heal -> 150',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
);