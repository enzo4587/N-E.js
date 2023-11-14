const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let num1 = 4;
let num2 = 2;

let answer = num1 + num2;

rl.question(`what is ${num1} plus ${num2}? \n`, 
(userInput) =>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect response please try again \n');
        rl.prompt();
    }
});

rl.on('close', () =>{
    console.log('correct!!!!!');
})