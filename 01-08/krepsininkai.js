let krepsininkai = [23, 9, 11, 57, 69];
let ugiai = [211, 195, 199, 215, 191];
let dvitaskiai = [15, 20, 98, 14, 48];
let tritaskiai = [2, 5, 6, 1, 2];

// Raskite vidutinį krepšininkų ūgį? ATS.: 202.2

let sum = 0;
for ( let i = 0; i < ugiai.length; i++) {
    sum += ugiai[i];
}
let average = sum / ugiai.length;

console.log(average)

// Raskite kiek krepšininkų yra didesnių už vidutinį krepšininkų ūgį? ATS.: 2
let count = 0;
for (i = 0; i < ugiai.length; i++) {
    if (ugiai[i] > average) {
        count++;
    }
}
console.log(count);

// Raskite aukščiausio krepšininko dvitaškių skaičių? ATS.: 14

let maxPlayer = ugiai[0];
let dvitaskiuSkaicius = 0;

for (let i = 0; i < ugiai.length; i++) {
    if (ugiai[i] > maxPlayer) {
        maxPlayer = ugiai[i];
        dvitaskiuSkaicius = i;
    }
}
console.log(dvitaskiai[dvitaskiuSkaicius]);

// Raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr.? ATS.: 2 ir 69

let minPlayer = ugiai[0];
let tritaskiuSkaicius = 0;
let marskineliuNr = 0;

for (i = 0; i <= ugiai.length; i++) {
    if (ugiai[i] < minPlayer) {
        minPlayer = ugiai[i];
        tritaskiuSkaicius = i;
        marskineliuNr = i;
    }
}
console.log(`Tritaskiu skaicius: ${tritaskiai[tritaskiuSkaicius]}, Marskineliu nr: ${krepsininkai[marskineliuNr]}`)
