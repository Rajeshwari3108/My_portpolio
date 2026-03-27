// Scroll button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Animate skills
window.addEventListener("scroll", () => {
  let skills = document.getElementById("skills");
  let pos = skills.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "90%";
    document.querySelector(".js").style.width = "90%";
    document.querySelector(".java").style.width = "90%";
  }
});