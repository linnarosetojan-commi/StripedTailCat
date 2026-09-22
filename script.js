document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const themeToggle = document.getElementById('theme-toggle');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const icon = themeToggle.querySelector('.icon');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.remove('sun-icon');
    icon.classList.add('moon-icon');
  }

  themeToggle.setAttribute(
    'aria-label',
    document.body.classList.contains('dark-theme')
      ? 'Switch to light mode'
      : 'Switch to dark mode'
  );
  themeToggle.title = themeToggle.getAttribute('aria-label');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    icon.classList.toggle('sun-icon', !isDark);
    icon.classList.toggle('moon-icon', isDark);
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
    themeToggle.title = themeToggle.getAttribute('aria-label');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
