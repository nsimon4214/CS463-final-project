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

// scroll to top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = '↑ Top';
scrollTopButton.id = 'scroll-top-button';
document.body.appendChild(scrollTopButton);

scrollTopButton.style.display = 'none';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '1em';
scrollTopButton.style.backgroundColor = '#a2106d';
scrollTopButton.style.color = '#fefefe';
scrollTopButton.style.border = 'none';
scrollTopButton.style.borderRadius = '5px';
scrollTopButton.style.cursor = 'pointer';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});