// jsnacks ES 1 
/*
const team = [{
        name: "Cosmin"
    },
    {
        name: "Iris"
    },
    {
        name: "Angelo"
    },
    {
        name: "Vincenzo"
    },
    {
        name: "Pino"
    }
];

for (const player of team) {
    player.code = codeGenerator();
    player.media = getRandomNumber(0, 50);
    player.perc = getRandomNumber(0, 100);
}

console.log(team);

function codeGenerator() {
    let code = "";
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    while (code.length < 3) {
        code += alfabeto[getRandomNumber(0, alfabeto.length - 1)];
    }

    code += getRandomNumber(100, 999);
    return code;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
*/



// jsnacks ES 2
/*
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];
const min = parseInt(prompt("inserisci un numero compreso fra 0 a " + (alfabeto.length - 2)));
const max = parseInt(prompt("inserisci un numero compreso fra " + " è " + (alfabeto.length - 1)));

console.log(filterArray(alfabeto, min, max));

function filterArray(arr, min, max) {
    const arrReturn = [];

    for (const i in alfabeto) {
        if (i >= min && i <= max) {
            arrReturn.push(arr[i]);
        }
    }

    return arrReturn;
}
*/



// jsnacks ES 3
/*
const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const minor = arr1;
const major = arr2;
if (arr1.length > arr2.length) {
    minor = arr2;
    major = arr1;
}

if (arr1.length === arr2.length) {
    console.log("sono uguali");
} else {
    while (minor.length < major.length) {
        minor.push(codeGenerator());
    }
}

console.log(minor);
console.log(arr1.length);
console.log(arr2.length);

function codeGenerator() {
    let code = "";
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    while (code.length < 3) {
        code += alfabeto[getRandomNumber(0, alfabeto.length - 1)];
    }

    code += getRandomNumber(100, 999);
    return code;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
*/