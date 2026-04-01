const STORAGE_KEY = "breathtruthReports";
const MAX_REPORTS = 50;
const MAX_DESCRIPTION_LENGTH = 250;

let reportsViewState = {
  severity: "all",
  location: "",
  sort: "latest"
};

document.addEventListener("DOMContentLoaded", function () {
  initializeReportForm();
  initializeReportsView();
});

function initializeReportForm() {
  const reportForm = document.getElementById("reportForm");
  if (!reportForm) {
    return;
  }

  initializeDescriptionCounter();

  const fieldRules = {
    name: {
      errorId: "nameError",
      validate: (value) => {
        if (value !== "" && value.length < 3) {
          return "Name must be at least 3 characters long.";
        }
        return "";
      }
    },
    email: {
      errorId: "emailError",
      validate: (value) => {
        if (value !== "" && !validateEmail(value)) {
          return "Enter a valid email address.";
        }
        return "";
      }
    },
    severity: {
      errorId: "severityError",
      validate: (value) => (value === "" ? "Please select severity." : "")
    },
    location: {
      errorId: "locationError",
      validate: (value) => {
        if (value === "") {
          return "Location is required.";
        }
        if (value.length < 3) {
          return "Location must be at least 3 characters.";
        }
        return "";
      }
    },
    pincode: {
      errorId: "pincodeError",
      validate: (value) => {
        if (value === "") {
          return "Pincode is required.";
        }
        if (!/^\d{6}$/.test(value)) {
          return "Pincode must be exactly 6 digits.";
        }
        return "";
      }
    },
    description: {
      errorId: "descriptionError",
      validate: (value) => {
        if (value === "") {
          return "Description is required.";
        }
        if (value.length < 10) {
          return "Description must be at least 10 characters.";
        }
        if (value.length > 250) {
          return "Description must not exceed 250 characters.";
        }
        return "";
      }
    },
    terms: {
      errorId: "termsError",
      validate: (_, element) => (!element.checked ? "You must confirm before submission." : "")
    }
  };

  Object.keys(fieldRules).forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!field) {
      return;
    }
    const eventName = field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, function () {
      validateField(fieldId, fieldRules[fieldId]);
    });
  });

  const symptomInputs = document.querySelectorAll(".symptom");
  symptomInputs.forEach((checkbox) => {
    checkbox.addEventListener("change", validateSymptoms);
  });

  reportForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;
    Object.keys(fieldRules).forEach((fieldId) => {
      const fieldIsValid = validateField(fieldId, fieldRules[fieldId]);
      if (!fieldIsValid) {
        isValid = false;
      }
    });

    if (!validateSymptoms()) {
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const reportData = buildReportData();
    saveReport(reportData);

    const successMessage = document.getElementById("successMessage");
    if (successMessage) {
      successMessage.innerText = "Report submitted successfully and added to Live Reports!";
    }

    reportForm.reset();
    clearFieldStates();
    updateDescriptionCounter();
  });
}

function initializeDescriptionCounter() {
  const descriptionField = document.getElementById("description");
  if (!descriptionField) {
    return;
  }

  descriptionField.addEventListener("input", updateDescriptionCounter);
  updateDescriptionCounter();
}

function updateDescriptionCounter() {
  const descriptionField = document.getElementById("description");
  const counter = document.getElementById("descriptionCounter");
  if (!descriptionField || !counter) {
    return;
  }

  const currentLength = descriptionField.value.length;
  counter.innerText = currentLength + " / " + MAX_DESCRIPTION_LENGTH;
  counter.classList.toggle("text-danger", currentLength > MAX_DESCRIPTION_LENGTH);
}

function initializeReportsView() {
  const reportsRow = document.getElementById("userReportsRow");
  if (!reportsRow) {
    return;
  }

  const severityFilter = document.getElementById("filterSeverity");
  const locationFilter = document.getElementById("filterLocation");
  const sortControl = document.getElementById("sortReports");
  const exportButton = document.getElementById("exportReportsBtn");

  if (severityFilter) {
    severityFilter.addEventListener("change", function () {
      reportsViewState.severity = severityFilter.value;
      renderSavedReports();
    });
  }

  if (locationFilter) {
    locationFilter.addEventListener("input", function () {
      reportsViewState.location = locationFilter.value.trim().toLowerCase();
      renderSavedReports();
    });
  }

  if (sortControl) {
    sortControl.addEventListener("change", function () {
      reportsViewState.sort = sortControl.value;
      renderSavedReports();
    });
  }

  if (exportButton) {
    exportButton.addEventListener("click", exportReportsToCsv);
  }

  renderSavedReports();
}

function validateField(fieldId, rule) {
  const field = document.getElementById(fieldId);
  if (!field) {
    return true;
  }

  const value = field.type === "checkbox" ? field.checked : field.value.trim();
  const errorMessage = rule.validate(value, field);
  setFieldErrorState(field, rule.errorId, errorMessage);
  return errorMessage === "";
}

function validateSymptoms() {
  const symptoms = document.querySelectorAll(".symptom");
  if (symptoms.length === 0) {
    return true;
  }

  const hasSelection = document.querySelectorAll(".symptom:checked").length > 0;
  const errorMessage = hasSelection ? "" : "Please select at least one symptom.";

  showError("symptomError", errorMessage);
  symptoms.forEach((checkbox) => {
    checkbox.classList.toggle("is-invalid", !hasSelection);
    checkbox.setAttribute("aria-invalid", String(!hasSelection));
  });

  return hasSelection;
}

function setFieldErrorState(field, errorId, message) {
  showError(errorId, message);
  const hasError = message !== "";
  field.classList.toggle("is-invalid", hasError);
  field.setAttribute("aria-invalid", String(hasError));
}

function showError(id, message) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.innerText = message;
  }
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

function clearFieldStates() {
  const invalidInputs = document.querySelectorAll(".is-invalid");
  invalidInputs.forEach((input) => {
    input.classList.remove("is-invalid");
    input.setAttribute("aria-invalid", "false");
  });
}

function buildReportData() {
  const symptoms = Array.from(document.querySelectorAll(".symptom:checked")).map((item) => item.value);
  const nameValue = document.getElementById("name").value.trim();

  return {
    name: nameValue === "" ? "Anonymous" : nameValue,
    email: document.getElementById("email").value.trim(),
    symptoms,
    severity: document.getElementById("severity").value,
    location: document.getElementById("location").value.trim(),
    pincode: document.getElementById("pincode").value.trim(),
    description: document.getElementById("description").value.trim(),
    reportedAt: new Date().toISOString()
  };
}

function saveReport(reportData) {
  const reports = getSavedReports();
  reports.unshift(reportData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports.slice(0, MAX_REPORTS)));
}

function getSavedReports() {
  const rawData = localStorage.getItem(STORAGE_KEY);
  if (!rawData) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawData);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function renderSavedReports() {
  const reportsRow = document.getElementById("userReportsRow");
  if (!reportsRow) {
    return;
  }

  const emptyState = document.getElementById("userReportsEmpty");
  const countLabel = document.getElementById("userReportsCount");
  const reports = getVisibleReports();
  reportsRow.innerHTML = "";

  if (reports.length === 0) {
    if (emptyState) {
      emptyState.style.display = "block";
    }
    if (countLabel) {
      countLabel.innerText = "0 reports";
    }
    return;
  }

  if (emptyState) {
    emptyState.style.display = "none";
  }

  if (countLabel) {
    countLabel.innerText = reports.length + (reports.length === 1 ? " report" : " reports");
  }

  reports.forEach((report) => {
    reportsRow.appendChild(createReportCard(report));
  });
}

function getVisibleReports() {
  const reports = getSavedReports();
  const filtered = reports.filter((report) => {
    const severityMatch = reportsViewState.severity === "all" || report.severity === reportsViewState.severity;
    const locationMatch = reportsViewState.location === "" ||
      (report.location || "").toLowerCase().includes(reportsViewState.location);
    return severityMatch && locationMatch;
  });

  return sortReports(filtered, reportsViewState.sort);
}

function sortReports(reports, sortBy) {
  const severityScore = {
    Mild: 1,
    Moderate: 2,
    Severe: 3
  };

  const sorted = [...reports];
  if (sortBy === "oldest") {
    sorted.sort((a, b) => new Date(a.reportedAt) - new Date(b.reportedAt));
    return sorted;
  }

  if (sortBy === "severityHigh") {
    sorted.sort((a, b) => (severityScore[b.severity] || 0) - (severityScore[a.severity] || 0));
    return sorted;
  }

  if (sortBy === "severityLow") {
    sorted.sort((a, b) => (severityScore[a.severity] || 0) - (severityScore[b.severity] || 0));
    return sorted;
  }

  sorted.sort((a, b) => new Date(b.reportedAt) - new Date(a.reportedAt));
  return sorted;
}

function exportReportsToCsv() {
  const reports = getVisibleReports();
  const status = document.getElementById("exportStatus");

  if (reports.length === 0) {
    if (status) {
      status.innerText = "No reports to export for the current filters.";
    }
    return;
  }

  const headers = ["Name", "Email", "Symptoms", "Severity", "Location", "Pincode", "Description", "Reported At"];
  const rows = reports.map((report) => [
    report.name || "",
    report.email || "",
    (report.symptoms || []).join("; "),
    report.severity || "",
    report.location || "",
    report.pincode || "",
    report.description || "",
    formatDateTime(report.reportedAt)
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map(csvEscape).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  const dateStamp = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = "breathtruth-reports-" + dateStamp + ".csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  if (status) {
    status.innerText = "CSV exported successfully.";
  }
}

function csvEscape(value) {
  const safeValue = String(value ?? "").replace(/"/g, '""');
  return '"' + safeValue + '"';
}

function createReportCard(report) {
  const column = document.createElement("div");
  column.className = "col-md-6 col-lg-4";

  const card = document.createElement("div");
  card.className = "card report-card shadow-sm border-0 h-100";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const location = document.createElement("h5");
  location.className = "fw-bold";
  location.innerText = report.location;

  const description = document.createElement("p");
  description.innerText = report.description;

  const symptomText = document.createElement("p");
  symptomText.className = "small text-muted mb-2";
  symptomText.innerText = report.symptoms.join(" + ");

  const badge = document.createElement("span");
  const severityClassMap = {
    Mild: "bg-success",
    Moderate: "bg-warning text-dark",
    Severe: "bg-danger"
  };
  badge.className = "badge " + (severityClassMap[report.severity] || "bg-secondary");
  badge.innerText = (report.severity || "Unknown").toUpperCase();

  const meta = document.createElement("p");
  meta.className = "small text-muted mt-3 mb-0";
  const timestamp = formatDateTime(report.reportedAt);
  meta.innerText = "Reported by " + report.name + " | " + timestamp;

  cardBody.appendChild(location);
  cardBody.appendChild(description);
  cardBody.appendChild(symptomText);
  cardBody.appendChild(badge);
  cardBody.appendChild(meta);

  card.appendChild(cardBody);
  column.appendChild(card);
  return column;
}

function formatDateTime(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return "just now";
  }

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}