class Invoice {
    public declare price: number;
    private declare vatNumber: string;
    protected declare deadLine: Date;

    constructor() {}

    static getDetails() {
        console.log('un texte de loi');
        
    }
}

class UnpaidInvoice extends Invoice {
    constructor(price: number) {
        super(price, "BE987654321");
        console.log(this.deadLine);
        console.log(this.price);
        //les classes enfants n ont pas acces aux prorps private
        //console.log(this.vatNumber); => pas ok car private        
    }
}
 const unpaidInvoice = new UnpaidInvoice()
const invoice = new Invoice(42, "BE457865324568");
//public tout le monde a acces a la propriété
 console.log(invoice.price);
//private => en dehors de ma classe personne n'y a acces
//  console.log(invoice.vatNumber); => pas ok
// proteced => en dehors de ma classe ou de ses sousclasse personne n'y a acces
//  console.log(invoice.deadLine); => pas ok

abstract class Vehicule {
    abstract start(): void;

    stop() {
        console.log('je suis a l arret');
        
    }
}

// on ne peut pas créer une instance d'une classe abstraite()
// const car = new Vehicule => pas ok

class Boat extends Vehicule{
    start() {
        console.log('je suis un bateau et je demarre');
        
    }
}
class Car extends Vehicule{
    start() {
        console.log('je suis une voiture et je demarre');
        
    }
}

function startRace(vehicules: Vehicule[]) {
    for(const vehicule of vehicules) {
        vehicule.start();
    }
}

//ci dessus les parametres sont une variable declarée 'vehicule' de type 'Vehicule' qui est un tableau donc []
// une classe peu etre un type

interface Shape {
    numberOfSide: number;
    render: ()=>void;
}

class Square implements Shape {
    numberOfSide=4;
    render = function() {
        console.log('je suis un carré');
    }
}
class Triangle implements Shape {
    numberOfSide=3;
    render = function() {
        console.log('je suis un triangle');
    }
}

const square = new Square();
const triangle = new Triangle();

function renderShape(shape: Shape) {
    shape.render();
}

//il respecte tout les deux l'interface shape donc ce sont des arguments validés pour ma fonction
renderShape(square);
renderShape(triangle);


 
 

 