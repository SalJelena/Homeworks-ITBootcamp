// /**
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */




////// resenje 



let longestPalindrome = function(corde) {
    let len = corde.length;
    while (len>0) {
        for (let i=0; i<corde.length-len+1; i++) {
            let str = corde.slice(i, i+len);
            if (isWordPalindrom(str))
                return str;
        }
        len--;
    }
    return "";
}

const isWordPalindrom = function(chaine) {
    let i=0;
    let j=chaine.length-1;
    while (i<=j) {
        if (chaine[i]!==chaine[j])
            return false;
        i++; j--;
    }
    return true;
}



console.log(longestPalindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'))


