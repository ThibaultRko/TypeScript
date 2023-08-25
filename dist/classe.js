"use strict";
class Invoice {
    constructor(price, vatNumber) {
        this.price = price;
        this.vatNumber = vatNumber;
        console.log(this.deadline);
    }
    static getDetails() {
        console.log('un super texte de loi');
    }
}
class UnpaidInvoice extends Invoice {
    constructor(price) {
        super(price, 'BE0573627173');
        console.log(this.price);
        console.log(this.deadline);
        // les classes enfants n'ont pas accés aux propriétés private
        // console.log(this.vatNumber)
    }
}
const invoice = new Invoice(42, 'BE123453214');
//public tout le monde à accés à la propriété
console.log(invoice.price);
//private: en dehors de ma classe, personne n'y a accés
//console.log(invoice.vatNumber);
//protected: en dehors de ma classe ou de ses sous-classes, personne n'y a accés
//console.log(invoice.deadline);
Invoice.getDetails();
class Vehicule {
    stop() {
        console.log('Je suis à l\'arrêt');
    }
}
class Boat extends Vehicule {
    start() {
        console.log('je suis un bateau et je démarre');
    }
}
class Car extends Vehicule {
    start() {
        console.log('je suis une voiture et je démarre');
    }
}
// on ne peut pas créer une instance d'une classe abstraite() 
// const vehicule = new Vehicule()
function startRace(vehicules) {
    for (const vehicule of vehicules) {
        vehicule.start();
    }
}
class Square {
    constructor() {
        this.numberOfSide = 4;
        this.render = function () {
            console.log('je suis un joli carré');
        };
    }
}
class Triangle {
    constructor() {
        this.numberOfSide = 3;
        this.colors = {
            rouge: 'carmin',
            bleu: 'ciel'
        };
        this.render = function () {
            console.log('je suis un joli triangle');
        };
    }
    translate() {
        console.log('je me déplace');
    }
    ;
}
const square = new Square();
const triangle = new Triangle();
function renderShape(shape) {
    var _a;
    shape.render();
    if (shape.translate !== undefined) {
        shape.translate();
    }
    // si colors est undefined, on n'essaye pas
    // d'accéder à sa propriété
    console.log((_a = shape.colors) === null || _a === void 0 ? void 0 : _a.rouge);
}
// Il respecte tous les deux l'interface shape
// donc ce sont des arguments valides pour ma
// function
renderShape(square);
renderShape(triangle);
