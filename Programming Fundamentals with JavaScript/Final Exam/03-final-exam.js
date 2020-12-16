function solve(arr) {
    let count = +(arr.shift());


    for (let i = 0; i < count; i++) {
        let regex = /^(?<tag>(\$([A-Z][a-z]{2,})\$)|(\%[A-Z][a-z]{2,}\%)?): \[(?<num1>[\d]+?)\]\|\[(?<num2>[\d]+?)\]\|\[(?<num3>[\d]+?)\]\|$/;
        
        if (regex.test(arr[i])) {
            let matches = regex.exec(arr[i]);
            let char1 = String.fromCharCode(+matches.groups.num1);
            let char2 = String.fromCharCode(+matches.groups.num2);
            let char3 = String.fromCharCode(+matches.groups.num3);
            let tag = matches.groups.tag;
            tag = tag.substring(1, tag.length - 1);
            let decrypted = char1 + char2 + char3;
            console.log(`${tag}: ${decrypted}`);

        } else {
            console.log(`Valid message not found!`);
        }      
    }
}

solve(['4', '$Request$: [73]|[115]|[105]|', '%Taggy$: [73]|[73]|[73]|', '$Taggy$: [118]|[97]|[108]|', '$Request$: [73]|[115]|[105]|[32]|[75]|']);
solve(['3', 'This shouldnt be valid%Taggy%: [118]|[97]|[105]|', '%tAGged$: [97]|[97]|[97]|', '$Request$: [73]|[115]|[105]|true']);
