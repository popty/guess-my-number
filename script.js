'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let score = 20;
let highScore =  Number(document.querySelector('.highscore').textContent);

console.log(highScore);

let number = Math.trunc(Math.random()*20) + 1; 

checkBtn.addEventListener('click', () =>{

  

    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '📍 No Number!';
    }

    else if(guess === number){
        document.querySelector('.message').textContent = '🎉 Correct Number';

        document.querySelector('body').style.backgroundColor = "#69db7c";

        document.querySelector('.number').style.width= '30rem';

        document.querySelector('.number').textContent = number;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
            console.log(document.querySelector('.highscore').textContent);
            console.log("Highscore: "+ highScore);

        }
    }

    else if(guess > number){

        if(score > 0){
            document.querySelector('.message').textContent = '⬇️ Think Lower';
            score--;
            document.querySelector('.score').textContent = score;
        }

        if(score <= 0){
            document.querySelector('.message').textContent = "😭 You've lost the Game!";
        }

    }
    
    else{
        if(score > 0){
            document.querySelector('.message').textContent = '⬆️ Think Higher';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "😭 You've lost the Game!";
        }
    }

})

againBtn.addEventListener('click', () => {
   score = 20;
   number = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.message').textContent = "Start guessing...";
   document.querySelector('.number').textContent = "?";
   document.querySelector('.score').textContent = score;
   document.querySelector('.guess').value = '';

   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
});