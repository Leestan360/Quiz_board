const quizData = [
    {
        question: "What does HTML stand for?",
        answer: "HyperTransfer Markup Language",
        answer_1: "HyperText Markup Language",
        answer_2: "HyperText Markdown Language",
        answer_3: "HyperText Marked Language",
        correct: "answer_1",
    },
    {
        question: "What does CSS stand for?",
        answer: "Central Style Sheets",
        answer_1: "Cascading Simple Sheets",
        answer_2: "Cascading Style Sheets",
        answer_3: "Cascading Styling Sheets",
        correct: "answer_2",
    },
    {
        question: "What year was Python launched?",
        answer: "1993",
        answer_1: "1991",
        answer_2: "2000",
        answer_3: "1990",
        correct: "answer_1",
    },
    {
        question: "What year was JavaScript launched?",
        answer: "1995",
        answer_1: "1990",
        answer_2: "1999",
        answer_3: "None of the above",
        correct: "answer",
    },
    {
        question: "Which language runs in a web browser?",
        answer: "Python",
        answer_1: "Java",
        answer_2: "C",
        answer_3: "JavaScript",
        correct: "answer_3"
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const answer_text = document.getElementById('answer_text');
const answer_1_text = document.getElementById('answer_1_text');
const answer_2_text = document.getElementById('answer_2_text');
const answer_3_text = document.getElementById('answer_3_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 20%

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    answer_text.innerText = currentQuizData.answer;
    answer_1_text.innerText = currentQuizData.answer_1;
    answer_2_text.innerText = currentQuizData.answer_2;
    answer_3_text.innerText = currentQuizData.answer_3;
};

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
};

function getSelected() {
    let answer;
    answerEls.forEach(answerEls => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
};


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        };

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h1>You scored ${score}</h1>

            <button.click = "location.reload()">Reload</button>
            `
        }
    }
})