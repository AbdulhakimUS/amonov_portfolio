// preloader
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
    }, 500); // Подождать 500ms после исчезновения
  }, 2000); // Прелоадер будет виден 2 секунды
});

// dark mode
var darkModeToggle = document.getElementById("darkModeToggle");
let bobElements = document.querySelectorAll('.contact, .container-about-me');
let CardTransformation = document.querySelectorAll('.card-skills');


if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    bobElements.forEach(el => el.classList.add('dark-blue-mode'));

    CardTransformation.forEach(el => el.classList.add('dark-card-skills')); // Исправлено!
    
    darkModeToggle.textContent = "☀️";
}


darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    bobElements.forEach(el => el.classList.toggle('dark-blue-mode'));
    
    CardTransformation.forEach(el => el.classList.toggle('dark-card-skills')); // Исправлено!

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "🌙";
    }
});

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY; // Текущая прокрутка
  var windowHeight = window.innerHeight; // Высота окна
  var documentHeight = document.documentElement.scrollHeight; // Полная высота страницы
  var darkModeToggle = document.getElementById("darkModeToggle");

  if (scrollTop + windowHeight >= documentHeight - 10) { // Если достигли конца страницы
      darkModeToggle.classList.add("show");
      darkModeToggle.classList.remove("hide");
  } else {
      darkModeToggle.classList.add("hide");
      setTimeout(() => darkModeToggle.classList.remove("show"), 300); // Убираем show после анимации
  }
});



// scroll to top 
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("show");
        scrollToTopBtn.classList.remove("hide");
    } else {
        scrollToTopBtn.classList.add("hide");
        setTimeout(() => scrollToTopBtn.classList.remove("show"), 300); // Hide after fade-out
    }
};  

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


const toggleBtn = document.querySelector('.navbar-toggler-icon');
const toggleBtnIcon = document.querySelector('.navbar-toggler-icon');
const dropDownMenu = document.querySelector('.Dropdown-menu');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
    dropDownMenu.style.display = isOpen ? 'none' : 'block';
    toggleBtnIcon.className = isOpen
      ? 'fa-solid fa-bars'
      : 'fa-solid fa-xmark';
    isOpen = !isOpen;
  });