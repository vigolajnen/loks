var selectAll = [
  {
    id: 1,
    text: '50'
  },
  {
    id: 2,
    text: 'по цене'
  },
  {
    id: 3,
    text: 'Сакнт-Петербург'
  },
  {
    id: 4,
    text: 'Жалобы и предложения'
  },
  {
    id: 5,
    text: 'по цене'
  },
  {
    id: 6,
    text: 'Сакнт-Петербург'
  }
]


for (var i = 0; i < selectAll.length; i++) {
  var select = selectAll[i];
  $('.select-'+ select.id ).each(function () {
    // Variables
    var $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 500;
  
    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>', {
      class: 'select__gap',
      text:  select.text
    }).insertAfter($this);
  
    var selectGap = $this.next('.select__gap'),
      caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>', {
      class: 'select__list'
    }).insertAfter(selectGap);
  
    var selectList = selectGap.next('.select__list');
    // Add li - option items
    for (var i = 0; i < selectOptionLength; i++) {
      $('<li>', {
          class: 'select__item',
          html: $('<span>', {
            text: selectOption.eq(i).text()
          })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');
  
    selectList.slideUp(0);
    selectGap.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(dur);
  
        selectItem.on('click', function () {
          var chooseItem = $(this).data('value');
  
          $('select').val(chooseItem).attr('selected', 'selected');
          selectGap.text($(this).find('span').text());
  
          selectList.slideUp(dur);
          selectGap.removeClass('on');
        });
  
      } else {
        $(this).removeClass('on');
        selectList.slideUp(dur);
      }
    });
  
  });
}
