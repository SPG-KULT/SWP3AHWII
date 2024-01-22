// So liegt der Normalwert bei Männern laut Deutscher Gesellschaft für Ernährung
// im Intervall von 20 bis 25 kg / m², während er sich
// bei Frauen im Intervall von 19 bis 24 kg / m² befindet.

class Person {
    /* Gewicht in kg, Größe in m */
    #name;
    #gewicht;
    #groesse;
    #geschlecht;
    constructor(namePar, gewichtPar, groessePar, geschlechtPar) {
        this.name = namePar;
        this.gewicht = gewichtPar;
        this.groesse = groessePar;
        this.geschlecht = geschlechtPar;
    }
    set geschlecht(geschlechtPar) {
        if (typeof geschlechtPar !== 'string') {
            throw new Error('Parameter kein String');
        }
        if (geschlechtPar != 'w' && geschlechtPar != 'm') {
            throw new Error('muss m oder w sein');
        } 
        this.#geschlecht = geschlechtPar;

    }

    set name(namePar) {
        if (typeof namePar !== 'string') {
            throw new Error('ungültiger Name');
        }
        if (namePar.length < 3) {
            throw new Error('Name zu kurz');
        }
        this.#name = namePar;
    }

    set gewicht(gewichtPar) {
        // gewicht in kg
        if (gewichtPar < 10 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht() {
        return this.#gewicht;
    }
    set groesse(groessePar) {
        if (groessePar < 0.5 || groessePar > 3.0) {
            throw new Error('ungültige Groesse');
        }
        this.#groesse = groessePar;
    }

    get bmi() {
        const nmbr = this.#gewicht / (this.#groesse * this.#groesse);
        return Math.round(nmbr * 10) / 10;
    }
    toString() {
        return ( 
            `Name: ${this.#name} Gewicht: ${this.#gewicht} Größe: ${this.#groesse} Geschlecht: ${this.#geschlecht} BMI: ${this.bmi} ${this.ergebnisse()}`
        );
    }
    ergebnisse() {
        if (this.#geschlecht == "w") {
            if (this.bmi < 19) {
                return  "Untergewicht"
            }
            if (this.bmi > 24) {
                return "Übergewicht"
            }
            else {
                return "Normalgewicht"
            }
        }
        if (this.#geschlecht == "m") {
            if (this.bmi < 20) {
                return 'Untergewicht'
            }
            if (this.bmi > 25) {
                return 'Übergewicht'
            }
            else {
                return 'Normalgewicht'
            }
        }
        
    }
    
}
/*a = [
    ['Peta', 90, 1.7,'m'],
    ['Lisa', 50, 3.5,'w'], 
    ['Roland', 70, 1.7,'w'],
    ['Hans', 80, 1.8,'w'], 
]; */
function calculateBMI(){
    let name = document.getElementById('nameInput').value;
    let kg = document.getElementById('weightInput').value;
    let m = document.getElementById('heightInput').value;
    let geschlecht = document.getElementById('genderInput').value;
    
    try {
        let person = new Person(name, kg, m, geschlecht);
       document.getElementById('bmiOutput').innerHTML = person.toString();
    } catch (e) {
        console.log(e.message);
    }
}

/*
b = a.map((arr) => {
    try {
        return new Person(...arr);
    } catch (e) {
        console.log(e.message);
        return null;
    }
}); // jetzt ist b ein Personen-Array
b.forEach((p) => console.log(p + ''));*/