/*====Hamburger menu JS Code ====*/
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});






/*==== navigation JS Code ====*/
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const targetId = this.dataset.target || (href && href.startsWith("#") ? href.substring(1) : null);

      if (targetId) {
        // Prevent only for section toggle links
        e.preventDefault();

        // Hide all sections
        sections.forEach(sec => sec.style.display = "none");

        // Show clicked section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
        }
      }
      // else → normal link like index.html works normally
    });
  });
});












