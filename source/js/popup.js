"use strict";

$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();

    // $('.popup__wrapper').toggle('fadeOutDown');
    $.magnificPopup.close();
  });
});