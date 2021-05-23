const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const question = document.querySelector("#question");
const questionError = document.querySelector("#questionError");

function validateForm() {
  event.preventDefault();

  if (name.value.trim().length > 5) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (subject.value.trim().length < 15) {
    subjectError.style.display = "block";
  } else {
    subjectError.style.display = "none";
  }

  if (validateEmail(email.value) === false) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  if (question.value.trim().length < 25) {
    questionError.style.display = "block";
  } else {
    questionError.style.display = "none";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);

  return patternMatches;
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", () => {
  if (
    name.value.trim().length > 5 &&
    subject.value.trim().length > 15 &&
    validateEmail(email.value) === true &&
    question.value.trim().length > 25
  ) {
    alert("Thank you for contact me!");
  }
});
