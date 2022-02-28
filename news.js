let popup = document.getElementsByClassName('windows')[0];
let mask = document.getElementsByClassName('news_bg')[0];
let Xbtn = document.getElementById('close');
let box = document.getElementById('box');

box.onclick = function show(){
    popup.classList.remove("noshow")
    mask.classList.add("mask")
    }

    Xbtn.onclick  = function close(){
    popup.classList.add("noshow")
    mask.classList.remove("mask")
    }

    mask.onclick  = function close(){
    popup.classList.add("noshow")
    mask.classList.remove("mask")
    }

