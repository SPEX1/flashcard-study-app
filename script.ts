document.getElementById(`flip`)?.addEventListener("click", flipButton);
document.getElementById(`next`)?.addEventListener("click", nextQuestion);



const Questions = {

    answer1: "NaN is a number",
    question1: "What type is NaN(Not a number)",

    answer2: "It checks if the given array has this variable.",
    question2: "What does hasOwn() do?",

    answer3: "Its useful to use an array when you want to manage multiple variables under one name. Like using a light/darkmode inside the user setting!",
    question3: "When is a array useful?"
}

let isFlipped = false;
let currentQuestion = 1;
let maxQuestions = 3;
const selectQuestion = () => `Questions.question${currentQuestion}`;
const selectAnswer = () => `Questions.answer${currentQuestion}`;

function flipButton(){
    let paragraph = document.getElementById("questionAnswer");
    let answer = eval(selectAnswer());
    let question = eval(selectQuestion());

    if(isFlipped === false){
        // @ts-ignore
        paragraph.textContent = `${answer}`
        isFlipped = true;
        console.log(isFlipped);
        return isFlipped;
    } else if(isFlipped === true){
        // @ts-ignore
        paragraph.textContent = `${question}`
        isFlipped = false;
        return isFlipped;
    }
}

function nextQuestion(){
    let paragraph = document.getElementById("questionAnswer");
    isFlipped = false;
    let question;
    if (currentQuestion < maxQuestions){
        currentQuestion = currentQuestion + 1;
        question = eval(selectQuestion());
        // @ts-ignore
        paragraph.textContent = `${question}`
        console.log("<");
        return currentQuestion;
    }else if(currentQuestion === maxQuestions){
        currentQuestion = 1;
        question = eval(selectQuestion());
        // @ts-ignore
        paragraph.textContent = `${question}`
        console.log("=");
        return currentQuestion;
    }
}