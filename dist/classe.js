"use strict";
class Invoice {
    constructor() { }
    static getDetails() {
        console.log('un texte de loi');
    }
}
class UnpaidInvoice extends Invoice {
    constructor(price) {
        super(price, "BE987654321");
        console.log(this.deadLine);
        console.log(this.price);
        //les classes enfants n ont pas acces aux prorps private
        //console.log(this.vatNumber); => pas ok car private        
    }
}
const unpaidInvoice = new UnpaidInvoice();
const invoice = new Invoice(42, "BE457865324568");
//public tout le monde a acces a la propriété
console.log(invoice.price);
//private => en dehors de ma classe personne n'y a acces
//  console.log(invoice.vatNumber); => pas ok
// proteced => en dehors de ma classe ou de ses sousclasse personne n'y a acces
//  console.log(invoice.deadLine); => pas ok
class Vehicule {
    stop() {
        console.log('je suis a l arret');
    }
}
// on ne peut pas créer une instance d'une classe abstraite()
// const car = new Vehicule => pas ok
class Boat extends Vehicule {
    start() {
        console.log('je suis un bateau et je demarre');
    }
}
class Car extends Vehicule {
    start() {
        console.log('je suis une voiture et je demarre');
    }
}
function startRace(vehicules) {
    for (const vehicule of vehicules) {
        vehicule.start();
    }
}
class Square {
    constructor() {
        this.numberOfSide = 4;
        this.render = function () {
            console.log('je suis un carré');
        };
    }
}
class Triangle {
    constructor() {
        this.numberOfSide = 3;
        this.render = function () {
            console.log('je suis un triangle');
        };
    }
}
const square = new Square();
const triangle = new Triangle();
function renderShape(shape) {
    shape.render();
}
//il respecte tout les deux l'interface shape donc ce sont des arguments validés pour ma fonction
renderShape(square);
renderShape(triangle);
