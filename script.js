// Voglio vedere se riducendo la dimensione di un Array durante l'esecuzione di un ciclo for che deve iterarsi per array.length volte questo ciclo da errore, oppure se array.length si aggiorna in corso d'opera
// Più tardi proverò ad aprire un array in indici inesistenti per vedere l'effetto che fa


const starWarsCharacters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
    },
    {
        name: 'C-3PO',
        height: 167,
        mass: 75,
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
    },
    {
        name: 'R2-D2',
        height: 96,
        mass: 32,
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a',
    },
    {
        name: 'Darth Vader',
        height: 182,
        mass: 136,
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 40,
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '19BBY',
        gender: 'female',
    },
    {
        name: 'Owen Lars',
        height: 178,
        mass: 80,
        hair_color: 'brown, grey',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '52BBY',
        gender: 'male',
    },
    {
        name: 'Beru Whitesun lars',
        height: 165,
        mass: 75,
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '47BBY',
        gender: 'female',
    },
    {
        name: 'R5-D4',
        height: 97,
        mass: 32,
        hair_color: 'n/a',
        skin_color: 'white, red',
        eye_color: 'red',
        birth_year: 'unknown',
        gender: 'n/a',
    },
    {
        name: 'Biggs Darklighter',
        height: 183,
        mass: 75,
        hair_color: 'black',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '24BBY',
        gender: 'male',
    },
    {
        name: 'Obi-Wan Kenobi',
        height: 182,
        mass: 77,
        hair_color: 'auburn, white',
        skin_color: 'fair',
        eye_color: 'blue-gray',
        birth_year: '57BBY',
        gender: 'male',
    },
]

console.log("Farò ciclare l'array starWarsCharacters. Dentro ogni iterazione del ciclo, faccio ciclare un secondo ciclo for che scorre starWarsFemaleCharacters. Se il personaggio è presente in entrambi gli array il confronto che sta dentro il secondo ciclo for eliminerà l'elemento dal ciclo iniziale.")
console.log("Utilizzerò i nomi index per starWarsCharacters e indexF per starWarsFemaleCharacters. In ogni iterazione riporterò gli indi correnti")
console.log("In una variabile esterna chiamata 'confronto' conterò le iterazioni dei due cicli")
let starWarsFemaleCharacters = []
let confronto = 0
for (let i = 0; i < starWarsCharacters.length; i++) {
    if (starWarsCharacters[i].gender === "female") {
        starWarsFemaleCharacters.push(starWarsCharacters[i])
    }
}

console.log(" ")
console.log(" ")
console.log("Controllo array prima fare alcuna operazione:")
console.log("Array starWarsCharacters, length: [" + starWarsCharacters.length + "] <--- valore reale richiamato dalla memoria e non scritto in stringa console.log");
console.log("Array starWarsFemaleCharacters, length: [" + starWarsCharacters.length + "] <--- valore reale richiamato dalla memoria e non scritto in stringa console.log");


for (let index = 0; index < starWarsCharacters.length; index++) {
    for (let indexF = 0; indexF < starWarsFemaleCharacters.length; indexF++) {
        confronto++;
        console.log("confronto corrente: ", confronto, "index:", index, "indexF:", indexF, ">Sto per fare il confronto if(starWarsCharacters[index aka " + index + "].name === starWarsFemaleCharacters[indexF aka " + indexF + "].name")
        if (starWarsCharacters[index].name === starWarsFemaleCharacters[indexF].name) {
            console.log('%cRISCONTRO', 'color: red');
            console.log("Riscontata ugualianza tra (starWarsCharacters[" + index + "]name e starWarsFemaleCharacters[" + indexF + "].name, Stringa:" + starWarsFemaleCharacters[indexF].name)
            console.log("Eseguo lo .splice(index=" + index + ",1) su starWarsCharacters")
            starWarsCharacters.splice(index, 1)
            console.log("Array starWarsCharacters, length: [" + starWarsCharacters.length + "] <--- valore reale richiamato dalla memoria e non scritto in stringa console.log");
        }
    }
}


console.log("Fine senza errori")
