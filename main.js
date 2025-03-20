const readline = require('readline-sync');

let userName = readline.question("Please enter your name: ");
console.log(`Hello ${userName}!`);

let gameIntro = "You wake up in a dark forest. There are two paths ahead of you: one leading to the mountains and one to a village. Your choice will determine your fate!";
console.log(gameIntro);

let mountainChoice = [0];
let villiageChoice = [1];
let userInput = readline.question(`Choose whether to go to the mountains or to the villiage.
For mountain enter: ${mountainChoice} 
For villiage enter: ${villiageChoice}
Enter your answer here: `);



if (userInput <1) {
    console.log("Let's go to the mountain!");
    } else {
    console.log("Let's go to the villiage!");
    };


let occupationOne = "Blacksmith";
let occupationTwo = "Baker";

let occupation = readline.question(`What will be your occupation? ${occupationOne} or ${occupationTwo}: `);

if (occupation = occupationOne.toLowerCase) {
    console.log("Nice choice! Our current blacksmith could use the extra hand.")
} else if (occupation = occupationTwo.toLowerCase) {
    console.log("Sweet, we hope you stick around!");
} else {
    console.log("We are not hiring at this time.")
}

let weaponChoiceOne = "Hammer";
let weaponChoiceTwo = "Sword";
let weaponChoiceThree = "Rolling Pin"

let eventIntro = readline.question(`We are being attacked! Select a weapon now!
${weaponChoiceOne}
${weaponChoiceTwo}
${weaponChoiceThree}
What do you choose? `);
console.log(eventIntro);

let age = readline.question(`Are you even old enough for this battle?
    Enter your age: `);
let canFight = true;


if (age >= 18 && canFight) {
  console.log("Welcome to the fight!");
} else {
  console.log("You must stay the children!");
}
