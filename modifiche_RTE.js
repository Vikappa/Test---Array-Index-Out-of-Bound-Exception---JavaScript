var originalLog = console.log; // Salva il riferimento alla funzione originale console.log
var logDiv = document.getElementById("finta_console"); // Div target 

console.log = function () { // OVERRIDE CONSOLE LOG

    // Concatena gli argomenti della funzione console.log
    var logMessage = Array.from(arguments).join(" ");

    // Aggiungi la stringa concatenata al div
    logDiv.innerHTML += '<p class="consoleMessage">' + logMessage + '</P>';

    // Chiama la funzione originale console.log con gli stessi argomenti
    originalLog.apply(console, arguments);
}

for
