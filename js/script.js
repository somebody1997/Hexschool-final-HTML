$(document).ready(function () {
  // 處理選單打開/關閉
  $('.dropdown > a').click(function (event) {
    event.preventDefault();
    $('a .fas').toggleClass('active');

    // 在最小的螢幕尺寸做滑動效果
    if ($(window).outerWidth() >= 567) {
      $('.dropdown-menu').toggle();
    } else {
      $('.dropdown-menu').slideToggle(300);
    }
  });

  // 當按到非選單範圍的地方，將選單收合
  $('body').on('click', function (event) {
    var $trigger = $('.dropdown');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('.dropdown-menu').hide();
      $('a .fas').removeClass('active');
    }
  });

  // 輪撥效果
  new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // lightbox 效果
  lightbox.option({
    resizeDuration: 500,
    fadeDuration: 200,
    wrapAround: true,
  });

  // 滑動到頁首
  $('.scroll-top a').click(function (event) {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // 滑動到聯絡區域
  $('.scroll-contact a').click(function (event) {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $('#contact').offset().top,
      },
      500
    );
  });
});
