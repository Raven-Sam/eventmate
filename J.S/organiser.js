// JavaScript to handle file upload name display
const uploadInput = document.getElementById("upload");

uploadInput.addEventListener("change", () => {
  if (uploadInput.files.length > 0) {
    alert(`File uploaded: ${uploadInput.files[0].name}`);
  }
});

// Example: Form validation or submission handling
const saveButton = document.querySelector(".save-btn");

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Profile saved successfully!");
});
