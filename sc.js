const questions = [
    {        question: "What does HTML stand for?",
            answers: [
                {text:"A.Hyper Text Markup Language",correct: true},
                {text:"B.Hyper Mail",correct: false},
                {text:"C.How to Make Lasagna",correct: false},
                {text:"D.Hyper Military",correct: false},
            ]
        },
        {
            question: "How many tags are in a regular element?",
            answers: [
                {text:"A.2",correct:true},
                {text:"B.3",correct:false},
                {text:"C.6",correct:false}, 
                {text:"D.8",correct:false},
            ]
        },
        {
            question: "What is the difference between an opening tag and a closing tag?",
            answers: [
                {text:"A.Opening tag has a / in front",correct:false},
                {text:"B.Closing tag has a / in front",correct:true},
                {text:"C.There is no difference",correct:false},
                {text:"D.None",correct:false},
            ]
        },
        {
            question: "4.< br  / > What type of tag is this?",
            answers: [
                {text:"A.A broken one",correct:false},
                {text:"B.close tag",correct:false},
                {text:"C.An opening tag",correct:false},
                {text:"D.Break tag",correct:true},
            ]
        },
        {
            question:"What is an element that does not have a closing tag called?",
            answers: [
                {text:"A.Tag",correct:false},
                {text:"B.Empty element",correct:true},
                {text:"C.Closed element",correct:false},
                {text:"D.None",correct:false},
            ]
        },
    ];
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
        console.log("stariQuiz()");
    }
    
    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;
       
        currentQuestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
        });
    }

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            
        }
        button.disabled = true;
        
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Yeah!!..You scored ${score} out of ${questions.length}!!!`;
    nextButton.innerHTML = "Start Quiz Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
    startQuiz(); 