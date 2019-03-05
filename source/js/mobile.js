"use strict";

(function () {
  var mobileCatalog = document.querySelector('.mobile-catalog');
  // var mobileMenu = document.querySelector('.mobile-menu');
  var mobileCatalogBtn = document.querySelector('.mobile-sidebar__catalog-btn');
  var mobileBtnClose = document.querySelector('.mobile-catalog__close');

  //var navMain = document.querySelector(".navigation");
  var navMain = document.querySelector(".mobile-menu");
  var navToggle = document.querySelector(".navigation__toggle");
  var logo = document.querySelector(".js-logo");

  // navMain.classList.remove("navigation--nojs");

  navToggle.addEventListener("click", function () {
    navMain.classList.toggle('mobile-menu--active');
    if (navMain.classList.contains('mobile-catalog--active')) {
      document.querySelector('body').classList.add('overflow');
    }
    document.querySelector('body').classList.add('overflow');
    document.querySelector('.paranja').style.position = 'absolute';
    // if (navMain.classList.contains("navigation--closed")) {
    //   navMain.classList.remove("navigation--closed");
    //   navMain.classList.add("navigation--opened");
    //   document.querySelector('body').style.overflow = 'hidden';
    // } else {
    //   navMain.classList.add("navigation--closed");
    //   navMain.classList.remove("navigation--opened");
    //   document.querySelector('body').style.overflow = 'visible';
    // }
  });

  document.querySelector('.mobile-menu__close').addEventListener('click', function () {
    navMain.classList.remove('mobile-menu--active');
    document.querySelector('body').classList.remove('overflow');
    document.querySelector('.paranja').style.position = 'relative';
  });

  mobileCatalogBtn.addEventListener('click', function () {
    mobileCatalog.classList.toggle('mobile-catalog--active');
    if (mobileCatalog.classList.contains('mobile-catalog--active')) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    document.querySelector('body').style.overflow = 'visible';
  });
  mobileBtnClose.addEventListener('click', function () {
    mobileCatalog.classList.remove('mobile-catalog--active');
  })
})();

(function () {
  var menu = document.querySelector('.mobile-menu__cities');
  var btn = menu.querySelector('.mobile-menu__city.button');
  var list = document.querySelector('.mobile-menu__list-cities');
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (list.classList.contains('mobile-menu__list-cities--active')) {
      list.classList.remove('mobile-menu__list-cities--active');
    } else {
      list.classList.add('mobile-menu__list-cities--active');
    }
  })
})();


// (function () {
//   var items = document.querySelector('.mobile-menu__list');
//   items.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     var target = evt.target;
//     if (target.tagName != 'A') return;
//     document.querySelector('.mobile-submenu').classList.toggle('mobile-submenu--active');
//   })
// })();
