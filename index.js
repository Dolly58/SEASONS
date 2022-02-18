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
    $(".add").toggleClass("mask");
  });
  

});