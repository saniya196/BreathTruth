document.addEventListener("DOMContentLoaded", function () {
  const reportForm = document.getElementById("reportForm");

  if (reportForm) {
    reportForm.addEventListener("submit", function (e) {
      e.preventDefault();

      clearErrors();

      let isValid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const severity = document.getElementById("severity").value;
      const location = document.getElementById("location").value.trim();
      const pincode = document.getElementById("pincode").value.trim();
      const description = document.getElementById("description").value.trim();
      const terms = document.getElementById("terms").checked;
      const symptoms = document.querySelectorAll(".symptom:checked");

      // Name validation (optional, but if entered should be valid)
      if (name !== "" && name.length < 3) {
        showError("nameError", "Name must be at least 3 characters long.");
        isValid = false;
      }

      // Email validation (optional)
      if (email !== "" && !validateEmail(email)) {
        showError("emailError", "Enter a valid email address.");
        isValid = false;
      }

      // Symptoms validation
      if (symptoms.length === 0) {
        showError("symptomError", "Please select at least one symptom.");
        isValid = false;
      }

      // Severity validation
      if (severity === "") {
        showError("severityError", "Please select severity.");
        isValid = false;
      }

      // Location validation
      if (location === "") {
        showError("locationError", "Location is required.");
        isValid = false;
      } else if (location.length < 3) {
        showError("locationError", "Location must be at least 3 characters.");
        isValid = false;
      }

      // Pincode validation
      if (pincode === "") {
        showError("pincodeError", "Pincode is required.");
        isValid = false;
      } else if (!/^\d{6}$/.test(pincode)) {
        showError("pincodeError", "Pincode must be exactly 6 digits.");
        isValid = false;
      }

      // Description validation
      if (description === "") {
        showError("descriptionError", "Description is required.");
        isValid = false;
      } else if (description.length < 10) {
        showError("descriptionError", "Description must be at least 10 characters.");
        isValid = false;
      } else if (description.length > 250) {
        showError("descriptionError", "Description must not exceed 250 characters.");
        isValid = false;
      }

      // Terms validation
      if (!terms) {
        showError("termsError", "You must confirm before submission.");
        isValid = false;
      }

      if (isValid) {
        document.getElementById("successMessage").innerText =
          "Report submitted successfully! This is a demo submission for Review 1.";
        reportForm.reset();
      }
    });
  }
});

function showError(id, message) {
  document.getElementById(id).innerText = message;
}

function clearErrors() {
  const errorFields = document.querySelectorAll(".error-message");
  errorFields.forEach((field) => {
    field.innerText = "";
  });

  const successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.innerText = "";
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}