// Questions Data (30 Total Questions)
const ALL_QUESTIONS = [
    {
        question: "What is PrismaX primarily building as its core offering?",
        options: [
            "A centralized cloud storage for AI models",
            "A service layer for physical AI connecting robotics hardware, data, and models",
            "A mobile app for virtual reality gaming",
            "A database for cryptocurrency transactions"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What key challenge in robotics does PrismaX aim to solve?",
        options: [
            "Reducing battery life in drones",
            "Bridging the gap between digital AI and physical intelligence through data and collaboration",
            "Improving screen displays on smart devices",
            "Optimizing search engine algorithms"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What kind of ecosystem is PrismaX creating for robotics?",
        options: [
            "A decentralized open coordination economy with data incentives and teleoperation",
            "A platform for sharing video content",
            "A network for cloud computing services",
            "A system for managing software updates"
        ],
        answer: 0 // Index of A
    },
    {
        question: "How does PrismaX involve the community in its operations?",
        options: [
            "By hosting online coding competitions",
            "Through teleoperation where users remotely control robots to generate data and earn rewards",
            "Via surveys for app features",
            "With forums for tech discussions"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What is one major goal of PrismaX for the future of robotics?",
        options: [
            "To limit robots to factory use only",
            "To create a Robot Economy where robots and humans participate in on-chain interactions",
            "To develop faster web browsers",
            "To enhance smartphone cameras"
        ],
        answer: 1 // Index of B
    },
    {
        question: "PrismaX focuses on tools for which main groups in its ecosystem?",
        options: [
            "Programmers and data analysts",
            "Robot owners, teleoperators, and AI companies needing data",
            "Web designers and marketers",
            "Cloud administrators and users"
        ],
        answer: 1 // Index of B
    },
    {
        question: "How does PrismaX transform robots into economic players?",
        options: [
            "By turning them into data generators that earn rewards through tasks and on-chain identities",
            "Converting them into web servers",
            "Using them for weather data collection",
            "Equipping them with gaming software"
        ],
        answer: 0 // Index of A
    },
    {
        question: "What mechanism does PrismaX use to improve AI models for physical tasks?",
        options: [
            "A flywheel effect where more data leads to better models and increased teleoperation demand",
            "Voice recognition training only",
            "Text translation tools",
            "Image editing algorithms"
        ],
        answer: 0 // Index of A
    },
    {
        question: "What type of data is PrismaX primarily focused on gathering?",
        options: [
            "User login information",
            "High-quality visual and action data from real-world robot teleoperations",
            "Website visit metadata",
            "Software update logs"
        ],
        answer: 1 // Index of B
    },
    {
        question: "How does PrismaX make robotics AI more accessible?",
        options: [
            "By providing proprietary closed-source software",
            "Through open protocols, unified teleoperation standards, and community incentives",
            "Via expensive online courses",
            "With website building templates"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What role do human operators play in PrismaX's system?",
        options: [
            "They maintain servers",
            "They remotely control robots to collect data, improving AI models",
            "They enter data manually",
            "They debug code"
        ],
        answer: 1 // Index of B
    },
    {
        question: "PrismaX envisions a world where robots can do what economically?",
        options: [
            "Store digital files",
            "Participate in a decentralized economy with tokenized tasks and rewards",
            "Run simulations only",
            "Process payments"
        ],
        answer: 1 // Index of B
    },
    {
        question: "How does PrismaX attract community participation?",
        options: [
            "Through exclusive licenses",
            "By offering token rewards and points for teleoperation and data contributions",
            "With premium tools",
            "Via analytics dashboards"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What does PrismaX do to address accuracy issues in real-world robotics AI?",
        options: [
            "Developing keyboards",
            "Using human-in-the-loop teleoperation for precise data collection",
            "Creating processors",
            "Improving screens"
        ],
        answer: 1 // Index of B
    },
    {
        question: "As AI models improve in PrismaX's plan, what happens to efficiency?",
        options: [
            "One operator can oversee multiple robots, scaling operations",
            "More storage is needed",
            "Updates increase",
            "Connections strengthen"
        ],
        answer: 0 // Index of A
    },
    {
        question: "What type of marketplace does PrismaX build?",
        options: [
            "For buying digital art",
            "A tripartite market for data, teleoperation services, and collaborations",
            "For virtual currencies",
            "For code libraries"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What is a key part of PrismaX's long-term roadmap?",
        options: [
            "Quick launches",
            "Leading to full robot autonomy and machine-to-machine coordination",
            "Short fixes",
            "Temporary solutions"
        ],
        answer: 1 // Index of B
    },
    {
        question: "How does PrismaX make data valuable within its ecosystem?",
        options: [
            "Encrypting for security",
            "Through decentralized incentives where community-owned data is rewarded and sold",
            "Compressing for storage",
            "Visualizing data"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What kind of tasks are currently used in PrismaX teleoperation?",
        options: [
            "Editing digital photos",
            "Simple robotic manipulation tasks like pick-and-place operations",
            "Running financial simulations",
            "Writing software code"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What makes PrismaX's approach to physical AI unique?",
        options: [
            "Relying on cloud only",
            "Combining decentralization, human collaboration, and real-world data focus",
            "Digital simulations",
            "VR headsets"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What feature does PrismaX use to engage its community?",
        options: [
            "Points system for quizzes, teleoperation, and contributions",
            "Code commit leaderboards",
            "Tech support forums",
            "Analytics dashboards"
        ],
        answer: 0 // Index of A
    },
    {
        question: "What does \"RobotFi\" mean in PrismaX's vision?",
        options: [
            "Robots in finance apps",
            "A decentralized robot economy with sovereign AI and on-chain coordination",
            "Fiction about investments",
            "High-speed robot networks"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What type of data does PrismaX collect from teleoperation sessions?",
        options: [
            "Email metadata",
            "Video feeds and robot joint movement data",
            "Cryptocurrency transaction logs",
            "Mobile GPS tracking data"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What problem in robotics development does PrismaX primarily address?",
        options: [
            "Lack of smartphone connectivity",
            "Shortage of large-scale real-world training data for robots",
            "Limited cloud storage capacity",
            "Weak battery technology"
        ],
        answer: 1 // Index of B
    },
    {
        question: "PrismaX attracts its community by emphasizing what?",
        options: [
            "Exclusive demos",
            "Open participation, reputation, and shared economic benefits",
            "Premium tools",
            "Coding challenges"
        ],
        answer: 1 // Index of B
    },
    {
        question: "In PrismaX's vision, better models lead to what?",
        options: [
            "More simulations",
            "Higher demand for teleoperation and overall ecosystem growth",
            "Increased storage",
            "Slower processing"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What does PrismaX build to integrate robots with blockchain?",
        options: [
            "Digital signatures",
            "On-chain tools for payments, reputation, and task coordination",
            "Virtual wallets",
            "Data encryption"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What role does teleoperation play in PrismaX's ecosystem?",
        options: [
            "It replaces AI models entirely",
            "It allows humans to remotely control robots while generating data for AI training",
            "It only monitors robot battery levels",
            "It manages software downloads"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What is the aim of PrismaX's community-driven approach?",
        options: [
            "Centralizing control",
            "Accelerating robotics through shared data, incentives, and collaboration",
            "Keeping data private",
            "Avoiding sharing"
        ],
        answer: 1 // Index of B
    },
    {
        question: "What big idea does PrismaX promote to excite its community?",
        options: [
            "Robots as assistants",
            "A future of physical AI creating opportunities for humans and machines",
            "Virtual AI only",
            "Ignoring trends"
        ],
        answer: 1 // Index of B
    }
];

// App State
let state = {
    username: "",
    selectedQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    canAnswer: true
};

// DOM Elements Selection
const screens = {
    start: document.getElementById('screen-start'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result'),
    perfect: document.getElementById('screen-perfect'),
    mystery: document.getElementById('screen-mystery'),
    video: document.getElementById('screen-video')
};

const elements = {
    usernameInput: document.getElementById('username'),
    btnStart: document.getElementById('btn-start'),
    currentQNum: document.getElementById('current-q-num'),
    progressBar: document.getElementById('progress-bar'),
    questionText: document.getElementById('question-text'),
    answersContainer: document.getElementById('answers-container'),
    resultTitle: document.getElementById('result-title'),
    resultScore: document.getElementById('result-score'),
    btnRetry: document.getElementById('btn-retry'),
    operatorName: document.getElementById('operator-name'),
    btnClaim: document.getElementById('btn-claim'),
    btnOpenBox: document.getElementById('btn-open-box'),
    mysteryCube: document.getElementById('mystery-cube'),
    videoContainer: document.getElementById('video-container'),
    flashEffect: document.getElementById('flash-effect')
};

// --- NAVIGATION ---

function showScreen(screenId) {
    // Remove active class from all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    // Add active class to target screen
    screens[screenId].classList.add('active');
}

// --- GAME LOGIC ---

// Shuffle array helper
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startQuiz() {
    const username = elements.usernameInput.value.trim();
    state.username = username || "OPERATOR_" + Math.floor(Math.random() * 9000 + 1000);

    // Select 10 random questions
    const shuffled = shuffleArray([...ALL_QUESTIONS]);
    state.selectedQuestions = shuffled.slice(0, 10);

    state.currentQuestionIndex = 0;
    state.score = 0;
    state.canAnswer = true;

    // Load first question
    loadQuestion();
    showScreen('quiz');
}

function loadQuestion() {
    state.canAnswer = true;
    const currentQuestion = state.selectedQuestions[state.currentQuestionIndex];

    // 1. Store the text of the correct answer
    const correctAnswerText = currentQuestion.options[currentQuestion.answer];

    // 2. Shuffle a copy of options
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    // 3. Update question with local reference mapping
    currentQuestion.shuffledOptions = shuffledOptions;
    currentQuestion.shuffledAnswerIndex = shuffledOptions.indexOf(correctAnswerText);

    // Update Progress Bar & Numbers
    elements.currentQNum.textContent = state.currentQuestionIndex + 1;
    const progressPercent = (state.currentQuestionIndex / 10) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;

    // Render Question Text
    elements.questionText.textContent = currentQuestion.question;

    // Render Answer Options
    elements.answersContainer.innerHTML = '';
    shuffledOptions.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-answer';
        btn.innerHTML = `<span style="color:var(--metallic-beige); font-weight:700; margin-right: 12px;">${String.fromCharCode(65 + index)}.</span> ${option}`;

        btn.addEventListener('click', () => handleAnswerSelection(index, btn));
        elements.answersContainer.appendChild(btn);
    });
}

function handleAnswerSelection(selectedIndex, clickedBtn) {
    if (!state.canAnswer) return;
    state.canAnswer = false;

    const currentQuestion = state.selectedQuestions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.shuffledAnswerIndex;

    const buttons = elements.answersContainer.querySelectorAll('.btn-answer');

    if (isCorrect) {
        state.score++;
        clickedBtn.classList.add('correct-glow');
    } else {
        clickedBtn.classList.add('incorrect-glow');
        // Highlight the correct one
        if (buttons[currentQuestion.shuffledAnswerIndex]) {
            buttons[currentQuestion.shuffledAnswerIndex].classList.add('correct-glow');
        }
    }


    // Delay for visual feedback, then transition
    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < 10) {
            loadQuestion();
        } else {
            // End of Quiz - Update full progress to 100%
            elements.progressBar.style.width = '100%';
            setTimeout(() => finishQuiz(), 300);
        }
    }, 1000); // 1-second delay for feedback
}

const QUOTES = {
    10: "Absolute precision metrics verified! You belong in the PrismaX elite.",
    8: "Solid accuracy operator. Minor recalibrations suggested.",
    5: "Passable operational metadata. Better teleoperation data collection is advised.",
    0: "Error thresholds exceeded. Simulator backup recommended."
};

function getCardQuote(score) {
    if (score === 10) return QUOTES[10];
    if (score >= 8) return QUOTES[8];
    if (score >= 5) return QUOTES[5];
    return QUOTES[0];
}

function finishQuiz() {
    const quote = getCardQuote(state.score);
    const accuracyPercent = Math.round((state.score / 10) * 100);
    const rank = state.score === 10 ? 'S+' : state.score >= 8 ? 'A' : state.score >= 5 ? 'B' : 'C';
    const tweetText = `I completed the PrismaX Knowledge Protocol with ${accuracyPercent}% accuracy! @PrismaXai`;
    const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    if (state.score === 10) {
        document.querySelector('.perfect-card-name').textContent = state.username;
        document.querySelector('.perfect-card-quote').textContent = `"${quote}"`;
        document.querySelector('.perfect-share-btn').href = shareUrl;
        showScreen('perfect');
    } else {
        document.querySelector('.result-card-name').textContent = state.username;
        document.querySelectorAll('.result-card-accuracy').forEach(el => el.textContent = accuracyPercent + '%');
        document.querySelector('.result-card-rank').textContent = rank;
        document.querySelector('.result-card-quote').textContent = `"${quote}"`;
        document.querySelector('.result-share-btn').href = shareUrl;
        showScreen('result');
    }
}

// --- EVENT LISTENERS ---

elements.btnStart.addEventListener('click', startQuiz);

elements.btnRetry.addEventListener('click', () => {
    showScreen('start');
});

// Perfect score flow - Claim Reward click
elements.btnClaim.addEventListener('click', () => {
    showScreen('mystery');
});

// Open Mystery Box
elements.btnOpenBox.addEventListener('click', () => {
    // Trigger flash animation
    elements.flashEffect.classList.add('flash-active');

    // Scale up cube for impact
    elements.mysteryCube.style.transform = 'scale(5) rotateX(720deg)';
    elements.mysteryCube.style.opacity = '0';

    setTimeout(() => {
        // Play local video file after flash peak
        elements.videoContainer.innerHTML = `
            <video src="Rick roll_ but with different link(720P_HD).mp4" autoplay controls style="width:100%; height:100%; border-radius:16px; object-fit: contain;"></video>
        `;
        showScreen('video');

        // Remove flash effect
        elements.flashEffect.classList.remove('flash-active');
    }, 800);
});

// Allow hitting "Enter" to start the quiz inside input field
elements.usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startQuiz();
    }
});

// --- DOWNLOAD AND UPLOAD CARD LOGIC ---

function downloadCard(cardId) {
    const card = document.getElementById(cardId);
    if (!card) {
        alert('Card not found!');
        return;
    }

    // Temporarily hide upload labels for clean download
    const labels = card.querySelectorAll('.upload-label');
    labels.forEach(l => l.style.display = 'none');

    // Pause animations for clean capture
    card.style.animation = 'none';
    card.style.overflow = 'visible';
    const inner = card.querySelector('.card-inner');
    if (inner) inner.style.overflow = 'visible';

    // Small delay to let styles apply before capture
    setTimeout(() => {
        html2canvas(card, {
            backgroundColor: null,
            scale: 3,
            useCORS: true,
            allowTaint: true,
            logging: false,
            onclone: function(clonedDoc) {
                // Remove ::before pseudo-element animation in clone
                const clonedCard = clonedDoc.getElementById(cardId);
                if (clonedCard) {
                    clonedCard.style.animation = 'none';
                    clonedCard.style.overflow = 'hidden';
                    // Kill the sweep pseudo-element
                    const style = clonedDoc.createElement('style');
                    style.textContent = `
                        .operator-card::before { display: none !important; }
                        .operator-card .card-inner::before { display: none !important; }
                    `;
                    clonedDoc.head.appendChild(style);
                }
            }
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `PrismaX_Operator_${state.username || 'card'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error("Download Error:", err);
            alert('Download failed. Try again.');
        }).finally(() => {
            // Restore styles
            labels.forEach(l => l.style.display = '');
            card.style.animation = '';
            card.style.overflow = '';
            if (inner) inner.style.overflow = '';
        });
    }, 100);
}

// Global Image Upload Handler
document.addEventListener('change', function (e) {
    if (e.target && e.target.classList.contains('upload-pic')) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                document.querySelectorAll('.profile-pic').forEach(img => {
                    img.src = event.target.result;
                });
            };
            reader.readAsDataURL(file);
        }
    }
});
