// Get the HTML elements we need
const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");


// Function to open the modal window
function openModal() {
// Display the modal window
  modal.style.display = "block";
// Add class to body to prevent scrolling of background content
  document.body.classList.add("modal-open");
// Add class to modal window to show it with CSS animation
  setTimeout(() => {
    modal.classList.add("open");
  }, 10);
  window.addEventListener("click", closeOutsideModal);
  document.addEventListener("keydown", closeOnEsc);
}

// Function to close the modal window
function closeModal() {
// Remove class from modal window to hide it with CSS animation
  modal.classList.remove("open");
// Remove class from modal window to hide it with CSS animation
  setTimeout(() => {
    modal.style.display = "none";
    // Remove class from body to allow scrolling of background content
    document.body.classList.remove("modal-open");
  }, 500);
  window.removeEventListener("click", closeOutsideModal);
  document.removeEventListener("keydown", closeOnEsc);
}

function closeOutsideModal(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function closeOnEsc(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
}
// Add event listeners to open and close the modal window
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

