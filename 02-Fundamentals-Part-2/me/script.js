/* FUNCTIONS 

function logger(name) {
    console.log(`hola a todos soy ${name}`);
}
logger('Andres');

*/

/*  ARROW FUNCTIONS 

// si es un solo parametro se puede hacer de esta forma
// enviando de una vez lo que se va a retornar

let calculateAge = birthday => 2037 - birthday;
const age3 = calculateAge(1991);
console.log(age3);

// other example con dos o mas parametros; 

const juice = (oranges, apples) => {
    let fruitsCuantity = (oranges + apples);
    return fruitsCuantity;
}

const hola = juice(3, 5);
console.log(hola);

const suma = (num1, num2, num3, num4) => {
    const sumando = (num1 + num2 + num3 + num4 );
    return sumando;
}

const printing = suma(1,2,3,4);
console.log(printing);

*/

/* arrays 


const friends = ['Andres', 'Daniel', 'Carmen'];
friends.push('Liliana');
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
friends[0] = 'RIOS';
console.log(friends);

let myYear = 1981;
const years = new Array(1991, 1898, 1398, 2020, 2021);
console.log(years);

// const checkArray = new Array[1994, 'Andres', 10];
// console.log(checkArray);

const checkArray = ['Andres', 3, 2343, friends];
console.log(checkArray);

// exercise

const calcAge = function(hola) {
        return 2021 - hola;
}

console.log(calcAge(myYear));



// expresiones y calculos en arrays 

const friends = ['Jairo', 'Oscar', 'Stevan'];

const user = ['Andres', 'Rios', (2021 - 1981), friends, 'Itagui'];
console.log(user);
console.log(user.length);

// exercise

const years = [2020, 2019, 2018, 2017];

const calcAge = function() {
    for(const element of years) {
        let hola = 2021 - element;
        console.log(hola);
    }
}

calcAge();

// array exercises

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "elite2",
];

const result = words.filter((word) => word.match("oscar"));

console.log(result.length);
if (result.length > 1) {
  console.log("si hay elementos en el array con la palabra buscada");
} else {
  console.log("No hay elementos con la palabra buscada");
}

let filtered = [12, 5, 8, 130, 44].filter((num) => num === 130);
console.log(filtered);

if (filtered >= 0 && filtered[0] >= 130) {
    console.log('si tiene el numero que busco');
} else {
    console.log('no tengo el numero que busco');
}

filtered.includes(4)

*/

/*

// objetos 

const family = {
    hermana: 'Liliana',
    hermano: 'Daniel',
    tia: 'Rosalba'
}
const familyMenber = family.hermano;
console.log(familyMenber);

const familyInformation = {
    hermana: {
        nombre: 'Liliana',
        edad: (2021-1976),
        sexo: 'Femenino',
    },
    hermano: {
        nombre: 'Daniel',
        edad: (2021-1990),
        sexo: 'Masculino',
    },
    tia: {
        nombre: 'Rosalba',
        edad: (2021-1960),
        sexo: 'Femenino',
    },
}

const familyMenber2 = familyInformation.hermana.nombre;
console.log(familyMenber2);

if(familyInformation.hermana.edad >= familyInformation.hermano.edad){
    console.log(`${familyInformation.hermana.nombre} es mayor que ${familyInformation.hermano.nombre}`);
}

let hola = familyMenber2.match('Liliana')? retrun = true : false;
console.log(hola);

const checkingIt = isFamilyMenber => true;

console.log(checkingIt(hola));

// _____

const familyInformationComplete = {
    hermana: {
        nombre: 'Liliana',
        edad: (2021-1976),
        sexo: 'Femenino',
        friends: ['Carmen', 'Esteban', 'Emilio']
    },
    hermano: {
        nombre: 'Daniel',
        edad: (2021-1990),
        sexo: 'Masculino',
    },
    tia: {
        nombre: 'Rosalba',
        edad: (2021-1960),
        sexo: 'Femenino',
    },
}

console.log(familyInformationComplete.hermana.friends[0]);

*/

const x = 23;

function hola() {
  console.log('Esto es lo que digo');
}

hola();

const checkAge = birthday => 2021 - birthday;
console.log(checkAge(1976));

if (5 < 6) {
  console.log();
}
