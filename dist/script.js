"use strict";
var _a, _b, _c, _d;
(_a = document.getElementById(`previousCard`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", previousQuestion);
(_b = document.getElementById(`nextCard`)) === null || _b === void 0 ? void 0 : _b.addEventListener("click", nextQuestion);
(_c = document.getElementById(`addCardButton`)) === null || _c === void 0 ? void 0 : _c.addEventListener("click", addQuestion);
(_d = document.getElementById(`resetCardsButton`)) === null || _d === void 0 ? void 0 : _d.addEventListener("click", resetCards);
document.addEventListener("DOMContentLoaded", () => {
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let question = Questions.question1;
    let answer = Questions.answer1;
    let whereAt = document.getElementById("whereAt");
    // @ts-ignore
    front.textContent = `${question}`;
    // @ts-ignore
    back.textContent = `${answer}`;
    // @ts-ignore
    whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
    return;
});
const defaultQuestions = {
    question1: "This is a default question. Please add your own!",
    answer1: "To add an question simply use the form below :) (It will be saved in your browser cache!').",
};
let Questions = JSON.parse(localStorage.getItem("questions") || JSON.stringify(defaultQuestions));
let currentQuestion = 1;
let maxQuestions = parseInt(localStorage.getItem("maxQuestions") || "1");
let isDefaultQuestion = parseInt(localStorage.getItem("isDefaultQuestion") || "1");
const selectQuestion = () => `Questions.question${currentQuestion}`;
const selectAnswer = () => `Questions.answer${currentQuestion}`;
function nextQuestion() {
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let whereAt = document.getElementById("whereAt");
    let question;
    let answer;
    if (currentQuestion < maxQuestions && maxQuestions > 1) {
        currentQuestion = currentQuestion + 1;
        question = eval(selectQuestion());
        answer = eval(selectAnswer());
        const container = document.querySelector(".card");
        // @ts-ignore
        if (container.classList.contains("animationFlip")) {
            return;
        }
        else {
            // @ts-ignore
            container.classList.add("animationFlip");
            // @ts-ignore
            container.addEventListener("transitionend", (event) => {
                if (event.propertyName !== "transform")
                    return;
                // @ts-ignore
                container.style.transition = "none";
                // @ts-ignore
                container.classList.remove("animationFlip");
                // @ts-ignore
                container.offsetHeight;
                // @ts-ignore
                container.style.transition = "";
            }, { once: true });
            // @ts-ignore
            front.textContent = `${question}`;
            // @ts-ignore
            back.textContent = `${answer}`;
            // @ts-ignore
            whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
            return currentQuestion;
        }
    }
    else if (currentQuestion === maxQuestions && maxQuestions > 1) {
        currentQuestion = 1;
        question = eval(selectQuestion());
        answer = eval(selectAnswer());
        const container = document.querySelector(".card");
        // @ts-ignore
        if (container.classList.contains("animationFlip")) {
            return;
        }
        else {
            // @ts-ignore
            container.classList.add("animationFlip");
            // @ts-ignore
            container.addEventListener("transitionend", (event) => {
                if (event.propertyName !== "transform")
                    return;
                // @ts-ignore
                container.style.transition = "none";
                // @ts-ignore
                container.classList.remove("animationFlip");
                // @ts-ignore
                container.offsetHeight;
                // @ts-ignore
                container.style.transition = "";
            }, { once: true });
            // @ts-ignore
            front.textContent = `${question}`;
            // @ts-ignore
            back.textContent = `${answer}`;
            // @ts-ignore
            whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
            return currentQuestion;
        }
    }
}
function previousQuestion() {
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let whereAt = document.getElementById("whereAt");
    let question;
    let answer;
    if (currentQuestion > 1 && maxQuestions > 1) {
        currentQuestion = currentQuestion - 1;
        question = eval(selectQuestion());
        answer = eval(selectAnswer());
        const container = document.querySelector(".card");
        // @ts-ignore
        if (container.classList.contains("animationFlip")) {
            return;
        }
        else {
            // @ts-ignore
            container.classList.add("animationFlipBack");
            // @ts-ignore
            container.addEventListener("transitionend", (event) => {
                if (event.propertyName !== "transform")
                    return;
                // @ts-ignore
                container.style.transition = "none";
                // @ts-ignore
                container.classList.remove("animationFlipBack");
                // @ts-ignore
                container.offsetHeight;
                // @ts-ignore
                container.style.transition = "";
            }, { once: true });
            // @ts-ignore
            front.textContent = `${question}`;
            // @ts-ignore
            back.textContent = `${answer}`;
            // @ts-ignore
            whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
            return currentQuestion;
        }
    }
    else if (currentQuestion === 1 && maxQuestions > 1) {
        currentQuestion = maxQuestions.valueOf();
        question = eval(selectQuestion());
        answer = eval(selectAnswer());
        const container = document.querySelector(".card");
        // @ts-ignore
        if (container.classList.contains("animationFlip")) {
            return;
        }
        else {
            // @ts-ignore
            container.classList.add("animationFlipBack");
            // @ts-ignore
            container.addEventListener("transitionend", (event) => {
                if (event.propertyName !== "transform")
                    return;
                // @ts-ignore
                container.style.transition = "none";
                // @ts-ignore
                container.classList.remove("animationFlipBack");
                // @ts-ignore
                container.offsetHeight;
                // @ts-ignore
                container.style.transition = "";
            }, { once: true });
            // @ts-ignore
            front.textContent = `${question}`;
            // @ts-ignore
            back.textContent = `${answer}`;
            // @ts-ignore
            whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
            return currentQuestion;
        }
    }
}
function addQuestion() {
    let questionInput = document.getElementById("newCardQuestion");
    let answerInput = document.getElementById("newCardAnswer");
    let whereAt = document.getElementById("whereAt");
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
        // @ts-ignore
        whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
        return Questions;
    }
    else {
        alert("Please fill out the WHOLE form!");
        return;
    }
}
function resetCards() {
    let front = document.getElementById("question");
    let back = document.getElementById("answer");
    let whereAt = document.getElementById("whereAt");
    Questions = defaultQuestions;
    maxQuestions = 1;
    isDefaultQuestion = 1;
    currentQuestion = 1;
    // @ts-ignore
    front.textContent = `${Questions.question1}`;
    // @ts-ignore
    back.textContent = `${Questions.answer1}`;
    // @ts-ignore
    whereAt.textContent = `${currentQuestion} / ${maxQuestions}`;
    localStorage.setItem("isDefaultQuestion", isDefaultQuestion.toString());
    localStorage.setItem("maxQuestions", JSON.stringify(maxQuestions));
    localStorage.setItem("questions", JSON.stringify(Questions));
}
