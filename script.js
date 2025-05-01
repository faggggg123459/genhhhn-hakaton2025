// Анімація появи тексту
document.addEventListener("DOMContentLoaded", () => {
  const description = document.querySelector(".description");
  description.style.opacity = "0";
  setTimeout(() => {
    description.style.opacity = "1";
    description.style.transition = "opacity 1.5s";
  }, 500);
});

// Обробник кліку на кнопку START
document.getElementById("startQuiz").addEventListener("click", () => {
  alert("Готовий пройти тест на знання магічних героїв?");
});

// Динамічні ефекти на кнопці
const button = document.querySelector(".glow-btn");
button.addEventListener("mouseover", () => {
  button.style.transform = "scale(1.1)";
});
button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)";
});
