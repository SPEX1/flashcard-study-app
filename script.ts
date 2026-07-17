document.getElementById(`flip`)?.addEventListener("click", flipButton);
document.getElementById(`next`)?.addEventListener("click", nextQuestion);

document.addEventListener("DOMContentLoaded", () => {
    let paragraph = document.getElementById("questionAnswer");
    let question = Questions.question1;
    // @ts-ignore
    paragraph.textContent = `${question}`
    return;
});



const Questions = {

    question1: "What does 'typeof NaN' return in JavaScript?",
    answer1: "It returns 'number' (even though NaN stands for 'Not a Number').",

    question2: "What does Object.hasOwn() do?",
    answer2: "It checks if an object has a specific property as its own direct property, instead of inheriting it.",

    question3: "When is an array useful?",
    answer3: "It is useful when you want to store an ordered list of multiple values under a single variable, like a list of high scores or a collection of flashcards."
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