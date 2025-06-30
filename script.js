  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const typingText = "Type your JEE doubt here...";
const typingEl = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    typingEl.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
