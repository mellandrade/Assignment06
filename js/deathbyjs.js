/*eslint-env browser*/

//STEP 1
/*
function alpha(word) {
    "use strict";
    return word.split("").sort().join("");
}
window.console.log(alpha("elephant"));
*/

//STEP 2
/*
function hello(str) {
    "use strict";
    var array1 = str.split(" "), newarray1 = [], x;
    for (x = 0; x < array1.length; x += 1) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(" ");
}
window.console.log(hello("hello my friend!"));
*/

//STEP 3
/*
function countVowels(str) {
    "use strict";
    var vowels = 'aeiouAEIOU', vcount = 0, x;
    for (x = 0; x < str.length; x += 1) {
        if (vowels.indexOf(str[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}
window.console.log(countVowels("Hello my friend!"));
*/

//STEP 4
/*
function ranChar(x) {
    "use strict";
    var text = "", i, list = "DjeucibGKLMNO123890";
    for (i = 0; i < x; i += 1) {
        text += list.charAt(Math.floor(Math.random() * list.length));
    }
    return text;
}
window.console.log(ranChar(8));
*/

//STEP 5
/*
function longCountryName(bigcountry) {
    "use strict";
    return bigcountry.reduce(function (longname, country) {
        return longname.length > country.length ? longname : country;
    },
        "");
}
window.console.log(longCountryName(["Yemen", "Turkey", "Uzbekistan", "Spain", "Russia", "Malaysia"]));
*/