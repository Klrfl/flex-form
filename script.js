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
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <span class="bold">${email}</span>. Please open it and click the button inside to
        confirm your subscription. 
      </p>
      <button class="btn--submit">Dismiss message</button>
      `;
  mainContainer.style.display = "none";
  successMessage.style.display = "block";

  // add event listener after adding innerHTML
  const dismissBtn = document.querySelector(".success-message .btn--submit");

  dismissBtn.addEventListener("click", () => {
    mainContainer.style.display = "flex";
    successMessage.style.display = "none";
  });
});
