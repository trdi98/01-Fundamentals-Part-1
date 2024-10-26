/*
//Values and variables

let country = "Croatia";
let continent = "Europe";
let population = 4;
let language = "Croatian";

console.log(country);
console.log(continent);
console.log(population);


//Data types

let isIsland = false;


console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
//console.log(typeof language);


/* let var and const

 language = "Croatian";

const continent = "Europe";
const country = "Croatia";
const isIsland = false;
//isIsland = true;


//console.log(language);
console.log(continent);
console.log(country);
console.log(isIsland);


// Basic operators

console.log(population / 2);

population ++;
console.log(population);

let finland = 6000000;
console.log(finland < population);

console.log(population < 33000000);


country + 
' is in ' + 
continent + 
' and its ' +
population +
' speak ' +
language;

console.log(description);


// Strings and template literals

let description = `${country} is in ${continent}, and its ${population} speak ${language}`;
console.log(description);

//Taking decisions: if/else Statements

if(population > 33) {
    console.log(`${country}'s population is above average` );
} else {
    console.log(`${country}'s population is ${33 - population} milion below average`);
}
 
console.log('9' - '5'); // -> '4'
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143



// TYPE CONVERSION AND COERCION 

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143



// EQUALITY OPERATORS == vs. === 

const numNeighbours = prompt(
  'How many neighbour countries does your country have?'
);

// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);

const numNeighbours = 5;

if (numNeighbours === 1) {
    console.log('Only one border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders!');
}



// LOGICAL OPERATORS 

const country = "Croatia"
const language = "English";
const population = 40000000;
const isIsland = false;

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}



// THE SWITCH STATEMENT

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
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
    case 'arabic':
        console.log('5th most spoken language');
        break; 
    default:
        console.log('Great language too :D');
}

*/

// THE CONDITIONAL (TERNARY) OPERATOR

const country = 'Croatia';
const population = 130;

console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
  );