

// Original JavaScript code by Chirp Internet: www.chirp.com.au
// window.addEventListener("DOMContentLoaded", function(e) {
//
//   var stage = document.getElementById("stage");
//   var fadeComplete = function(e) { stage.appendChild(arr[0]); };
//   var arr = stage.getElementsByTagName("a");
//   for(var i=0; i < arr.length; i++) {
//     arr[i].addEventListener("animationend", fadeComplete, false);
//   }
//
// }, false);


  window.addEventListener("DOMContentLoaded", function(e) {
    var list = Array.from(document.getElementsByClassName("stage"));
    var stage=list[0];
    list.forEach(
      function(element){
        var fadeComplete = function(e) { element.appendChild(arr[0]); };
        var arr = element.getElementsByTagName("img");
        for(var i=0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
        }
      }
    )
  }, false);


Array.from(document.getElementsByClassName("extra")).forEach(
  function(element, index, array) {
    element.addEventListener('click',function(){
      Array.from(document.getElementsByClassName("show")).forEach(
        function(e,i,a){
          e.classList.toggle("show");
        }
      )
      Array.from(document.getElementsByClassName("change")).forEach(
        function(e,i,a){
          e.classList.toggle("change");
        }
      )

      var name1=element.getElementsByTagName("span")[0].id;
      document.getElementById(name1).classList.toggle("show");
      element.classList.toggle("change");

    });
  });

function getCoordinates(){
  var yo=document.getElementById("container");
  var d_x = yo.offsetWidth;
  var d_y = yo.offsetHeight
  return [d_x, d_y]
}



class Whale{
  constructor(name){

    this.name=name;
    this.el=document.getElementById(this.name);
    this.x=parseInt(this.el.style.left);
    this.y=parseInt(this.el.style.top);
    this.docX=getCoordinates()[0];
    this.docY=getCoordinates()[1];
    this.cx = 3;
    this.cy= 2;
  }
  move(){
    // var d2x = (Math.random() * delta - delta/2); //change dx and dy by random value
    // var d2y = (Math.random() * delta - delta/2);
    // cx += d2x;
    // cy += d2y;

    if(this.x<0 || this.x > (this.docX-120)){
      this.cx=-this.cx;
    }else{
      this.cx=this.cx;
    }
    if(this.y<0 || this.y > (this.docY-120)){
      this.cy=-this.cy;
    }else{
      this.cy=this.cy;
    }
    this.x += this.cx;
    this.y += this.cy;


    var el = document.getElementById(this.name)
    el.style.left = this.x + 'px';
    el.style.top = this.y + 'px';
    setTimeout(link, 30, this.name);
  }
}

function link(myObj){
  var k=myObj;
  eval(k).move();
}

whale1= new Whale("whale1");
whale1.move();

whale2=new Whale("whale2");
whale2.move();

whale3= new Whale("whale3");
whale3.move();

whale4= new Whale("whale4");
whale4.move();

whale5=new Whale("whale5");
whale5.move();
