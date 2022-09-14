$(document).ready(function () {
  // 펼침메뉴 만들기
  let sideMenu = $(".side-menu-list");
  let sideMenuLi = $(".side-menu-list>li");

  // 서브메뉴 펼치기
  $.each(sideMenuLi, function (index, item) {
    let sideMenuLiA = $(this).find(">a");
    let subMenu = $(this).find(".sub-menu");
    sideMenuLiA.click(function (event) {
      event.preventDefault();
      subMenu.stop().slideToggle();
    });
  });

  // 서브메뉴2 펼치기
  let subMenu = $(".sub-menu>li");
  $.each(subMenu, function (index, item) {
    let subMenuI = $(this).find(">i");
    let subMenu_2 = $(this).find(".sub-menu-2");
    subMenuI.click(function (event) {
      $(this).toggleClass("active");
      event.preventDefault();
      subMenu_2.stop().slideToggle();
    });
  });
});

window.onload = function () {
  var swiper = new Swiper(".sw-ceramic", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-ceramic-next",
    },
  });

  var swiper = new Swiper(".sw-glass", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-glass-next",
    },
  });

  var swiper = new Swiper(".sw-metal", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-metal-next",
    },
  });

  var swiper = new Swiper(".sw-paper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-paper-next",
    },
  });

  var swiper = new Swiper(".sw-fabric", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-fabric-next",
    },
  });
};
