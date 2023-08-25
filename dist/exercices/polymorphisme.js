"use strict";
//créer une function makeSwim() qui recoit un tableau d'annimal en argument et si les animaux sont des annimaux aquatiques alors on apple leur propriété swim sinon on affiche un message pour dire qu'ils ne sont pas capabel de nager
class Dogs {
    constructor() {
        this.race = "chiwawa";
    }
    run() {
        console.log('je sais marcher');
    }
}
class Fish {
    constructor() {
        this.race = "saumon";
    }
    swim() {
        console.log('je sais nager');
    }
}
const rex = new Dogs();
const bubulle = new Fish();
function makeSwim(animals) {
    if (animals.swim !== undefined) {
        return animals.swim();
    }
    console.log('arg je coule');
}
makeSwim(rex);
makeSwim(bubulle);
