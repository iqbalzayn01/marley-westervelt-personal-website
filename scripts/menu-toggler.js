import { addClass, removeClass } from "./utils-class.js";

const menuTogglerId = document.getElementById("menu-toggler");
const menu = document.getElementById("menu");
const navBrand = document.getElementById("nav-brand");
const menuId = document.getElementById("menu");

menuTogglerId.addEventListener("click", function() {
  const nav = document.getElementById("nav");
  const navbar = document.getElementById("navbar");

  if (menuId.className.indexOf("hidden") > -1) {
      addClass(menuTogglerId, "z-50");
      addClass(menuId, "flex py-20 absolute inset-0 bg-black1 h-screen");
      addClass(nav, "hidden");
      addClass(navbar, "pt-8");
      removeClass(menuId, "hidden");
      removeClass(nav, "relative");
  } else {
    removeClass(menuTogglerId, "z-50");
    addClass(menuId, "hidden");
    addClass(nav, "relative");
    removeClass(menuId, "flex py-20 absolute inset-0 bg-black1 h-screen");
    removeClass(nav, "hidden");
    removeClass(navbar, "pt-8");
  }
})


function navToggler() {
  if (menuId.className.indexOf("flex") > -1) {
    removeClass(menuId, "flex py-20 absolute inset-0 bg-black1 h-screen");
    removeClass(menuTogglerId, "z-50");
    removeClass(nav, "hidden");
    removeClass(navbar, "pt-8");
    addClass(menuId, "hidden");
    addClass(nav, "relative");
  }
  return navToggler();
}


navBrand.addEventListener("click", function() {
  navToggler();
})


menu.addEventListener("click", function() {
  navToggler();
})