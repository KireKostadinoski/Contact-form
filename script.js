const submit = document.getElementById("submitBtn");
const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const firstRadio = document.getElementById("firstRadio");
const secondRadio = document.getElementById("secondRadio");
const messageInput = document.getElementById("textMsg");
const checkboxInput = document.getElementById("checkboxInput");

const divGeneral = document.getElementById("divGeneral");
const divSupport = document.getElementById("divSupport");

const successDiv = document.getElementById("success");

const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorQuery = document.getElementById("errorQuery");
const errorMsg = document.getElementById("errorMsg");
const errorCheckbox = document.getElementById("errorConsent");

submit.addEventListener("click", () => {
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    emailInput.value.length > 0 &&
    (firstRadio.checked || secondRadio.checked) &&
    messageInput.value.length > 0 &&
    checkboxInput.checked
  ) {
    successDiv.classList.remove("hidden");
  }

  if (firstName.value.length === 0) {
    errorFirstName.innerHTML = "This field is required";
    firstName.classList.add("border-red-600");
    firstName.classList.remove("border-gray-300");
  } else {
    firstName.classList.remove("border-red-600");
    firstName.classList.add("border-gray-300");
    errorFirstName.innerHTML = "";
  }

  if (lastName.value.length === 0) {
    errorLastName.innerHTML = "This field is required";
    lastName.classList.add("border-red-600");
    lastName.classList.remove("border-gray-300");
  } else {
    lastName.classList.remove("border-red-600");
    lastName.classList.add("border-gray-300");
    errorLastName.innerHTML = "";
  }

  if (emailInput.value.length === 0) {
    errorEmail.innerHTML = "Please enter a valid email address";
    emailInput.classList.add("border-red-600");
    emailInput.classList.remove("border-gray-300");
  } else {
    errorEmail.innerHTML = "";
    emailInput.classList.remove("border-red-600");
    emailInput.classList.add("border-gray-300");
  }

  if (!firstRadio.checked && !secondRadio.checked) {
    errorQuery.innerHTML = "Please select a query type";
  } else {
    errorQuery.innerHTML = "";
  }

  if (firstRadio.checked) {
    divGeneral.classList.add("bg-green-200");
  }

  if (secondRadio.checked) {
    divSupport.classList.add("bg-green-200");
  }

  if (messageInput.value.length === 0) {
    errorMsg.innerHTML = "This field is required";
    messageInput.classList.add("border-red-600");
    messageInput.classList.remove("border-gray-300");
  } else {
    messageInput.classList.remove("border-red-600");
    messageInput.classList.add("border-gray-300");
    errorMsg.innerHTML = "";
  }

  if (!checkboxInput.checked) {
    errorCheckbox.innerHTML =
      "To submit this form please consent to being contacted";
  } else {
    errorCheckbox.innerHTML = "";
  }
});
