function metricsConvertor(num, metric1, metric2) {
    let result = 0;
    if (metric1 === "mm") {
        result = num / 1000;
    } else if (metric1 === "cm") {
        result = num / 100;
    } else if (metric1 === "m") {
        result = num;
    }

    if (metric2 === "mm") {
        result = result * 1000;
    } else if (metric2 === "cm") {
        result = result * 100;
    }

    console.log(result.toFixed(3));
}
metricsConvertor("12", "mm", "m")
