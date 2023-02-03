console.log("test");

/* 
Frage

Inputfeld für Zahl

Function mit der am Ende Wort Loop ausgeben
        die o o o o o  varrieren durch User eingabe


        array = 
        loop 
            push()
        array in String


*/


let button = document.querySelector("#button");

button.addEventListener("click", (event) => {
    // nicht zurück setzten
    event.preventDefault();

    // array def und init und befüllen
let array = ["L","o","o","p"];
//console.log(array);
//console.log(array.length);

// input holen
let input = document.querySelector("#input").value;
//console.log(input);

// loop
for (rundenIndex = 0; rundenIndex < input.length; rundenIndex = rundenIndex + 1) {
   // console.log("Runden Index: " + rundenIndex);

    // input ins array hinzufügen
array.splice(1,0,`${input[rundenIndex]}`)
//console.log(array);

}


// für output Kommas weg machen
let arrayString = String(array.join(""));
//console.log(arrayString);

// output in html 
let output = document.querySelector("#output");
output.innerHTML = arrayString;
});



let buttonOZahl = document.querySelector("#buttonOZahl");

buttonOZahl.addEventListener("click", (event) => {
    // nicht zurück setzten
    event.preventDefault();

    // array def und init und befüllen
let array = ["L","p"];
//console.log(array);
//console.log(array.length);

//input holen
let input = document.querySelector(`#input`).value;
input = Number(input);
//console.log(input);

// loop
for (rundenIndex = 0; rundenIndex < input; rundenIndex = rundenIndex + 1) {
 //  console.log("Runden Index: " + rundenIndex);

    // input ins array hinzufügen
array.splice(1,0,`o`)
//console.log(array);

}


// für output Kommas weg machen
let arrayString = String(array.join(""));
//console.log(arrayString);

// output in html 
let output = document.querySelector("#output");
output.innerHTML = arrayString;
});