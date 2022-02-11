"use strict"

/*********** 網頁高度 ***********/
window.addEventListener("scroll", function(e){
    console.log("scrollX: " + window.scrollX);
    console.log("scrollY: " + window.scrollY);
  });

/*********** 執行AOS ***********/
  // AOS.init();
  
/*********** 展開收合***********/
$(document).ready(function(){
  $(".hidetogglebtn").click(function(){
  $(this).next(".showcontent").slideToggle();
  });
});



