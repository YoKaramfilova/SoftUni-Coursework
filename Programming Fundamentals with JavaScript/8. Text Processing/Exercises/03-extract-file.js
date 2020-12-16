function solve(input) {
    let fileName = input.substring(input.lastIndexOf('\\') + 1, input.lastIndexOf('.'));
    let extension = input.substring(input.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')