// ============================
// Assignment 1 - Interactivity
// ============================

// 1) Greeting message by time of day
(function setGreeting() {
  const greetingEl = document.getElementById("greeting");
  if (!greetingEl) return;

  const hour = new Date().getHours();

  let message = "Welcome!";
  if (hour >= 5 && hour < 12) message = "Good morning ☀️";
  else if (hour >= 12 && hour < 17) message = "Good afternoon 🌤️";
  else if (hour >= 17 && hour < 22) message = "Good evening 🌙";
  else message = "Hope you’re having a calm night 🌌";

  greetingEl.textContent = message;
})();

// 2) Contact form interaction (no backend)
// - Prevent submit
// - Show a status message
(function handleContactForm() {
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("formStatus");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.textContent = "✅ Message ready! (No backend in this assignment, so this is a demo interaction.)";

    // Optional: clear inputs after a short delay
    setTimeout(() => {
      form.reset();
    }, 800);
  });
})();
