//  const links = document.querySelectorAll("a[data-target]");
//     const sections = document.querySelectorAll("section");
//     const hamburger = document.getElementById("hamburger");
//     const navbar = document.getElementById("navbar");

//     let firstClick = true;

//     // Toggle mobile menu
//     hamburger.addEventListener("click", () => {
//       navbar.classList.toggle("show");
//     });

//     // Section switching
//     links.forEach(link => {
//       link.addEventListener("click", () => {
//         links.forEach(l => l.classList.remove("active"));
//         link.classList.add("active");

//         const targetId = link.getAttribute("data-target");

//         if (firstClick) {
//           sections.forEach(sec => {
//             sec.classList.toggle("hidden", sec.id !== targetId);
//           });
//           firstClick = false;
//         } else {
//           sections.forEach(sec => sec.classList.add("hidden"));
//           document.getElementById(targetId).classList.remove("hidden");
//         }

//         // Close nav in mobile after click
//         if (window.innerWidth <= 768) {
//           navbar.classList.remove("show");
//         }
//       });
//     });











//  let currentSlide = 0;
//   const slides = document.querySelectorAll(".slide");

//   function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove("active"));
//     slides[index].classList.add("active");
//   }
//   function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
//   }
//   function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
//   }
//   // 🔥 Auto-slide every 3 seconds
//   setInterval(nextSlide, 3000);













// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll("#navbar a[data-target]");
//   const sections = document.querySelectorAll("#home, #about, #services, #blog, #contact");


//   let firstClick = true; // Track if it's the first click

//   links.forEach(link => {
//     link.addEventListener("click", () => {
//       const targetId = link.getAttribute("data-target");

//       // If it's the first click, hide all except the clicked one
//       if (firstClick) {
//         sections.forEach(sec => {
//           if (sec.id !== targetId) {
//             sec.style.display = "none";
//           }
//         });
//         firstClick = false;
//       } else {
//         // After the first click, always hide all except clicked
//         sections.forEach(sec => sec.style.display = "none");
//         const target = document.getElementById(targetId);
//         if (target) target.style.display = "block";
//       }

//       // Update active class
//       links.forEach(l => l.classList.remove("active"));
//       link.classList.add("active");
//     });
//   });
// });




const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});






 let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  // 🔥 Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);





