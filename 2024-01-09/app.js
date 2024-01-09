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
        if (gewichtPar < 1 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht() {
        return this.#gewicht;
    }
    set groesse(groessePar) {
        if (groessePar < 0.50 || groessePar >2.50) {
            throw new Error('ungültige Groesse');
        }
        this.groesse = groessePar;
    }
    
    
    get bmi() {
        let nmbr = this.#gewicht / (this.groesse * this.groesse)
        return Math.round(nmbr *10) / 10
    }
    
    
}
p = new Person('Hans', 80, 1.8);
a = [
    ["peta", 90, 1.7],
    ["roland",70, 1.7]
    ["hans", 80, 1.8]
];
b = a.map(arr => new Person (...arr));
b.forEach((p) => console.log(p.toString));

console.log(p1.gewicht);
