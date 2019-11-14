
window.addEventListener("DOMContentLoaded", function(e) {
  // puts the picture into the table (cv)
  var img=document.createElement("img");
  img.src="/pic/flowers1.png";
  document.getElementById("cell").appendChild(img);

  // var img1=document.createElement("img");
  // img1.src="/pic/head1.png";
  // document.getElementById("header").appendChild(img1);

// whale tail change
  Array.from(document.getElementsByClassName("stage")).forEach(
    function(element){
      var fadeComplete = function(e) { element.appendChild(arr[0]); };
      var arr = element.getElementsByTagName("img");
      for(var i=0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
      }
    }
  )

  // setInterval(change,10000);

}, false);

// show popuptext
Array.from(document.getElementsByClassName("extra")).forEach(
  function(element) {
    element.addEventListener('click',function(){
      // Array.from(document.getElementsByClassName("show")).forEach(
      //   function close(e,i,a){
      //     e.classList.toggle("show");
      //   }
      // )

      // setTimeout(change,4000);

      change();

      var name1=element.getElementsByTagName("span")[0].id;
      document.getElementById(name1).classList.toggle("show");
    });
    element.addEventListener("animationend", function(){
      change();
    })
  });


function change(){
  Array.from(document.getElementsByClassName("show")).forEach(
    function close(e,i,a){
      e.classList.toggle("show");
    }
  )
}


function getCoordinates(){
  var yo=document.getElementById("container");
  var d_x = yo.offsetWidth;
  var d_y = yo.offsetHeight
  return [d_x, d_y]
}


// whale creation and movement
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
    if(this.x<0 || this.x > (this.docX-140)){
      this.cx=-this.cx;
      document.getElementById(this.name).classList.toggle("turn");
    }else{
      this.cx=this.cx;
    }
    if(this.y<0 || this.y > (this.docY-130)){
      this.cy=-this.cy;
    }else{
      this.cy=this.cy;
    }
    this.x += this.cx;
    this.y += this.cy;


    var el = document.getElementById(this.name);
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
