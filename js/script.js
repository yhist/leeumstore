$(document).ready(function () {
  // 안내창 기능
  // 추가기능(스크롤바 없애기)
  $("html").css("overflow", "hidden");
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  modalClose.click(function () {
    modalWrap.stop().fadeOut(200);
    // 추가기능(스크롤바 살리기)
    $("html").css("overflow", "auto");
  });
  // 배경눌렀을때 닫기
  let modalMain = $(".modal-main");
  // 내용배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function (event) {
    $(this).stop().fadeOut(200);
    $("html").css("overflow", "auto");
  });

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
