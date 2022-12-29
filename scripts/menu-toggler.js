import { addClass, removeClass } from "./utils-class.js";

const menuTogglerId = document.getElementById("menu-toggler");
const menu = document.getElementById("menu");
const navBrand = document.getElementById("nav-brand");

menuTogglerId.addEventListener("click", function() {
    const menuId = document.getElementById("menu");
    
    if (menuId.className.indexOf("hidden") > -1) {
        addClass(menuTogglerId, "z-50");
        // removeClass(menuTogglerId, "relative");
        addClass(menuId, "flex absolute inset-0 bg-black1 h-screen");
        removeClass(menuId, "hidden");
      } else {
        removeClass(menuTogglerId, "z-50");
        // addClass(menuTogglerId, "relative");
        addClass(menuId, "hidden");
        removeClass(menuId, "flex absolute inset-0 bg-black1 h-screen");
      }
})


menu.addEventListener("click", function() {
  const menuId = document.getElementById("menu");
  
  if (menuId.className.indexOf("flex") > -1) {
    removeClass(menuTogglerId, "z-50");
    // addClass(menuTogglerId, "relative");
    addClass(menuId, "hidden");
    removeClass(menuId, "flex absolute inset-0 bg-black1 h-screen");
  } 

})


navBrand.addEventListener("click", function() {
  const menuId = document.getElementById("menu");
  
  if (menuId.className.indexOf("flex") > -1) {
    removeClass(menuTogglerId, "z-50");
    // addClass(menuTogglerId, "relative");
    addClass(menuId, "hidden");
    removeClass(menuId, "flex absolute inset-0 bg-black1 h-screen");
  } 
})