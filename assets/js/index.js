// Get elements
const header = document.querySelector("header");
const navItemContainer = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".hamburger");

// func handling toggling
const toggleMobileMenu = () => {
  navItemContainer.classList.toggle("open");
  header.classList.toggle("open-menu");
};

// Bind func to toggleButton
toggleButton.addEventListener("click", toggleMobileMenu);

/*  Image layouts */

// Get elements
const switchButton = document.querySelector(".view-switch");
const articleTagParent = document.querySelector(".members");

// Func handling image switch
const toggleView = () => {
  if (articleTagParent.classList.contains("two-column")) {
    articleTagParent.classList.remove("two-column");
    switchButton.innerHTML = `
    <i class="fas fa-toggle-off"></i>
    `;
  } else {
    articleTagParent.classList.add("two-column");
    switchButton.innerHTML = `
    <i class="fas fa-toggle-on"></i>
    `;
  }
};

// Bind func to switch
switchButton.addEventListener("click", toggleView);

// toggleView();
