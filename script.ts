document.getElementById(`previousCard`)?.addEventListener("click", previousQuestion);
document.getElementById(`nextCard`)?.addEventListener("click", nextQuestion);
document.getElementById(`addCardButton`)?.addEventListener("click", addQuestion);
document.getElementById(`resetCardsButton`)?.addEventListener("click", resetCards);

document.addEventListener("DOMContentLoaded", () => {
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let question = Questions.question1;
    let answer = Questions.answer1;
    // @ts-ignore
    front.textContent = `${question}`
    // @ts-ignore
    back.textContent = `${answer}`
    return;
});



const defaultQuestions = {

    question1: "This is a default question. Please add your own!",
    answer1: "To add an question simply use the form below :) (It will be saved in your browser cache!').",
}
let Questions = JSON.parse(localStorage.getItem("questions") || JSON.stringify(defaultQuestions));

let isFlipped = false;
let currentQuestion = 1;
let maxQuestions = parseInt(localStorage.getItem("maxQuestions") || "1");
let isDefaultQuestion = parseInt(localStorage.getItem("isDefaultQuestion") || "1");
const selectQuestion = () => `Questions.question${currentQuestion}`;
const selectAnswer = () => `Questions.answer${currentQuestion}`;

// commented out as it is not needed anymore

/* function flipButton(){
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
} */

function nextQuestion(){
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let question;
    let answer;
    if (currentQuestion < maxQuestions){
        currentQuestion = currentQuestion + 1;
        question = eval(selectQuestion());
        answer = eval(selectAnswer())
        // @ts-ignore
        front.textContent = `${question}`
        // @ts-ignore
        back.textContent = `${answer}`
        console.log("<");
        return currentQuestion;
    }else if(currentQuestion === maxQuestions){
        currentQuestion = 1;
        question = eval(selectQuestion());
        answer = eval(selectAnswer())
        // @ts-ignore
        front.textContent = `${question}`
        // @ts-ignore
        back.textContent = `${answer}`
        console.log("=");
        return currentQuestion;
    }
}

function previousQuestion(){
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let question;
    let answer;
    if (currentQuestion > 1){
        currentQuestion = currentQuestion - 1;
        question = eval(selectQuestion());
        answer = eval(selectAnswer())
        // @ts-ignore
        front.textContent = `${question}`
        // @ts-ignore
        back.textContent = `${answer}`
        return currentQuestion;
    }else if(currentQuestion === 1){
        currentQuestion = maxQuestions.valueOf();
        question = eval(selectQuestion());
        answer = eval(selectAnswer())
        // @ts-ignore
        front.textContent = `${question}`
        // @ts-ignore
        back.textContent = `${answer}`
        return currentQuestion;
    }
}

function addQuestion(){
    let questionInput = document.getElementById("newCardQuestion") as HTMLInputElement;
    let answerInput = document.getElementById("newCardAnswer") as HTMLInputElement;

    const form = document.getElementById("newCard");
    // @ts-ignore
    const isValid = form.checkValidity();

    if (isValid === true) {
        if( maxQuestions === 1 && isDefaultQuestion === 1){
            // @ts-ignore
            delete Questions["question1"];
            // @ts-ignore
            delete Questions["answer1"];
            isDefaultQuestion = 0;
            maxQuestions = 0;
            localStorage.setItem("maxQuestions", JSON.stringify(maxQuestions));
            localStorage.setItem("questions", JSON.stringify(Questions));
            localStorage.setItem("isDefaultQuestion", isDefaultQuestion.toString());
        }
        let newQuestionNumberId = maxQuestions + 1;
        let newQuestionFullId = `question${newQuestionNumberId}`;
        let newQuestionAnswerFullId = `answer${newQuestionNumberId}`;
        // @ts-ignore
        Questions[newQuestionFullId] = questionInput.value;
        // @ts-ignore
        Questions[newQuestionAnswerFullId] = answerInput.value;
        localStorage.setItem("questions", JSON.stringify(Questions));
        maxQuestions += 1;
        localStorage.setItem("maxQuestions", maxQuestions.toString());
        return Questions;
    }else{
        alert("Please fill out the WHOLE form!");
        return;
    }
}

function resetCards(){
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    Questions = defaultQuestions;
    maxQuestions = 1;
    isDefaultQuestion = 1;
    // @ts-ignore
    front.textContent = `${Questions.question1}`;
    // @ts-ignore
    back.textContent = `${Questions.answer1}`;
    localStorage.setItem("isDefaultQuestion", isDefaultQuestion.toString());
    localStorage.setItem("maxQuestions", JSON.stringify(maxQuestions));
    localStorage.setItem("questions", JSON.stringify(Questions));
}