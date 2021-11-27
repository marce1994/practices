/// return the first non repatring character in a string ignoring spaces
function firstNonRepeatingLetter(s: string) {
    var str = s.toLowerCase();
    var obj: { [id:string] : number } = {};

    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        }
        else {
            obj[str[i]] = 1;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]] == 1 && str[i] != " ") {
            return str[i];
        }
    }
    return "";
}

// assert two strings are equal
function assertEqual(actual: string, expected: string) {
    if (actual == expected) {
        console.log("passed ->", actual);
    }
    else {
        console.log("failed");
        console.log("expected: " + expected);
        console.log("actual: " + actual);
    }
}

assertEqual(firstNonRepeatingLetter("aabbfgccdd"), "f");
assertEqual(firstNonRepeatingLetter("Hello world hy there"), "w");