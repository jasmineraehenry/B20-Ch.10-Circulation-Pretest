const questions = [
    {
        question: "A patient presents with a weakened left ventricle. Which consequence would be most directly expected?",
        options: ["Decreased oxygenation in the lungs", "Reduced blood pressure in the aorta", "Increased venous return", "CO2 buildup in pulmonary veins"],
        answer: 1,
        rationale: "The left ventricle pumps blood into the systemic circuit; weakness here lowers the force entering the aorta."
    },
    {
        question: "The SA node is often called the heart's natural pacemaker. What is its primary role?",
        options: ["Delay the signal for filling", "Initiate electrical impulse for atrial contraction", "Ensure apex-upward contraction", "Prevent backflow to vena cava"],
        answer: 1,
        rationale: "The SA node spontaneously generates the impulse that starts the cardiac cycle."
    },
    {
        question: "During heavy exercise, precapillary sphincters in skeletal muscles relax. What is the benefit?",
        options: ["Increase peripheral resistance", "Increase surface area for exchange", "Divert blood from skin", "Protect capillaries from high pressure"],
        answer: 1,
        rationale: "Opening sphincters allows blood to flood the capillary bed, maximizing diffusion."
    },
    {
        question: "If the electrical signal was not delayed at the AV node, what would result?",
        options: ["Simultaneous atrial and ventricular contraction", "Immediate drop in heart rate", "Semilunar valves stay closed", "Blood cannot enter right atrium"],
        answer: 0,
        rationale: "The delay ensures atria finish filling the ventricles before the ventricles pump."
    },
    {
        question: "At the venous end of a capillary, why does fluid move back into the vessel?",
        options: ["High blood pressure", "Osmotic pressure from plasma proteins", "Active transport", "Vacuum from venous valves"],
        answer: 1,
        rationale: "Proteins like albumin pull water back in as blood pressure drops at the venous end."
    },
    {
        question: "A 'heart block' prevents signals from reaching ventricles. Which structure is likely failing?",
        options: ["SA node", "AV node", "Chordae tendineae", "Septum"],
        answer: 1,
        rationale: "The AV node is the only electrical bridge between the atria and ventricles."
    },
    {
        question: "How does a vein differ structurally from an artery?",
        options: ["Thicker elastic layers", "Larger lumens and one-way valves", "Lack of endothelium", "Lack of smooth muscle"],
        answer: 1,
        rationale: "Larger lumens reduce resistance and valves prevent backflow in a low-pressure system."
    },
    {
        question: "High hematocrit levels (excess RBCs) cause which disadvantage?",
        options: ["Reduced oxygen capacity", "Increased blood viscosity", "Decreased CO2 transport", "Increased blood acidity"],
        answer: 1,
        rationale: "Too many RBCs make blood 'thicker,' increasing the workload on the heart."
    },
    {
        question: "Where does the signal go immediately after leaving the AV node?",
        options: ["Atrial walls", "Bundle of His", "Semilunar valves", "SA node"],
        answer: 1,
        rationale: "The signal travels down the Bundle of His in the septum toward the apex."
    },
    {
        question: "How does the lymphatic system support circulation?",
        options: ["Producing RBCs", "Returning leaked plasma proteins and fluids", "Oxygenating blood", "Acting as a secondary pump"],
        answer: 1,
        rationale: "It collects excess interstitial fluid and returns it to the subclavian veins."
    },
    {
        question: "On an ECG, what does the QRS complex represent?",
        options: ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization", "AV valve closure"],
        answer: 1,
        rationale: "The QRS complex triggers the powerful contraction of the ventricles."
    },
    {
        question: "Why must Purkinje fibers stimulate the ventricles starting at the apex?",
        options: ["To push blood upward toward exit valves", "To open AV valves faster", "To reduce systolic pressure", "To allow atria to fill"],
        answer: 0,
        rationale: "Starting at the bottom ensures blood is squeezed 'up and out' of the heart."
    },
    {
        question: "Correct path: Superior Vena Cava to the Lungs?",
        options: ["RA -> Tricuspid -> RV -> Pulmonary Valve", "RA -> Bicuspid -> RV -> Aortic Valve", "LA -> Mitral -> LV -> Pulmonary Artery", "RV -> Tricuspid -> RA -> Pulmonary Vein"],
        answer: 0,
        rationale: "This follows the deoxygenated path through the right side of the heart."
    },
    {
        question: "How does Adrenaline increase heart rate?",
        options: ["Bypassing the SA node", "Increasing SA node firing frequency", "Increasing AV node delay", "Turning off Purkinje fibers"],
        answer: 1,
        rationale: "Adrenaline makes the pacemaker reach its firing threshold faster."
    },
    {
        question: "Primary role of Coronary Arteries?",
        options: ["Transport blood to lungs", "Supply heart muscle with oxygen", "Regulate SA node", "Carry blood from brain"],
        answer: 1,
        rationale: "The heart is a muscle that requires its own dedicated nutrient supply."
    },
    {
        question: "Occurs during ventricular systole?",
        options: ["Atria contract", "Ventricles contract; semilunar valves open", "Heart relaxes", "AV valves open"],
        answer: 1,
        rationale: "Ventricular contraction forces blood out through the exit valves."
    },
    {
        question: "Why is the AV node delay essential?",
        options: ["Recharge SA node", "Allow atria to finish filling ventricles", "Prevent fast heart rate", "Keep aortic valve closed"],
        answer: 1,
        rationale: "It prevents the ventricles from pumping before they are full."
    },
    {
        question: "In 120/80 mmHg, what does 80 represent?",
        options: ["Atrial contraction pressure", "Venous pressure", "Pressure during ventricular relaxation", "Heart rate"],
        answer: 2,
        rationale: "The lower number is diastolic pressure, the baseline arterial pressure."
    },
    {
        question: "Why is the left ventricle wall thicker than the right?",
        options: ["Pumps larger volume", "Overcomes systemic resistance", "Pumps against gravity", "Oxygenated blood is heavier"],
        answer: 1,
        rationale: "The systemic circuit is much longer and higher-resistance than the pulmonary circuit."
    },
    {
        question: "How does atherosclerosis lead to a heart attack?",
        options: ["Plaque in pulmonary veins", "Narrows coronary arteries, blocking oxygen to heart muscle", "Fatty deposits in SA node", "Hardens bicuspid valve"],
        answer: 1,
        rationale: "Blocked coronary arteries starve the heart muscle, causing tissue death."
    },
    {
        question: "The 'lub' sound is caused by?",
        options: ["Semilunar valve closure", "AV valve closure", "Atrial contraction", "Blood in pulmonary artery"],
        answer: 1,
        rationale: "The first sound is the mechanical closure of the AV valves during systole."
    },
    {
        question: "Where is blood velocity lowest?",
        options: ["Arteries", "Capillaries", "Veins", "Aorta"],
        answer: 1,
        rationale: "Velocity is lowest in capillaries to provide time for nutrient and gas exchange."
    },
    {
        question: "Function of chordae tendineae?",
        options: ["Pull AV valves open", "Prevent AV valves from flipping into atria", "Conduct electrical signals", "Help muscle relax"],
        answer: 1,
        rationale: "They tether the valve flaps against high ventricular pressure."
    },
    {
        question: "Why does a lymphatic blockage cause swelling?",
        options: ["Increased arterial pressure", "Filtered fluid cannot return to blood", "Heart pumps more blood", "RBCs escape to tissue"],
        answer: 1,
        rationale: "The lymphatic system drains excess fluid; a block causes it to pool in tissues."
    },
    {
        question: "Correct order of electrical conduction?",
        options: ["AV -> SA -> Purkinje -> His", "SA -> AV -> His -> Purkinje", "Purkinje -> His -> AV -> SA", "SA -> His -> Purkinje -> AV"],
        answer: 1,
        rationale: "The signal starts at the SA node and ends at the Purkinje fibers."
    }
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
    nextBtn.style.display = 'none';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('option-btn');
        btn.onclick = () => selectOption(index);
        optionsEl.appendChild(btn);
    });
}

function selectOption(index) {
    const q = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (index === q.answer) {
        buttons[index].style.background = "#d4edda";
        score++;
    } else {
        buttons[index].style.background = "#f8d7da";
        buttons[q.answer].style.background = "#d4edda";
    }
    
    const feedback = document.createElement('div');
    feedback.classList.add('feedback');
    feedback.innerHTML = `<strong>Rationale:</strong> ${q.rationale}`;
    optionsEl.appendChild(feedback);
    nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = `Quiz Complete! Your final score is ${score}/${questions.length}.`;
        optionsEl.innerHTML = '<p>Great job reviewing the Circulatory System!</p>';
        nextBtn.style.display = 'none';
    }
};

loadQuestion();
