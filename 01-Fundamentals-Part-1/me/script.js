/* let js = "Amazing";
if (js === "Amazing2") {
  alert("The coding is Amazing in javaScript");
} else {
  alert("It is not Amazing");
}

const operation = 20 + 10 - 20;
console.log(operation); */

/* let country = 'colombia';
let population = 35000000;
let continent = 'american';

console.log(country);
console.log(population);
console.log(continent);

const isIsland = false;
let language = 'Español';
console.log(isIsland);
console.log(language);

let middlePopulation = (population/2);
console.log(middlePopulation);
console.log(middlePopulation/2);

function checkPopulation () {
  let finlandPopulation = 6000000;
  if(finlandPopulation >= middlePopulation) {
    return true;
  } else {
    return false
  }
}
console.log(checkPopulation());

let operationCalculation = '9' - '5';
let operationCalculation2 = 9 - 5;
let operationCalculation3 = 9 - '5';
console.log(operationCalculation);
console.log(operationCalculation2);
console.log(operationCalculation3); */

/* let country = "colombia";
let population = 35;
const isIsland = true;
const language = "English";

function checkIfSarahCanliveInMyCountry() {
  if (language === "English" && population < 50 && isIsland === true) {
    console.log("You should live in Colombia:)");
  } else {
    console.log("Colombia does not meet your criteria :(");
  }
};

console.log(checkIfSarahCanliveInMyCountry()); */

// ________________________________________________________________________

/* LECTURE: The switch Statement
1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'


function sentLanguage(country) {
  if(country === 'colombia') {
    return 'spanish';
  }
}

const language = sentLanguage('colombia');
switch (language) {
  case 'mandarin': 
  console.log('MOST number of native speakers!');
  break;
  case 'spanish': 
  console.log('2nd place in number of native speakers');
  break;
  case 'english': 
  console.log('3rd place');
  break;
  case 'hindi': 
  console.log('Number 4');
  break;
  default:
    console.log('Great language too :D');
} */

// ________________________________________________________________________

/* JavaScript Fundamentals – Part 2 */

/* LECTURE: Functions
1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
return (`I am living in ${country} and it has this population
${population} and the capital city is: ${capitalCity}` )
}

let surAmerica = describeCountry('Colombia', 35, 'Bogota')
let restWorld = describeCountry('Filipines', 67, 'Cachondeo');
let restWorld2 = describeCountry('RemoteCountry', 3, 'Calcamo');

console.log(surAmerica, restWorld, restWorld2);
 */

/* LECTURE: Function Declarations vs. Expressions
1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)


let poputationInTheWorld = 7900;
let population;

function percentageOfWorld1(population) {
  let checkResult = (population / poputationInTheWorld) * 100;
  return checkResult;
}
 */

// console.log(percentageOfWorld1(1441));

/* LECTURE: Arrow Functions
1. Recreatethelastassignment,butthistimecreateanarrowfunctioncalled
   'percentageOfWorld3' 

   let checkPopulation = population => (population/7900) * 100;
   console.log(checkPopulation(456));

let sum = base => (base + 30);
console.log(sum(10));
*/

/*
LECTURE: Functions Calling Other Functions
1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
3. Call'describePopulation'withdatafor3countriesofyourchoice


const describePopulation = function (country, population) {
  let myPercentage = percentageOfWorld1(population);
  let description = `${country} has ${population} million people, whitch is 
  about ${myPercentage}} of the world`;
  console.log(description);
};

describePopulation("china", 78);
describePopulation("colombia", 35);
describePopulation("japon", 99);
*/

/*
LECTURE: Introduction to Arrays
1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
3. Createanarraycalled'percentages'containingthepercentagesofthe
world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values


let population2 = [1144, 45, 89, 97];
let estimation = [
  percentageOfWorld1(population2[0]),
  percentageOfWorld1(population2[1]),
  percentageOfWorld1(population2[2]),
  percentageOfWorld1(population2[3]),
]
function hola() {
  for (let i = 0; i < population2.length; i++) {
    let holassss = percentageOfWorld1(population2[i]);
    console.log(holassss);
  }
}
console.log(estimation);
hola();

population2.forEach(element => console.log(percentageOfWorld1(element)));
*/

/*

LECTURE: Basic Array Operations (Methods)
1. Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. Atsomepoint,anewcountrycalled'Utopia'iscreatedintheneighbourhoodof your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately,aftersometime,thenewcountryisdissolved.Soremoveitfrom the end of the array
4. Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,logtothe console: 'Probably not a central European country :D'
5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.


let neighbours = [
  'brazil', 'ecuador', 'peru', 'venezuela'
]

neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central Eeuropean country :D');
}

*/

/*

LECTURE: Introduction to Objects
1. Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)



let myCountry = {
  country: "colombia",
  capital: 'bogota',
  language: 'spanish',
  population: 40,
  neighbours: [
    'peru', 
    'bolivia', 
    'panama',
    'venezuela',
    'chile',
  ]
};
console.log(myCountry);

*/

// ___________________-___________________-

/* 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀



// la formula que necesito implementar es: 
// BMI = mass / height ** 2

let johnMass = 92;
let MarkMass = 78;
let johnHeight = 1.95;
let MarkHeight = 1.69;
let markHigherBMI;

let markBodyMassIndex = (MarkMass / (MarkHeight * MarkHeight));
let johnBodyMassIndex = (johnMass / (johnHeight * johnHeight));

console.log(markBodyMassIndex);
console.log(johnBodyMassIndex);

// check if Mark has a higher BMI than John.
markHigherBMI = markBodyMassIndex > johnBodyMassIndex;
console.log(markHigherBMI);

*/

/*

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀

*/

/*
___________________________________________
exercice.

let koalas = [88, 91, 110];
let dolphins = [96, 108, 89];
let sumDolphins = 0;
let sumKoalas = 0;
let average;

koalas.forEach(function(numero) {
  let sum = sumKoalas += numero;
  average = sum/koalas.length;
  return average;
});
console.log(sumKoalas);
console.log('koales: '+ average);


dolphins.forEach(function(numero) {
  let sum = sumDolphins += numero;
  average = sum/dolphins.length;
  return average;
});
console.log(sumDolphins);
console.log('dolphins:' + average);


*/
/*

const hasDriversLicence = true; 
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(!hasDriversLicence);

*/

// ________________________________________________________________________________

// CONDITIONAL STATEMENT OPERATOR
// IF ELSE IN ONE LINE

// normal way to if statement


/* const age = 4;

if (age >= 18) {
  console.log("nice");
} else {
  console.log("It is not good");
}

age >= 18
  ? console.log("nice with conditional statement")
  : console.log("it is not good with conditional statement");

// checking another example:

let haveCar = false;
let sum1;
let costCar = 4000;

if (haveCar) {
  let sum = costCar + 1000;
  console.log(sum);
} else {
  console.warn("He needs to buy a car");
}

haveCar === false
? sum1 = (costCar + 2000)
: sum1 = 0;
 
console.log(sum1);

let check = age >= 18 ? true : false;
console.log(check); */