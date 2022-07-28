$(document).ready(function () {
  // 펼침 메뉴
  let gnb = $('.gnb');
  // gnb의 li를 찾아서 보관
  let gnbLi = $('.gnb>li');
  $.each(gnbLi, function(index, item){
    // 주메뉴
    $(this).mouseenter(function(){
      let mainMenu = $(this).find('>a');
      let subMenu = $(this).find('.sub_menu');
      mainMenu.click(function(event){
        event.preventDefault();
        subMenu.toggle();
      });
    });
  });
  // submenu li를 찾아서 보관(3depth를 위해서)
  let subMenu = $('.sub_menu>li');
  $.each(subMenu, function(index, item){
    let subMenuA = $(this).find('>a');
    let depth3 = $(this).find('.sub_menu_2');
    $(this).mouseenter(function(){
      subMenuA.click(function(event){
        event.preventDefault();
        depth3.toggle();
      });

    });
  });
});

