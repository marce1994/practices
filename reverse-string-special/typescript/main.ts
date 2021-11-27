function revert(str: string) {
    let strArray = str.split("");
    let res: string[] = [];
    let revertIndex = strArray.length - 1;

    for(let i = 0; i < strArray.length; i++) {
        if(!isLetter(strArray[i])) {
            res.push(strArray[i]);
            continue;
        }

        while(!isLetter(str[revertIndex]))
            revertIndex--;
            
        res.push(str[revertIndex]);
        revertIndex--;
    }
    
    return res.join("");
}

function isLetter(str: string) : boolean {
    let regex = /[a-zA-Z]/;
    return regex.test(str);
}

let test = "asd-tsd";
console.log(revert(test));

test = "sarasa-$othersarasa-fa55";
console.log(revert(test));