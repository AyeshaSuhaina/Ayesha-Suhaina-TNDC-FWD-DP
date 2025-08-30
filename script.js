// Navbar toggle

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Footer year

document.getElementById("year").textContent = new Date().getFullYear();

// Contact form

const form = document.getElementById("contactForm");

const preview = document.getElementById("preview");

const prevName = document.getElementById("prevName");

const prevEmail = document.getElementById("prevEmail");

const prevMessage = document.getElementById("prevMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {

    alert("Please fill all fields!");

    return;

  }

  prevName.textContent = name;

  prevEmail.textContent = email;

  prevMessage.textContent = message;

  preview.classList.remove("hidden");

  const btn = form.querySelector("button");

  btn.classList.add("glow");

  setTimeout(() => btn.classList.remove("glow"), 1500);

  form.reset();

});