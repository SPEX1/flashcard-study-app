"use strict";
var _a, _b, _c, _d;
(_a = document.getElementById(`flip`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", flipButton);
(_b = document.getElementById(`next`)) === null || _b === void 0 ? void 0 : _b.addEventListener("click", nextQuestion);
(_c = document.getElementById(`addCardButton`)) === null || _c === void 0 ? void 0 : _c.addEventListener("click", addQuestion);
(_d = document.getElementById(`resetCardsButton`)) === null || _d === void 0 ? void 0 : _d.addEventListener("click", resetCards);
document.addEventListener("DOMContentLoaded", () => {
    let paragraph = document.getElementById("questionAnswer");
    let question = Questions.question1;
    // @ts-ignore
    paragraph.textContent = `${question}`;
    return;
});
const defaultQuestions = {
    question1: "This is a default question. Please add your own!",
    answer1: "To add an question simply use the form below :) It will be saved in your browser cache!').",
};
let Questions = JSON.parse(localStorage.getItem("questions") || JSON.stringify(defaultQuestions));
let isFlipped = false;
let currentQuestion = 1;
let maxQuestions = parseInt(localStorage.getItem("maxQuestions") || "1");
let isDefaultQuestion = parseInt(localStorage.getItem("isDefaultQuestion") || "1");
const selectQuestion = () => `Questions.question${currentQuestion}`;
const selectAnswer = () => `Questions.answer${currentQuestion}`;
function flipButton() {
    let paragraph = document.getElementById("questionAnswer");
    let answer = eval(selectAnswer());
    let question = eval(selectQuestion());
    if (isFlipped === false) {
        // @ts-ignore
        paragraph.textContent = `${answer}`;
        isFlipped = true;
        console.log(isFlipped);
        return isFlipped;
    }
    else if (isFlipped === true) {
        // @ts-ignore
        paragraph.textContent = `${question}`;
        isFlipped = false;
        return isFlipped;
    }
}
function nextQuestion() {
    let paragraph = document.getElementById("questionAnswer");
    isFlipped = false;
    let question;
    if (currentQuestion < maxQuestions) {
        currentQuestion = currentQuestion + 1;
        question = eval(selectQuestion());
        // @ts-ignore
        paragraph.textContent = `${question}`;
        console.log("<");
        return currentQuestion;
    }
    else if (currentQuestion === maxQuestions) {
        currentQuestion = 1;
        question = eval(selectQuestion());
        // @ts-ignore
        paragraph.textContent = `${question}`;
        console.log("=");
        return currentQuestion;
    }
}
function addQuestion() {
    let questionInput = document.getElementById("newCardQuestion");
    let answerInput = document.getElementById("newCardAnswer");
    const form = document.getElementById("newCard");
    // @ts-ignore
    const isValid = form.checkValidity();
    if (isValid === true) {
        if (maxQuestions === 1 && isDefaultQuestion === 1) {
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
    }
    else {
        alert("Please fill out the WHOLE form!");
        return;
    }
}
function resetCards() {
    let paragraph = document.getElementById("questionAnswer");
    Questions = defaultQuestions;
    maxQuestions = 1;
    isDefaultQuestion = 1;
    // @ts-ignore
    paragraph.textContent = `${Questions.question1}`;
    localStorage.setItem("isDefaultQuestion", isDefaultQuestion.toString());
    localStorage.setItem("maxQuestions", JSON.stringify(maxQuestions));
    localStorage.setItem("questions", JSON.stringify(Questions));
}
