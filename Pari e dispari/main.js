/*
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
1)mettiamo il prompt per inserire un numero da 1 a 5 e un altro per pari o dispari, se il dato inserito non è nel range chiediamo di nuovo il prompt
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
2) usando una funzione generiamo un numero da 1 a 5 
Sommiamo i due numeri
3) si fa la somma
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
4) usando una funzione stabiliamo se la somma dei numeri è pari o dispari 
Dichiariamo chi ha vinto.
Esempio:
1. Utente scrive in prompt pari
2. Utente scrive in prompt il numero da 1 a 5 ---> 4
3. Generiamo il numero random ----> 3
4. Calcoliamo la somma di due numeri: 4 + 3 = 7
5. 7 è dispari
6. utente ha scelto pari, il risultato è dispari, allora utente ha perso.*/


const userOddEven = prompt('scrivi pari o dispari')

const userNumString = prompt('scrivi un numero da 1 a 5')
const userNum = parseInt(userNumString)
const rndNumber = getRndInteger(1,5)
const sum = userNum + rndNumber
const oddEven = isOddEven(sum)
//funzione per generare il numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//funzione per capire se il numero è pari o dispari
function isOddEven(num1){
    if (num1%2 ===0) {
        return 'pari'
    }
    else {
        return 'dispari'
    }

}


if (userOddEven===oddEven) {
    alert('hai vinto')
}
else {
    alert('hai perso')
}