const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function handleMenu() {
  const isActive = menuList.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", isActive);

  if (isActive) {
    handleOutside(() => {
      menuList.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
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
