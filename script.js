  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

// ##################

const text = "Type your JEE doubt here...";
const typingTarget = document.getElementById("typing-text");
let i = 0;

function typeIt() {
  if (i < text.length) {
    typingTarget.textContent += text.charAt(i);
    i++;
    setTimeout(typeIt, 100);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typeIt();
});
