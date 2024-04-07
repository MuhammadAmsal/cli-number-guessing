#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to 'Muhammad Amsal' - Number Guessing Game");
const randomNum = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "guessNumberByUser",
        type: "number",
        message: "Please Guess a Number Between 1 to 5"
    }
]);
if (answers.guessNumberByUser === randomNum) {
    console.log("Congratulations ! You Guess a Right Number");
}
else {
    console.log(`Sorry You Guess a Wrong Number ! Correct Number is ${randomNum}`);
}
