// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let number = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(number);

randomnumber();

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomnumber() {
    const mypc = Math.floor(Math.random() * 5) + 1;
    console.log(mypc);

}
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.