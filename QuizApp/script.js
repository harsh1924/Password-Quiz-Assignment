const startBtn = document.getElementById('startBtn');
const quiz = document.getElementById('quiz');
const score = document.getElementById('score');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['New York', 'London', 'Paris', 'Berlin'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Who is the CEO of Tesla?',
        options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tim Cook'],
        correctAnswer: 'Elon Musk'
    },
    {
        question: 'Which planet is the closest to the Sun?',
        options: ['Mercury', 'Venus', 'Earth', 'Mars'],
        correctAnswer: 'Mercury'
    },
];

let questionIndex = 0;
let scoreCounter = 0;

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    showQuestion();
});

function showQuestion() {
    if (questionIndex < questions.length) {
        quiz.innerHTML = '<h2>' + questions[questionIndex].question + '</h2>';
        for (let i = 0; i < questions[questionIndex].options.length; i++) {
            quiz.innerHTML += '<button onclick="checkAnswer(' + i + ')">' + questions[questionIndex].options[i] + '</button>';
        }
    } else {
        quiz.innerHTML = '<h2>Quiz Completed</h2>';
        quiz.innerHTML += '<h3>Your score: ' + scoreCounter + '/' + questions.length + '</h3>';
        quiz.innerHTML += '<button onclick="location.reload()">Restart Quiz</button>';
    }
}

function checkAnswer(answer) {
    if (questions[questionIndex].options[answer] === questions[questionIndex].correctAnswer) {
        scoreCounter++;
    }
    questionIndex++;
    showQuestion();
}