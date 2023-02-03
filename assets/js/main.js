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
event.preventDefault();

let array = ["L","o","o","p"];
console.log(array);
console.log(array.length);

let input = document.querySelector("#input").value;
console.log(input);

array.splice(1,0,`${input}`)
console.log(array);

let arrayString = String(array.join(""));
console.log(arrayString);

let output = document.querySelector("#output");
output.innerHTML = arrayString;
});

