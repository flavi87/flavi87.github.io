const menuIcon = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');

menuIcon.addEventListener('click', () => {
  menuDropdown.classList.toggle('show');
});
