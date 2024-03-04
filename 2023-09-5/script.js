"use strict"
let x = 17;

const ul = document.getElementById("meineul");


function addElement() {
    let text = document.getElementById("textid").value; // Variable texr wird mit dem Wert von dem Element mit der id: textid befüllt.
    const li = document.createElement("li"); // Erstellen von der Variable die eingefügt wird. Neues li Element wird erzeugt.
    li.textContent = text; // Inhalt des Inputs als Inhalt der li Variable setzen
    ul.appendChild(li); // li Element an die ul anfügen.
}
