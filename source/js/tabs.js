"use strict";

// (function () {
//   if (window.outerWidth > 769) {
//     $("#tabs-links>li>a").click(function () {
//       $("#tabs-links>li>a").removeClass("tabs__active");
//       $(this).addClass("tabs__active");
//       $("#tabs-container>div").hide();
//       var t_content = $(this).attr("href");
//       $(t_content).show();
//       return false;
//     });
//     $("#tabs-links>.tabs__item:first-child a").trigger("click");
//   }

// })();


(function () {
  if (window.outerWidth > 769) {
    $("#tabs-links>li>a").click(function () {
      $("#tabs-links>li>a").removeClass("tabs__active");
      $(this).addClass("tabs__active");
      $("#tabs-container>div").hide();
      var t_content = $(this).attr("href");
      $(t_content).show();
      return false;
    });
    $("#tabs-links>.tabs__item:first-child a").trigger("click");
  }

})();

(function () {
  $("#js-tabs-list>li>a").click(function () {
    $("#js-tabs-list>li>a").removeClass("tabs__active");
    $(this).addClass("tabs__active");
    $("#tabs-container>div").hide();
    var t_content = $(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#js-tabs-list>.tabs__item:first-child a").trigger("click");

})();

(function () {
  if (window.outerWidth > 769) {
    $("#js-tabs-list-2>li>a").click(function () {
      $("#js-tabs-list-2>li>a").removeClass("tabs__active");
      $(this).addClass("tabs__active");
      $(this).addClass("tabs__active--small");
      $("#tabs-container>div").hide();
      var t_content = $(this).attr("href");
      $(t_content).show();
      return false;
    });
    $("#js-tabs-list-2>.tabs__item:first-child a").trigger("click");
  }
})();

(function () {
  $("#js-contacts>li>a").click(function () {
    $("#js-contacts>li>a").removeClass("tabs__active");
    $(this).addClass("tabs__active");
    $("#tabs-container>div").hide();
    var t_content = $(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#js-contacts>.tabs__item:first-child a").trigger("click");

})();



(function () {
  $("#js-tabs-list-3>li>a").click(function () {
    $("#js-tabs-list-3>li>a").removeClass("tabs__active");
    $(this).addClass("tabs__active");
    $(this).addClass("tabs__active--small");
    $("#js-tabs-list-3>li").removeClass("tabs__item--active");
    $(this).parent().addClass("tabs__item--active");
    $("#tabs-container>div").hide();
    var t_content = $(this).attr("href");
    $(t_content).show();
    var tabsBtn = document.querySelector('.tabs__button.button');
    var list = document.querySelector('.tabs__list');
    tabsBtn.innerText = this.innerText;
    list.classList.remove('tabs__list--active');
    return false;
  });
  $("#js-tabs-list-3>.tabs__item:first-child a").trigger("click");
})();


// прием заказов
(function () {

  var tabsBtn = document.querySelector('.tabs__button.button');
  var list = document.querySelector('.tabs__list');
  if (tabsBtn) {
    tabsBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (list.classList.contains('tabs__list--active')) {
        list.classList.remove('tabs__list--active');
      } else {
        list.classList.add('tabs__list--active');
      }
    })
  }
})();
