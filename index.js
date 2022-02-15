"use strict"

/*********** 網頁高度 ***********/
// window.addEventListener("scroll", function(e){
//     console.log("scrollX: " + window.scrollX);
//     console.log("scrollY: " + window.scrollY);
//   });
  
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




/*********** 選單顏色變化 ***********/
$(window).scroll(function(){
  if ( $(this).scrollTop() > 395) {
    $('.nav_top').addClass('scroll');
    $('.nav_top').addClass('bg_color');
    $('.logo_white').css("display","none");
    $('.logo_black').css("display","block")
  } else {
    $('.nav_top').removeClass('scroll');
    $('.nav_top').removeClass('bg_color');
    $('.logo_white').css("display","block");
    $('.logo_black').css("display","none")
 }
});




