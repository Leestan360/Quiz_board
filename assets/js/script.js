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

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const answer_text = document.getElementById('answer_text')
const answer_1_text = document.getElementById('answer_1_text')
const answer_2_text = document.getElementById('answer_2_text')
const answer_3_text = document.getElementById('answer_3_text')
const submitBtn = document.getElementById('submit')


