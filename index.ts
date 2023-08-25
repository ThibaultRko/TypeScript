let firstname;

firstname = true;
firstname = 'tibo';
// il me propose toutes les fonctionnalites du type string car je l'ai assogné comme tel
firstname = 5;
//Typescript ne veut plus nous laisser ecrire charAT car au dernieres nouvelles mon firstname est devenu un nombre
// firstname.charAt()

let hasMulet: boolean;
//Typescript crée une erreur a la transpilation si on assigne a notre variable une valeur non booleenne
hasMulet = true;

let lastName: string;
let age: number;

const colors: string[] = ['mauve'];
const note: Array<number> = [42];

const tableauBizzare: Array<number | boolean> = [42, false]

//les Tuples
//tableau avec un nombre fixe d'elements

const monTuple: [string, number] = ['tibo', 36]
//comme les elements sont types par index il peut savoir quel element a acces a quel foncton/propriete
monTuple[0].charAt(2);
monTuple[1].toString();

const myCharacter: {
    nickname: string,
    level: number,
    //le ? rend la propriete optionnel
    isSick?: boolean
} = {
    nickname: 'tobi',
    level: 45,
}


// les enums

enum Roles {
    USER = 'user',
    ADMIN = 'admin',
    SUPERADMIN = 'superadmin'
}

let userRole: Roles = Roles.ADMIN;
    
if (userRole === Roles.ADMIN) {
    console.log("c'est un admin");
}

//any

let maVariable: any;
// il ne revoie pas d'erreur a cause du any
// on lui dit de tout accepter
// maVariable.push('wesh wesh wesh')

// unknow


//avec le unknow il nous demande de verifier le type avant de faire quoi que se soit
let MaVariableInconnue: unknown;

if (Array.isArray(MaVariableInconnue)){
    MaVariableInconnue.push('sdf')
}

// pour verifier les types => typeof()
 if (typeof MaVariableInconnue === 'string') {
    MaVariableInconnue.charAt(45);
 }

 //les fonctions

//on type notre fonction en disant qu'elle ne renvoie rien
// ici on defini le type void ce qui empeche d'utiliser un return dans cette fonction
 function banane(): void {
    console.log('banane');
    //return 5
 }

 function add(nbr1: number, nbr2: number) {
    return nbr1 + nbr2
 }

 let result = add(45,65)

 function maFunctionCallBack(arg1:string, callback:(arg:boolean)=> number) {
    console.log(arg1);
    return callback(true)
 }

 //TypeScript check directement la valeur du retour de ma callback
 //mais si les arguments ne sont pas présent il n'y a ps d erreur de compilation

 maFunctionCallBack('Otter', () => {
    return 2
 })

function optionalArgs(argMandatory: string, argOptional?: string) {
    return argMandatory + argOptional
}
optionalArgs('banane')  //=>ok
optionalArgs('banane', 'pomme') //=> ok
// optionalArgs('banane', 45) pas ok car il verfifie le type des arguments et qu'on demande du string

function mergeElements(...args:string[]) {
    return args
}
// le ...args est le spread qui permet d'ajouter autant d arguments dans notre tableau


mergeElements('lama', 'chien', 'chat') //=> on peu donc ici ajouter des elemets de type string a l'infini 

//

interface Player {
    name:string,
    level:number,
    isAlive:boolean
}

interface PremiumPlayer {
    name:string,
    level:number,
    note: string,
    isAlive:boolean
}

const player = {
    name: 'Tibo',
    level: 12,
    note: 'BG',
}

function levelUP(player: Player) {
    player.level = player.level +1;
}

levelUP(player as unknown as Player);

let fakeNumber: number = '42000' as unknown as number;

function age2Glace(age:string | number) {
    //on peu utiliser toString() parcequ'arriv a ce point la on lui dit qu'il doit le consideré comme un nombre
    return (age as number).toString()
}

function save(mode:"edit" | "create" | "delete") {
    return mode
}

save('delete')


