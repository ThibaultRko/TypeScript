"use strict";
let firstname;
firstname = true;
firstname = 'tibo';
// il me propose toutes les fonctionnalites du type string car je l'ai assogné comme tel
firstname = 5;
//Typescript ne veut plus nous laisser ecrire charAT car au dernieres nouvelles mon firstname est devenu un nombre
// firstname.charAt()
let hasMulet;
//Typescript crée une erreur a la transpilation si on assigne a notre variable une valeur non booleenne
hasMulet = true;
let lastName;
let age;
const colors = ['mauve'];
const note = [42];
const tableauBizzare = [42, false];
//les Tuples
//tableau avec un nombre fixe d'elements
const monTuple = ['tibo', 36];
//comme les elements sont types par index il peut savoir quel element a acces a quel foncton/propriete
monTuple[0].charAt(2);
monTuple[1].toString();
const myCharacter = {
    nickname: 'tobi',
    level: 45,
};
// les enums
var Roles;
(function (Roles) {
    Roles["USER"] = "user";
    Roles["ADMIN"] = "admin";
    Roles["SUPERADMIN"] = "superadmin";
})(Roles || (Roles = {}));
let userRole = Roles.ADMIN;
if (userRole === Roles.ADMIN) {
    console.log("c'est un admin");
}
//any
let maVariable;
// il ne revoie pas d'erreur a cause du any
// on lui dit de tout accepter
// maVariable.push('wesh wesh wesh')
// unknow
//avec le unknow il nous demande de verifier le type avant de faire quoi que se soit
let MaVariableInconnue;
if (Array.isArray(MaVariableInconnue)) {
    MaVariableInconnue.push('sdf');
}
// pour verifier les types => typeof()
if (typeof MaVariableInconnue === 'string') {
    MaVariableInconnue.charAt(45);
}
//les fonctions
//on type notre fonction en disant qu'elle ne renvoie rien
// ici on defini le type void ce qui empeche d'utiliser un return dans cette fonction
function banane() {
    console.log('banane');
    //return 5
}
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}
let result = add(45, 65);
function maFunctionCallBack(arg1, callback) {
    console.log(arg1);
    return callback(true);
}
//TypeScript check directement la valeur du retour de ma callback
//mais si les arguments ne sont pas présent il n'y a ps d erreur de compilation
maFunctionCallBack('Otter', () => {
    return 2;
});
function optionalArgs(argMandatory, argOptional) {
    return argMandatory + argOptional;
}
optionalArgs('banane'); //=>ok
optionalArgs('banane', 'pomme'); //=> ok
// optionalArgs('banane', 45) pas ok car il verfifie le type des arguments et qu'on demande du string
function mergeElements(...args) {
    return args;
}
// le ...args est le spread qui permet d'ajouter autant d arguments dans notre tableau
mergeElements('lama', 'chien', 'chat'); //=> on peu donc ici ajouter des elemets de type string a l'infini 
const player = {
    name: 'Tibo',
    level: 12,
    note: 'BG',
};
function levelUP(player) {
    player.level = player.level + 1;
}
levelUP(player);
let fakeNumber = '42000';
function age2Glace(age) {
    //on peu utiliser toString() parcequ'arriv a ce point la on lui dit qu'il doit le consideré comme un nombre
    return age.toString();
}
function save(mode) {
    return mode;
}
save('delete');
