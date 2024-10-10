const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false }, 
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "In what year did the Titanic sink?",
        answers: [
            { text: "1926", correct: false },
            { text: "1915", correct: false },
            { text: "1920", correct: false },
            { text: "1912", correct: true },
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "Abraham Lincoln", correct: false },
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Theodore Roosevelt", correct: true },
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    answerbtn.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerbtn.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}
function showScore() {
    questionElement.innerHTML = `Your score: ${score} out of ${questions.length}`;
    answerbtn.innerHTML = "";
    nextBtn.style.display = "";
}

nextBtn.addEventListener("click", startQuiz); 
startQuiz();
