const questions = [
  {
    question: "Яка стихія належить Венті?",
    options: ["Гео", "Анемо", "Піро", "Гідро"],
    correct: 1,
  },
  {
    question: "Як називається регіон, яким керує Джонлі?",
    options: ["Мондштадт", "Інадзума", "Ліюе", "Снєжна"],
    correct: 2,
  },
  {
    question: "Який персонаж є директором похоронного бюро в Ліюе?",
    options: ["Камісато Аяка", "Ху Тао", "Гань Юй", "Нахіда"],
    correct: 1,
  },
  {
    question: "Яка стихія належить Райден Шьоґун?",
    options: ["Електро", "Кріо", "Гідро", "Дендро"],
    correct: 0,
  },
  {
    question: "Який персонаж володіє алхімічними здібностями?",
    options: ["Альбедо", "Тарталья", "Сяо", "Ділюк"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = questions[currentQuestionIndex].question;
  optionsEl.innerHTML = "";

  questions[currentQuestionIndex].options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].correct) {
    score++;
  }
  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  document.getElementById("nextBtn").style.display = "none";

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById(
      "result"
    ).textContent = `Тест завершено! Твій результат: ${score}/${questions.length}`;
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("quiz-box").classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
