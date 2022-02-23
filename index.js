

/*********** 主選單顏色變化 ***********/
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 350) {
      $('.nav_top').addClass('scroll');
      $('.nav_top').addClass('bg_color');
      $('ul li .font_white:hover').css('border-bottom', '1px solid #292421');
      
      $('.logo_white').css("display","none");
      $('.logo_black').css("display","block")
    } else {
      $('.nav_top').removeClass('scroll');
      $('.nav_top').removeClass('bg_color');
      $('ul li .font_white:hover').css('border-bottom', '1px solid #FFFAFA');
      $('.logo_white').css("display","block");
      $('.logo_black').css("display","none")
   }
  });


  /*********** 手機版選單+漢堡***********/
// jQuery 版本
$(function(){
  
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".nav_main").slideToggle();
    $(".add").toggleClass("mask_index");
  });
});

/*********** 漢堡 ***********/
// // jQuery 版本
// $(function(){
  
//   $("button.hamburger").on("click", function(){
//     $(this).toggleClass("is-active");
//   });

// });

// // JavaScript 版本
// document.addEventListener("DOMContentLoaded", function(){
  
//   var btn_hamburger = document.getElementsByClassName("hamburger")[0];
//   btn_hamburger.addEventListener("click", function(){
//     this.classList.toggle("is-active");
//   });
  
// });

// 手機版選單+漢堡(jQuery 版本)
// $(function(){
  
//   $("button.hamburger").on("click", function(){
//     $(this).toggleClass("is-active");
//     $(".nav_main").slideToggle();
//     $(".add").toggleClass("mask_index");
//   });
// });

// // 首頁輪播
// $(document).ready(function(){
// $('.slick_fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
// });

//

/*********** 單品頁展開收合***********/
$(document).ready(function(){
  $(".hidetogglebtn").click(function(){
  $(this).next(".showcontent").slideToggle();
  });
});

// var btn1 = document.getElementsByClassName("hidetogglebtn");
// var i;

// for (i = 0; i < btn1.length; i++) {
//   btn1[i].addEventListener("click", function() {
//   this.classList.toggle("showcontent");
//   var showcontent = this.nextElementSibling;
//   if (showcontent.style.display === "block") {
//     showcontent.style.display = "none";
//   } else {
//     showcontent.style.display = "block";
//   }
//   });
// }

/*********** 手機版選單 ***********/
// $(document).ready(function(){
//   $(".nav_hamburger").click(function(){
//   $(this).next(".nav_main").slideToggle();
//   });
// });

/*********** 最新消息彈窗 ***********/
// let popup = document.getElementsByClassName('windows')[0];
// let mask = document.getElementsByClassName('news_bg')[0];
// let Xbtn = document.getElementById('close');
// let box = document.getElementById('box');

// box.onclick = function show(){
//   popup.classList.remove("noshow")
//   mask.classList.add("mask")
// }

// Xbtn.onclick  = function close(){
//   popup.classList.add("noshow")
//   mask.classList.remove("mask")
// }

// mask.onclick  = function close(){
//   popup.classList.add("noshow")
//   mask.classList.remove("mask")
// }
