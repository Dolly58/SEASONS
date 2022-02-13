"use strict"

/*********** 網頁高度 ***********/
// window.addEventListener("scroll", function(e){
//     console.log("scrollX: " + window.scrollX);
//     console.log("scrollY: " + window.scrollY);
//   });

  
/*********** 單品頁展開收合***********/
// $(document).ready(function(){
//   $(".hidetogglebtn").click(function(){
//   $(this).next(".showcontent").slideToggle();
//   });
// });

var btn1 = document.getElementsByClassName("hidetogglebtn");
var i;

for (i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", function() {
  this.classList.toggle("showcontent");
  var showcontent = this.nextElementSibling;
  if (showcontent.style.display === "block") {
    showcontent.style.display = "none";
  } else {
    showcontent.style.display = "block";
  }
  });
}