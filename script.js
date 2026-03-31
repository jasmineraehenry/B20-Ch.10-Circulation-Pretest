const questions = [
    {
        question: "A patient presents with a weakened left ventricle. Which consequence would be most directly expected?",
        options: [
            "Decreased oxygenation of blood in the lungs.",
            "Reduced blood pressure in the aorta and systemic arteries.",
            "Increased rate of blood flow returning to the right atrium.",
            "Rapid buildup of CO2 in the pulmonary veins."
        ],
        answer: 1, // Index of the correct option
        rationale: "The left ventricle pumps blood into the systemic circuit; weakness here lowers the force entering the aorta."
    },
    {
        question: "Which of the following describes the correct order of the heart's electrical conduction system?",
        options: [
            "AV Node -> SA Node -> Purkinje -> Bundle of His",
            "SA Node -> AV Node -> Bundle of His -> Purkinje Fibers",
            "Purkinje -> Bundle of His -> AV Node -> SA Node",
            "SA Node -> Bundle of His -> Purkinje -> AV Node"
        ],
        answer: 1,
        rationale: "The signal starts at the SA node (pacemaker), pauses at the AV node, travels the Bundle of His, and ends at the Purkinje fibers."
    }
    // ADD THE REMAINING 23 QUESTIONS HERE FOLLOWING THIS PATTERN
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('option-btn');
        btn.onclick = () => selectOption(index);
        optionsEl.appendChild(btn);
    });
    nextBtn.style.display = 'none';
}

function selectOption(index) {
    const q = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    if (index === q.answer) {
        buttons[index].style.background = "#d4edda"; // Green for correct
        score++;
    } else {
        buttons[index].style.background = "#f8d7da"; // Red for wrong
        buttons[q.answer].style.background = "#d4edda"; // Show correct one
    }
    
    // Show rationale/feedback
    const feedback = document.createElement('p');
    feedback.innerHTML = `<strong>Note:</strong> ${q.rationale}`;
    optionsEl.appendChild(feedback);
    
    nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = `Quiz Complete! Your score: ${score}/${questions.length}`;
        optionsEl.innerHTML = '';
        nextBtn.style.display = 'none';
    }
};

loadQuestion();
