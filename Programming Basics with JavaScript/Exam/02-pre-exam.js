function solve(intelect, strength, gender) {
    intelect = Number(intelect);
    strength = Number(strength);
    if (intelect >= 80) {
        if (strength >= 80 && gender === "female") {
            console.log("Queen Bee");
        } else {
            console.log("Repairing Bee");
        }
    } else if (intelect >= 60) {
        console.log("Cleaning Bee");
    } else {
        if (strength >= 80 && gender === "male") {
            console.log("Drone Bee");
        } else if (strength >= 60) {
            console.log("Guard Bee");
        } else {
            console.log("Worker Bee");
        }
    }

}
solve(90, 65, "male")
solve(82, 81, "female")