const menuContainer = document.querySelector(".menu-container");
const menuDropdown = document.querySelector(".menu-dropdown");

console.log(menuContainer); // Verifica si el selector está devolviendo el elemento correcto
console.log(menuDropdown); // Verifica si el selector está devolviendo el elemento correcto

menuContainer.addEventListener("click", function() {
  console.log("Se hizo clic en el botón"); // Verifica si se está llamando la función cuando se hace clic en el botón
  menuDropdown.classList.toggle("active");
});

/*const menuContainer = document.querySelector(".menu-container");
const menuDropdown = document.querySelector(".menu-dropdown");

menuContainer.addEventListener("click", function() {
  menuDropdown.classList.toggle("active");
});*/
