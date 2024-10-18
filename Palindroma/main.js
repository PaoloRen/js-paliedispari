//**Palindroma**
//Chiedere all’utente di inserire una parola
//mettiamo un prompt per ricevere la parola dall utente
const userWord = prompt()

//Creare una funzione per capire se la parola inserita è palindroma.
//prendiamo la parola e la salviamo in una costante, giriamo la stringa/parola al contrario e vediamo se le 2 parole combaciano



function isWordPalindrome(arrayParola){
    console.log(arrayParola)
    const myArray = arrayParola.split('');
    console.log(myArray)
    const reversedParola = myArray.toReversed();
    console.log(reversedParola)
    const reversedString = reversedParola.join('');
    console.log(reversedString)
    if (arrayParola === reversedString){
        return Boolean(true)
    }
   else {
    return Boolean(false)
   }
} 

