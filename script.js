
var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who wrote 'Hamlet'?",
        choices: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        answer: 2
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Harriet Tubman", "Harold Lee", "J.D. Salinger"],
        answer: 0
    },
    {
        question: "Who wrote '1984'?",
        choices: ["George Orwell", "George Santayana", "George Orwell", "George Orwell"],
        answer: 2
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        choices: ["Jane Austen", "Charles Dickens", "William Shakespeare", "George Orwell"],
        answer: 0
    },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    }    
];

// var currentQuestionIndex = 0;
// var score = 0;

// var questionArea = document.getElementById('question-area');
// var answerButtons = document.querySelectorAll('.answer-btn');
// var scoreDisplay = document.getElementById('score');
// var nextButton = document.getElementById('next-btn');
// var resultMessage = document.getElementById('result-message');

// function loadQuestion() {
//     var currentQuestion = questions[currentQuestionIndex];
//     questionArea.innerText = currentQuestion.question;
//     answerButtons.forEach((button, index) => {
//         button.innerText = currentQuestion.choices[index];
//         button.classList.remove('correct', 'wrong');
//     });
//     resultMessage.innerText = '';
//     nextButton.style.display = 'none';
// }

// function handleAnswer(selectedIndex) {
//     var currentQuestion = questions[currentQuestionIndex];
//     if (selectedIndex === currentQuestion.answer) {
//         score++;
//         alert(resultMessage.innerText = "Correct!");
//     } else {
//         resultMessage.innerText = "Try Again!";
//     }
//     scoreDisplay.innerText = `Score: ${score}`;
//     answerButtons.forEach((button, index) => {
//         if (index === currentQuestion.answer) {
//             button.classList.add('correct');
//         } else {
//             button.classList.add('wrong');
//         }
//     });
//     nextButton.style.display = 'block';
// }

// answerButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         var selectedIndex = parseInt(button.getAttribute('data-index'));
//         handleAnswer(selectedIndex);
//     });
// });

// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     } else {
//         resultMessage.innerText = `Game Over! Your score is ${score}/${questions.length}.`;
//         nextButton.style.display = 'none';
//         resetGame();
//     }
// });

// function resetGame() {
//     currentQuestionIndex = 0;
//     score = 0;
//     scoreDisplay.innerText = `Score: ${score}`;
//     nextButton.innerText = "Play Again";
//     nextButton.style.display = 'block';
//     nextButton.addEventListener('click', () => {
//         loadQuestion();
//         nextButton.style.display = 'none';
//     });
// }

// document.addEventListener('keydown', (event) => {
//     var key = event.key;
//     if (key >= 1 && key <= 4) {
//         var selectedIndex = key - 1;
//         handleAnswer(selectedIndex);
//     }
// });

// loadQuestion();