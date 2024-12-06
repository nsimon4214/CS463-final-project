const resumeButton = document.getElementById('resume-button');
const resumePopup = document.getElementById('resume-popup');
const closePopup = document.getElementById('close-popup');

// open the popup when the button is clicked
resumeButton.addEventListener('click', () => {
  resumePopup.style.display = 'block';
});

// close the popup when the close 'x' button is clicked
closePopup.addEventListener('click', () => {
  resumePopup.style.display = 'none';
});

// also can close the popup when clicking outside the popup
window.addEventListener('click', (event) => {
  if (event.target === resumePopup) {
    resumePopup.style.display = 'none';
  }
});
