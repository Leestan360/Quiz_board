const quizData = [
    {
        question: "What does HTML stand for?",
        answer_0: "HyperTransfer Markup Language",
        answer_1: "HyperText Markup Language",
        answer_2: "HyperText Markdown Language",
        answer_3: "HyperText Marked Language",
        correct: "answer_1",
    },
    {
        question: "What does CSS stand for?",
        answer_0: "Central Style Sheets",
        answer_1: "Cascading Simple Sheets",
        answer_2: "Cascading Style Sheets",
        answer_3: "Cascading Styling Sheets",
        correct: "answer_2",
    },
    {
        question: "What year was Python launched?",
        answer_0: "1993",
        answer_1: "1991",
        answer_2: "2000",
        answer_3: "1990",
        correct: "answer_1",
    },
    {
        question: "What year was JavaScript launched?",
        answer_0: "1995",
        answer_1: "1990",
        answer_2: "1999",
        answer_3: "None of the above",
        correct: "answer_0",
    },
    {
        question: "Which language runs in a web browser?",
        answer_0: "Python",
        answer_1: "Java",
        answer_2: "C",
        answer_3: "JavaScript",
        correct: "answer_3"
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const answer_0_text = document.getElementById('answer_0_text');
const answer_1_text = document.getElementById('answer_1_text');
const answer_2_text = document.getElementById('answer_2_text');
const answer_3_text = document.getElementById('answer_3_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    answer_0_text.innerText = currentQuizData.answer_0;
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
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    });
    return answer;
};


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score+=20;
        };

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h1 style="text-align: center">You scored ${score}%</h1>

            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})