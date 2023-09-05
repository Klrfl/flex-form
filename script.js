const mainForm = document.querySelector(".form-wrapper__main-form");
const mainContainer = document.querySelector(".main-container");
const successMessage = document.querySelector(".success-message");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(mainForm);
  let email;

  for (const [key, value] of formData) {
    email = value;
  }

  successMessage.innerHTML = `
      <p>
        Thanks for subscribing! A confirmation email has been sent to
        ${email}. Please open it and click the button inside to
        confirm your subscription. Dismiss message
      </p>
      `;
  mainContainer.style.display = "none";
  successMessage.style.display = "block";
});
