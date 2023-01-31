// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let number = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("io ho fatto" + number);
let computer = parseInt(Math.floor(Math.random() * 5)) + 1;
console.log("il computer ha fatto" + computer);

randomnumber();
somma();


// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomnumber() {
    let computer = parseInt(Math.floor(Math.random() * 5)) + 1;


}
// // Sommiamo i due numeri
function somma() {
    let addizzione = number + computer;
    console.log(addizzione);
}
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pari() {
    if (addizzione % 2 == 0) {
        alert("é pari")
    } else {
        alert("édispari")
    }
}
// Dichiariamo chi ha vinto.
