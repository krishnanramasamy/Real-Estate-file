const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});



  // Animate timeline when in view
  const timelineContents = document.querySelectorAll(".timeline-content");
  
  function checkScroll() {
    timelineContents.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("load", checkScroll);

