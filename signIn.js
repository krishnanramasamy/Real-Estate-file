const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

const showSignin = document.getElementById("showSignin");
const showSignup = document.getElementById("showSignup");

// Show Sign In Form
showSignin.addEventListener("click", (e) => {
  e.preventDefault();
  signinForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  showSignin.classList.add("active");
  showSignup.classList.remove("active");
});

// Show Sign Up Form
showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("hidden");
  signinForm.classList.add("hidden");
  showSignup.classList.add("active");
  showSignin.classList.remove("active");
});









const switchToSignup = document.getElementById("switchToSignup");
const switchToSignin = document.getElementById("switchToSignin");

// Switch from Sign In → Sign Up (inside form link)
switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("hidden");
  signinForm.classList.add("hidden");
  showSignup.classList.add("active");
  showSignin.classList.remove("active");
});

// Switch from Sign Up → Sign In (inside form link)
switchToSignin.addEventListener("click", (e) => {
  e.preventDefault();
  signinForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  showSignin.classList.add("active");
  showSignup.classList.remove("active");
});








const signinForm1 = document.getElementById("signinForm");
const signupForm1 = document.getElementById("signupForm");

signupForm1.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  // Optional: Validate inputs (e.g., password match)
  if (password !== confirm) {
    alert("Passwords don't match. Please try again.");
    return;
  }

  // Save the signup email in localStorage
  localStorage.setItem("signedUpEmail", email);

  alert("You have successfully signed up!");
  signupForm.reset();
});

signinForm1.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value;
  const registeredEmail = localStorage.getItem("signedUpEmail");

  if (email === registeredEmail) {
    alert("You have successfully signed in!");
    signinForm1.reset();
  } else {
    alert("Error: This email is not registered. Please sign in first or use the registered email.");
  }
});

