document.addEventListener("DOMContentLoaded", () => {
  const scheduleBtn = document.getElementById("scheduleBtn");
  const checkboxes = document.querySelectorAll(".slot-checkbox");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // Close the pop-up
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Ensure only one checkbox is selected at a time
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        // Uncheck all other checkboxes
        checkboxes.forEach((cb) => {
          if (cb !== e.target) {
            cb.checked = false;
          }
        });
      }
    });
  });

  // Check for full slots and show pop-up if selected
  scheduleBtn.addEventListener("click", () => {
    let selectedSlot = null;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const isFull = checkbox.dataset.full === "true";
        if (isFull) {
          popup.style.display = "block";
          selectedSlot = null; // Reset selected slot
        } else {
          selectedSlot = checkbox;
        }
      }
    });

    if (selectedSlot) {
      alert("Meeting scheduled successfully!");
    } else if (!popup.style.display) {
      alert("Please select a valid slot!");
    }
  });
});
