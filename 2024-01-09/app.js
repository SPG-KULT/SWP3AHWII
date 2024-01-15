class Person {
    /* Gewicht in kg, Größe in m */
    name;
    #gewicht;
    groesse;
    constructor(name, gewichtPar, groessePar) {
        this.name = name;
        this.gewicht = gewichtPar;
        this.groesse = groessePar;
    }

    
    get bmi() {
       
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
        if (groessePar < 0.50 || groessePar > 3.00) {
            throw new Error('ungültige Groesse');
        }
        this.groesse = groessePar;
    }
    
    
    get bmi() {
        let nmbr = this.#gewicht / (this.groesse * this.groesse)
        return Math.round(nmbr *10) / 10
    }
    
    
}
a = [
    ["Peta", 90, 1.7],
    ["Roland",70, 1.7],
    ["Hans", 80, 1.8],
    ["Lisa", 50, 3.5]      //Wie schaffe ich es, dass hier ein Fehler geworfen wird? 
];

b = a.map(arr => new Person (...arr));
b.forEach((p) => console.log("Name: " + p.name + " Gewicht: " + p.gewicht + " Größe: " + p.groesse + " BMI: " + p.bmi));


