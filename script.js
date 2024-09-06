
var questions = [
    {
        question: "Who is the current Prime Minister of Pakistan?",
        choices: ["Imran Khan", "Shehbaz Sharif", "Asif Ali Zardari", "Bilawal Bhutto"],
        answer: 1
    },
    {
        question: "Which city was most recently declared a metropolitan city in Pakistan?",
        choices: ["Islamabad", "Lahore", "Faisalabad", "Gwadar"],
        answer: 3
    },
    {
        question: "What is the official currency of Pakistan?",
        choices: ["Rupee", "Dollar", "Euro", "Pound"],
        answer: 0
    },
    {
        question: "Who is the current Chief of Army Staff (COAS) of Pakistan?",
        choices: ["Qamar Javed Bajwa", "Asim Munir", "Raheel Sharif", "Pervez Musharraf"],
        answer: 1
    },
    {
        question: "Which year did Pakistan conduct its first nuclear tests?",
        choices: ["1998", "1997", "2000", "1999"],
        answer: 0
    },
    {
        question: "Which city in Pakistan is known as the 'City of Gardens'?",
        choices: ["Karachi", "Lahore", "Islamabad", "Multan"],
        answer: 1
    },
    {
        question: "What is the name of the national airline of Pakistan?",
        choices: ["AirBlue", "Shaheen Air", "Pakistan International Airlines", "SereneAir"],
        answer: 2
    },
    {
        question: "Which Pakistani cricketer recently retired from international cricket?",
        choices: ["Misbah-ul-Haq", "Shahid Afridi", "Shoaib Malik", "Mohammad Hafeez"],
        answer: 3
    },
    {
        question: "In which year was the Pakistan Super League (PSL) founded?",
        choices: ["2015", "2016", "2017", "2018"],
        answer: 1
    },
    {
        question: "Which of the following is Pakistan's largest export product?",
        choices: ["Textiles", "Rice", "Fruits", "Surgical Instruments"],
        answer: 0
    },
    {
        question: "Which Pakistani actress won the Best Actress Award at the Lux Style Awards 2023?",
        choices: ["Mahira Khan", "Sajal Aly", "Mehwish Hayat", "Yumna Zaidi"],
        answer: 3
    },
    {
        question: "Which country did Pakistan sign a major economic cooperation deal with in 2023?",
        choices: ["China", "Saudi Arabia", "Turkey", "UAE"],
        answer: 0
    },
    {
        question: "What is the population of Pakistan as of the 2023 census?",
        choices: ["210 million", "240 million", "230 million", "250 million"],
        answer: 1
    },
    {
        question: "Who is the current Governor of the State Bank of Pakistan?",
        choices: ["Reza Baqir", "Jameel Ahmad", "Shaukat Tarin", "Miftah Ismail"],
        answer: 1
    },
    {
        question: "Which Pakistani film was nominated for an international award in 2023?",
        choices: ["Joyland", "Moor", "Cake", "Zindagi Tamasha"],
        answer: 0
    }
];


 

var currentQuestionIndex = 0;
var score = 0;

var questionArea = document.getElementById('question-area');
var answerButtons = document.querySelectorAll('.answer-btn');
var scoreDisplay = document.getElementById('score');
var nextButton = document.getElementById('next-btn');
var resultMessage = document.getElementById('result-message');


// Implemented answer checking and scoring ✅

function loadQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionArea.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.choices[index];
        button.classList.remove('correct', 'wrong');
    });
    resultMessage.innerText = '';
    nextButton.style.display = 'none';
}

// Created "Next Question" button functionality ⏭️

function handleAnswer(selectedIndex) {
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
        alert(resultMessage.innerText = "Correct!");
    } else {
        resultMessage.innerText = "Try Again!";
    }
    scoreDisplay.innerText = `Score: ${score}`;
    answerButtons.forEach((button, index) => {
        if (index === currentQuestion.answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
    nextButton.style.display = 'block';
}

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        var selectedIndex = parseInt(button.getAttribute('data-index'));
        handleAnswer(selectedIndex);
    });
});

// Handled keyboard input for quick answers ⌨️

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        resultMessage.innerText = `Game Over! Your score is ${score}/${questions.length}.`;
        nextButton.style.display = 'none';
        resetGame();
    }
});

// Added game reset and replay feature 🔄

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = `Score: ${score}`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', () => {
        loadQuestion();
        nextButton.style.display = 'none';
    });
}

document.addEventListener('keydown', (event) => {
    var key = event.key;
    if (key >= 1 && key <= 4) {
        var selectedIndex = key - 1;
        handleAnswer(selectedIndex);
    }
});

loadQuestion();