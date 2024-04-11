// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");
/**
 * Convert the text in Camelcase.
 * @param {string} a - enter the texte to convert
 * @returns {string} - text transform in camelcase
 */
function strCamelCase(a) {
    var b = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^A-Za-z0-9]/g);
    b.forEach(function (c, d) {
        b[d] = c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
    });
    return b.join('');
}
console.log(strCamelCase("Ceci est un texte"));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");
/**
 * return the the biggest word in a string text
 * @param {string} text - the text
 * @returns {string} - the biggest word
 */
function returnMostWordOfText(text) {
    const words = text.split(" ");
    let mostWord = "";
    for (let word of words) {
        if (word.length > mostWord.length) {
            mostWord = word;
        }
    }
    return mostWord;
}
console.log(returnMostWordOfText("ceci est un super texte tres grand, ceci est anticonstitutionnel"));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");

console.log();

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");
/**
 * Get list of name in array
 * @param {string} sortedPlayers 
 * @returns {string} - list of name
 */
function formatPlayersName(sortedPlayers){
    return sortedPlayers.join(", ");
}
const sortedPlayers = [
    "José", "René", "Josette", "Monique", "Ginette"
];

const formattedNames = formatPlayersName(sortedPlayers);
console.log(formattedNames);//?????????????

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");
/**
 * Get the number of letters and get the occurence of letters.
 * @param {string} txt - add texte
 * @returns {*} - number of letters and get the occurence of letters
 */
function countRepeatedOccurenceOfWords(txt) {
    let words = {};
    for (const word of txt.split('')) {
        if (words[word] === undefined) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }
    return words;
}

console.log(countRepeatedOccurenceOfWords("Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot"));

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");
/**
 * Get the max value in array list
 * @param {number} array - array numbre list
 * @returns {number}- list of array max value
 */
function getHighestValues(array) {
    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray;
}
const arrayMAx = [23, 54, 87, 54, 98];

console.log(getHighestValues(arrayMAx));

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players  = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

function sortPlayersByScore(players) {
    const playerEntries = Object.entries(players);
    const sortedPlayers = playerEntries.sort((a, b) => b[1] - a[1]);
    const sortedNames = sortedPlayers.map(player => player[0]);
    return sortedNames;
}

console.log(sortPlayersByScore(players));

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();