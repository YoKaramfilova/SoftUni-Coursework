function waterTank(length, width, height, sandPercent) {
    let waterTankSize = Number(length) * Number(width) * Number(height);
    let waterTankVolume = waterTankSize * 0.001;
    let waterVolume = waterTankVolume * (1 - (Number(sandPercent)/100));
    console.log(waterVolume);
}
waterTank('85', '75', '47', '17');