const questions = [
    {
        question: 'What is the Largest animal?',
        answers : [
            {text: "Shark" , flag:"true"},
            {text: "Dinosaur" , flag:"False"},
            {text: "Giraffe" , flag:"False"},
            {text: "Elephant" , flag:"False"}
        ]
            
        
    },
    {
        question: 'Which is the largest desert in the world?',
        answers : [
            {text: "Sahara" , flag:"true"},
            {text: "Kalahari" , flag:"False"},
            {text: "Gopi" , flag:"False"},
            {text: "Rajasthan" , flag:"False"}
        ]
    },
    {
        question: 'Which is the smallest country in the world?',
        answers : [
            {text: "vatican City" , flag:"true"},
            {text: "Bhutan" , flag:"False"},
            {text: "Nepal" , flag:"False"},
            {text: "Indonesia" , flag:"False"}
        ]
    },
    {
        question: 'Which is the smallest continent in the world?',
        answers : [
            {text: "Arctic" , flag:"true"},
            {text: "Africa" , flag:"False"},
            {text: "Antartic" , flag:"False"},
            {text: "Asia" , flag:"False"}
        ]
    }
    
    
    
];



const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('nextbtn');

let currentQuestIndex = 0;
let questionNo = 0;
let score = 0;


function startQuiz(){
    currentQuestIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestIndex];
    questionNo = currentQuestIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    
    currentQuestion.answers.forEach((answer)=>{
        const Button = document.createElement("button");
        Button.innerHTML = answer.text;
        Button.classList.add("btn");
        answerButton.appendChild(Button);
        if(answer.flag){
            Button.dataset.flag = answer.flag;
        }
        Button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(event){

    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.flag === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    } else{
        selectedBtn.classList.add('incorrect');
    }

    const nodes = answerButton.getElementsByTagName("button");
    let button;
    for(let i =0; i < nodes.length; i++){
       
        button = nodes[i];
        if(button.dataset.flag === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
       }
      
   

    
nextButton.style.display = "block";
}

nextButton.addEventListener('click',()=>{
    if(currentQuestIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});


function handleNextButton(){
    currentQuestIndex += 1;
    if(currentQuestIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


function showScore(){
    resetState();
    
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


startQuiz();