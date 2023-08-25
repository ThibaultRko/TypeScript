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
