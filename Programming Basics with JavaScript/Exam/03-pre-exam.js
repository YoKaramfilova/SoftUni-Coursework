function solve(flower, count, season) {
    count = Number(count);
    let flowerHarvest = 0;

    switch (flower) {
        case "Sunflower":
            if (season === "Spring") {
                flowerHarvest = 10;
            } else if (season === "Summer") {
                flowerHarvest = 8;
            } else if (season === "Autumn") {
                flowerHarvest = 12;
            }
        break;
        case "Daisy":
            if (season === "Spring") {
                flowerHarvest = 12;
            } else if (season === "Summer") {
                flowerHarvest = 8;
            } else if (season === "Autumn") {
                flowerHarvest = 6;
            }
        break;
        case "Lavender":
            if (season === "Spring") {
                flowerHarvest = 12;
            } else if (season === "Summer") {
                flowerHarvest = 8;
            } else if (season === "Autumn") {
                flowerHarvest = 6;
            }
        break;
        case "Mint":
            if (season === "Spring") {
                flowerHarvest = 10;
            } else if (season === "Summer") {
                flowerHarvest = 12;
            } else if (season === "Autumn") {
                flowerHarvest = 6;
            }
        break;

    }

    if (season === "Spring") {
        if (flower === "Daisy" || flower === "Mint"){
        flowerHarvest = flowerHarvest * 1.1;
    }
    }

    let totalHarvest = count * flowerHarvest; 

    let harvestWithBonuses = 0; 

    if (season === "Summer") {
        harvestWithBonuses = totalHarvest * 1.1;
    } else if (season === "Autumn") {
        harvestWithBonuses = totalHarvest * 0.95;
    } else {
        harvestWithBonuses = totalHarvest;
    }

    console.log(`Total honey harvested: ${harvestWithBonuses.toFixed(2)}`)
}
solve("Sunflower",11,"Autumn")
solve("Daisy",15,"Spring")