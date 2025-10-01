const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function handleMenu() {
  if (!menuList.classList.contains("active")) {
    menuList.classList.add("active");
    menuButton.setAttribute("aria-expanded", "true");

    function closeMenu() {
      menuList.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }

    handleOutside(closeMenu);
  }
}

function handleOutside(callback) {
  const html = document.documentElement;
  html.addEventListener("click", handleClickOutside);

  function handleClickOutside(event) {
    const target = event.target;

    if (!menuButton.contains(target) && !menuList.contains(target)) {
      html.removeEventListener("click", handleClickOutside);
      callback();
    }
  }
}

menuButton.addEventListener("click", handleMenu);
