window.onload = function () {
  const hamburger = document.querySelector("#navbar__box_hamburger");
  const mobile_menu = document.querySelector(".navbar__menu");
  var toggle_bool = false;

  hamburger.addEventListener("click", function () {
    mobile_menu.classList.toggle("menu-active");
    toggle_bool = !toggle_bool;
    
    if(toggle_bool)
      hamburger.src = 'cross.png';
    else
      hamburger.src = 'menu.png';
  });
};
