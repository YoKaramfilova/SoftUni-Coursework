function solve(word, char, template) {
    let result = word.replace("_", char);

    result === template ? console.log("Matched") : console.log("Not matched")

}
solve("Str_ng", "i", "String");
solve("Str_ng", "I", "String");