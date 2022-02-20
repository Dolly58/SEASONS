"use strict"
  
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

// jQuery 版本
$(function(){
  
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".nav_main").slideToggle();
    $(".add").toggleClass("mask_index");
  });
  

});

// 圖片輪播
$(document).ready(function(){
$('.slick_fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
});


//圖片自動播放



// $(document).ready(function(){
// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });
// });


// window.onload=function(){
//   var oDiv  =  document.getElementById('banner_nature');
//   var oUl = document.getElementsByClassName('banner_nature_ul')[0];
//   var Li = oUl.getElementsByTagName('li');//獲取ul下的所有li
//   oUl.innerHTML = oUl.innerHTML+oUl.innerHTML;//li下的內容進行想加
//   oUl.style.width = Li[0].offsetWidth*Li.length+'px';//ul的寬度等於每個li的寬度乘以所有li的長度
//   var speed = 2
  
//   //主方法
//   function move(){
//     //如果左邊橫向滾動了長度一半之後,回到初始位置
    
//     if(oUl.offsetLeft<-oUl.offsetWidth/speed){
//       oUl.style.left = '0'
//     }
//     //如果右邊橫向滾動的距離大於0 就讓他的位置回到一半
//     if(oUl.offsetLeft>0){
//       oUl.style.left = -oUl.offsetWidth/speed+'px';
//     }
//     //oUl.style.left = oUl.offsetLeft-2+'px';//進行左橫向滾動
//     oUl.style.left = oUl.offsetLeft+speed+'px';//進行右橫向滾動
//   }
//   //呼叫方法
//   var timer = setInterval(move,30)
//   //滑鼠指向的時候 暫停
//   oDiv.onmouseover=function(){
//     clearInterval(timer);
//   }	
//   //滑鼠離開之後 繼續滾動
//   oDiv.onmouseout=function(){
//      timer = setInterval(move,30)
//   }
// }
