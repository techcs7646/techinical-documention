// Selecting elements
const themeToggle = document.getElementById('themeToggle');
const sidebar = document.getElementById('sidebar');
const collapsibleElements = document.querySelectorAll('.collapsible');
const searchBox = document.getElementById('searchBox');
const sections = document.querySelectorAll('main section');

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  themeToggle.setAttribute(
    'data-tooltip',
    isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
  );
});

// Collapsible Menu Toggle
collapsibleElements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('expanded');
    const submenu = element.nextElementSibling;
    if (submenu) {
      submenu.classList.toggle('hidden');
    }
  });
});

// Search Functionality
searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  sections.forEach((section) => {
    const content = section.textContent.toLowerCase();
    section.style.display = content.includes(query) ? 'block' : 'none';
  });
});

// Copy Button for Code Blocks
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('copy-btn')) {
    const codeBlock = event.target.previousElementSibling.textContent;
    navigator.clipboard.writeText(codeBlock).then(() => {
      alert('Code copied to clipboard!');
    });
  }
});

// Smooth Scroll for Sidebar Links
sidebar.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
