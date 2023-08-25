class Invoice {
    protected declare deadline: Date;

    constructor(public price: number, private vatNumber: string) {
        console.log(this.deadline);
    }

    static getDetails() {
        console.log('un super texte de loi');
    }
}

class UnpaidInvoice extends Invoice {
    constructor(price: number) {
        super(price ,'BE0573627173');
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


abstract class Vehicule {
    abstract start(): void;

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

function startRace(vehicules: Vehicule[]) {
    for (const vehicule of vehicules) {
        vehicule.start();
    }
}

interface Shape {
    numberOfSide: number;
    render: () => void;
    translate?: () => void;
    colors?: {
        [key: string]: string,
    };
}

class Square implements Shape {
    numberOfSide = 4;

    render = function() {
        console.log('je suis un joli carré');
    };
}

class Triangle implements Shape {
    numberOfSide = 3;

    colors = {
        rouge: 'carmin',
        bleu: 'ciel'
    };

    translate() {
        console.log('je me déplace');
    };

    render = function() {
        console.log('je suis un joli triangle');
    };
}

const square = new Square();
const triangle = new Triangle();

function renderShape(shape: Shape) {
    shape.render();

    if (shape.translate !== undefined) {
        shape.translate(); 
    }

    // si colors est undefined, on n'essaye pas
    // d'accéder à sa propriété
    console.log(shape.colors?.rouge);
}

// Il respecte tous les deux l'interface shape
// donc ce sont des arguments valides pour ma
// function
renderShape(square)
renderShape(triangle)


 
 

 