const questions = [
    {
        question: "Which of these is a famous Indian dish?",
        options: ["Pizza", "Biryani", "Sushi", "Spaghetti"],
        answer: "Biryani"
    },
    {
        question: "What is the main ingredient of Samosa?",
        options: ["Potato", "Chicken", "Rice", "Fish"],
        answer: "Potato"
    },
    {
        question: "What is a common traditional outfit worn by Indian women?",
        options: ["Jeans", "Sari", "T-shirt", "Shorts"],
        answer: "Sari"
    },
    {
        question: "Which Indian outfit is often worn by men during festivals?",
        options: ["Suit", "Kurta-Pajama", "Jeans", "Shirt"],
        answer: "Kurta-Pajama"
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        options: ["Holi", "Diwali", "Eid", "Navratri"],
        answer: "Diwali"
    },
    {
        question: "Which festival celebrates the victory of good over evil?",
        options: ["Diwali", "Christmas", "Holi", "Easter"],
        answer: "Diwali"
    },
    {
        question: "What is the traditional Indian drink made from yogurt and spices?",
        options: ["Lassi", "Tea", "Coffee", "Juice"],
        answer: "Lassi"
    },
    {
        question: "Which Indian state is famous for its backwaters?",
        options: ["Goa", "Kerala", "Tamil Nadu", "Maharashtra"],
        answer: "Kerala"
    },
    {
        question: "Which Indian dish is a type of curry made with chickpeas?",
        options: ["Biryani", "Butter Chicken", "Chole", "Rogan Josh"],
        answer: "Chole"
    },
    {
        question: "Which animal is considered sacred in Indian culture?",
        options: ["Elephant", "Cow", "Tiger", "Lion"],
        answer: "Cow"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const correctAnswersElement = document.getElementById('correct-answers');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedOption;
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz Complete!";
    optionsElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
    submitButton.style.display = 'none';

    let answersHtml = "<h3>Correct Answers:<br></h3><ul>";
    questions.forEach((question, index) => {
        answersHtml += `<li><strong>${question.question}</strong> <br/>: Correct answer is <strong>${question.answer}</strong></li>`;
    });
    answersHtml += "</ul>";
    correctAnswersElement.innerHTML = answersHtml;
}

submitButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        selectOption();
    }
});

loadQuestion();
