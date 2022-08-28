$(document).ready(function(){
  // 펼침메뉴 만들기
  let sideMenu = $('.side-menu-list');
  let sideMenuLi = $('.side-menu-list>li');

  // 서브메뉴 펼치기
  $.each(sideMenuLi, function(index, item){
    $(this).click(function(){
      let sideMenuLiA = $(this).find('>a');
      let subMenu = $(this).find('.sub-menu');
      sideMenuLiA.click(function(event){
        event.preventDefault();
        subMenu.fadeToggle();
      });

    });
  });

  // 서브메뉴2 펼치기
  let subMenu = $('.sub-menu>li');
  $.each(subMenu, function(index, item){
    let subMenuA = $(this).find('>a');
    let subMenu_2 = $(this).find('.sub-menu-2');
    $(this).click(function(){
      subMenuA.click(function(event){
        event.preventDefault();
        subMenu_2.fadeToggle();
      });
    });
  });


});


window.onload = function(){

  var swiper = new Swiper(".sw-ceramic", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-ceramic-next"
  }   
  });

  var swiper = new Swiper(".sw-glass", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-glass-next"
    }
  });

  var swiper = new Swiper(".sw-metal", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-metal-next"
    }
  });

  var swiper = new Swiper(".sw-paper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-paper-next"
    }
  });

  var swiper = new Swiper(".sw-fabric", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".sw-fabric-next"
    }
  });



}









