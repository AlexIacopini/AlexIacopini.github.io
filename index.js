

// Original JavaScript code by Chirp Internet: www.chirp.com.au
window.addEventListener("DOMContentLoaded", function(e) {
  var stage = document.getElementById("stage");
  var fadeComplete = function(e) { stage.appendChild(arr[0]); };
  var arr = stage.getElementsByTagName("img");
  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }
}, false);

// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }


Array.from(document.getElementsByClassName("education")).forEach(
  function(element, index, array) {
    element.addEventListener('click',function(){
      var name1=element.getElementsByTagName("span")[0].id;
      document.getElementById(name1).classList.toggle("show");
      element.classList.toggle("change");
    });
  });

Array.from(document.getElementsByClassName("work")).forEach(
  function(element, index, array) {
    element.addEventListener('click',function(){
      var name1=element.getElementsByTagName("span")[0].id;
      document.getElementById(name1).classList.toggle("show");
      element.classList.toggle("change");
    });
  });

Array.from(document.getElementsByClassName("extra")).forEach(
  function(element, index, array) {
    element.addEventListener('click',function(){
      var name1=element.getElementsByTagName("span")[0].id;
      document.getElementById(name1).classList.toggle("show");
      element.classList.toggle("change");
    });
  });

var yo=document.getElementById("container");
var bodyRect = document.getElementById("container").getBoundingClientRect();
var d_x = bodyRect.right;
var d_y = bodyRect.bottom;
var docX=d_x;
var docY=d_y;
var cx = 3;
var cy= 2;
var delta=3;


class Whale{
  constructor(name){
    this.name=name;
    this.el=document.getElementById(this.name);
    this.x=parseInt(this.el.style.left);
    this.y=parseInt(this.el.style.top);
  }
  move(){
    // var d2x = (Math.random() * delta - delta/2); //change dx and dy by random value
    // var d2y = (Math.random() * delta - delta/2);
    // cx += d2x;
    // cy += d2y;

    if(this.x<0 || this.x > docX){
      cx=-cx;
    }else{
      cx=cx;
    }
    if(this.y<0 || this.y > docY){
      cy=-cy;
    }else{
      cy=cy;
    }
    this.x += cx;
    this.y += cy;


    var el = document.getElementById(this.name)
    el.style.left = this.x + 'px';
    el.style.top = this.y + 'px';
    setTimeout(link, 40, this.name); //don't know how to reference
  }
}

function link(myObj){
  var k=myObj;
  eval(k).move();
}

cr001= new Whale("cr001");
cr001.move();

cr002=new Whale("cr002");
cr002.move();







function init(){
    //the start coordinates
    var el1 = document.getElementById("cr001").getBoundingClientRect();
    var el=document.getElementById("cr001");
    x=parseInt(el.style.left);
    y=parseInt(el.style.top);
    // moveImage();
}

// function moveImage() {
//
//   var d2x = (Math.random() * delta - delta/2); //change dx and dy by random value
//   var d2y = (Math.random() * delta - delta/2);
//   cx += d2x;
//   cy += d2y;
//
//   if(x<0 || x > docX){
//     cx=-cx;
//   }else{
//     cx=cx;
//   }
//   if(y<0 || y > docY){
//     cy=-cy;
//   }else{
//     cy=cy;
//   }
//   x += cx;
//   y += cy;
//
//
//   var el = document.getElementById("cr001")
//   el.style.left = x + 'px';
//   el.style.top = y + 'px';
//   setTimeout(moveImage, 200);
//
// }
