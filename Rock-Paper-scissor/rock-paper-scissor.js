let score = (JSON.parse(localStorage.getItem('score'))) ||
    {
        wins:0,
        losses:0,
        ties:0
    };

scoreElement();

    const input = document.querySelector('.js-input1');
    input.addEventListener('click', () => {
       
        playGame('rock');
    })

   /*  document.body.addEventListener('keydown',(event) => {
       if(event.key === 'r'){
        playGame('rock');
       }
       else if(event.key === 'p'){
        playGame('paper');
       }
       else if(event.key === 's'){
        playGame('scissor');
       }
       else if(event.key === 'a'){
        autoplayElement.innerHTML = 'Stop Playing';
        autoplay();
       }
       else if(event.key === 'S'){
        clearInterval(intervalId);
        isAutoPlaying = false;
        autoplayElement.innerHTML = 'Auto Play';
       }
    }); */
       /* document.body.addEventListener('keyup',(event) => {
        if(event.key === 'Backspace'){
            score.wins =0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            scoreElement();
       }
    }); */
       
    function confirmation(){
         document.querySelector('.js-reset-confirmation').innerHTML =
            `Are You sure want to reset the score?
        <button  onclick = "
            score.wins =0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            scoreElement();
            hideResetConfirm();" class="yes-no"> 
            Yes 
        </button>
        <button  onclick = "
            hideResetConfirm();" class="yes-no">
             No 
        </button>
            </p>`
        }
    
    
    

    const resetElement = document.querySelector('.js-reset-button');
    resetElement.addEventListener('click',confirmation);

        
    


    const autoplayElement = document.querySelector('.js-autoplay-button');
    
    autoplayElement.addEventListener('click',() => {
        autoplayElement.innerHTML = 'Stop Playing';
        autoplay();
    });
    
    function playGame(gamerMove){
        let computerMove = '';
        let result = {};

        if(gamerMove === 'rock')
        {
            computerMove = pickComputerMove();
            if(computerMove === 'rock')
            {
                result ='Tie';
            }else if(computerMove === 'paper')
            {
                result ='You lose';
            }
            else if(computerMove === 'scissor')
            {
                result = 'You win';
            }

        } else if(gamerMove === 'paper')
        {
            computerMove = pickComputerMove();
            if(computerMove === 'rock')
            {
                result ='Tie';
            }else if(computerMove === 'paper')
            {
                result ='You lose';
            }
            else if(computerMove === 'scissor')
            {
                result = 'You win';
            }

        } else if(gamerMove === 'scissor')
        {
            computerMove = pickComputerMove();
            if(computerMove === 'rock')
            {
                result ='Tie';
            }else if(computerMove === 'paper')
            {
                result ='You lose';
            }
            else if(computerMove === 'scissor')
            {
                result = 'You win';
            }

        } 
        console.log(result);
    document.querySelector('.js-result').innerHTML = `${result}`;
    
    if(result === 'You win'){
        score.wins += 1;
    } else if(result === 'You lose'){
        score.losses += 1;
    } else if(result === 'Tie'){
        score.ties += 1;
    }
    
    localStorage.setItem('score',(JSON.stringify(score)));

    scoreElement();
    
    document.querySelector('.js-moves').innerHTML = ` You
        <img src="/pictures/${gamerMove}.png" class="icon">
        <img src="/pictures/${computerMove}.png" class="icon">
        computer`;
    }

    let intervalId;
    let isAutoPlaying = false;
    function autoplay(){
        
        if(!isAutoPlaying){
            intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
            },2000);

            isAutoPlaying = true;
        }
        else{
            clearInterval(intervalId);
            isAutoPlaying = false;
            autoplayElement.innerHTML = 'Auto Play';
        }
    }    
    
    function pickComputerMove()
    {
     const randomNumber = Math.random();
     let computerMove = '';

     if(randomNumber >=0 && randomNumber < 1/3)
     {
        computerMove ='rock';
        
     } else if(randomNumber >= 1/3 && randomNumber < 2/3)
     {
        computerMove ='paper';
        
     } else if(randomNumber >= 2/3 && randomNumber < 1)
     {
        computerMove ='scissor';
        
     }
     return computerMove;
    }
    

    
    function scoreElement(){
    document.querySelector('.js-score').innerHTML = 
        `Wins: ${score.wins}, losses: ${score.losses},  Ties:${score.ties}`;

    }

    function hideResetConfirm(){
        document.querySelector('.js-reset-confirmation').innerHTML = '';
    }
    
    
