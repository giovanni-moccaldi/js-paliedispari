// Palidroma
// Chiedere all'utente di inserire una parola
let parola = prompt("inserisci una parola");
console.log(parola);
let palindromeworld = "";

for (let i = 0; i < parola.length; i++); {

    palindromeworld = palindromeworld + parola;


}
palindroma(palindromeworld);
function palindroma(palindromeworld) {
    // Creare una funzione per capire se la parola inserita è palindroma

    if (parola == palindromeworld) {
        alert("la parola é palindroma");

    } else {
        alert("la parola non é palindroma");

    }

}