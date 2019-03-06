"use strict";

(function () {

  var navMain = document.querySelector(".navigation");
  var navToggle = document.querySelector(".navigation__toggle");
  var logo = document.querySelector(".js-logo");

  // navMain.classList.remove("navigation--nojs");

  navToggle.addEventListener("click", function () {

    if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
      document.querySelector('body').style.overflow = 'visible';
    }
  });

})();

// (function () {
//   var menu = document.querySelector('.mobile-menu__cities');
//   var btn = menu.querySelector('.mobile-menu__city.button');
//   var list = document.querySelector('.mobile-menu__list-cities');
//   btn.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     if (list.classList.contains('mobile-menu__list-cities--active')) {
//       list.classList.remove('mobile-menu__list-cities--active');
//     } else {
//       list.classList.add('mobile-menu__list-cities--active');
//     }
//   })
// })();

