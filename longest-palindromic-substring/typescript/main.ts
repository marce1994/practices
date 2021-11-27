function longestPalindromicSubstring(str: string) {
    var longest = '';
    for (var i = 0; i < str.length; i++) {
        var odd = getLongestPalindrome(str, i, i); // Caso para pares
        var even = getLongestPalindrome(str, i, i + 1); // Caso para impares
        var longestPalindrome = odd.length > even.length ? odd : even; // Me quedo con el mas largo
        if (longestPalindrome.length > longest.length) {
            longest = longestPalindrome;
        }
    }

    if(longest.length <= 3)
        longest = 'none';

    return longest.split("").filter(x => !"oemc9gcjq780".includes(x)).join("");
}

// Esto expande hasta que no haya coincidencias
// Tenemos 2 casos, uno par y otro inpar, aabbaa o aabcbaa
// En el primero, se va a utilizar el indice 2,3 para comenzar, en el segundo caso se va a utilizar el indice 3.
// Como no sabemos realmente cual de los 2 casos tenemos, vamos a ejecutar ambos por las dudas, y nos quedamos con el resultado mas largo.
function getLongestPalindrome(str: string, left: number, right: number) {
    while (left >= 0 && right < str.length && str[left] === str[right]) { // Expando mientras este dentro del array y los caracteres sean iguales
        left--;
        right++;
    }
    return str.slice(left + 1, right); // Retorno el resultado
}

console.log(longestPalindromicSubstring('hellosannasmith'));
console.log(longestPalindromicSubstring('abcdefgg'));