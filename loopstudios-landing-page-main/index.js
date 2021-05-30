function toggleMenu(){
    let hamburger=document.getElementById("hamburger");
    if(hamburger.classList.contains("hamburger-open")==true)
    {
        hamburger.classList.remove("hamburger-open");
        hamburger.classList.add("hamburger-close");
        document.getElementById("links").style.right="100%";
        document.body.classList.remove("stop-scrolling");
    }
    else{
        hamburger.classList.remove("hamburger-close");
        hamburger.classList.add("hamburger-open");
        document.getElementById("links").style.right="0px";
        document.body.classList.add("stop-scrolling");
    }
}
window.onscroll = function() {
    scrollFunction();
    let el=document.getElementById("creation");
    if(elementInViewport2(el)==true){
        console.log("In viewpoint");
        if(el.classList.contains("loadcontent")==false){
            el.classList.add("loadcontent");
        }
        
    }
   
    let el2=document.getElementById("about");
    if(elementInViewport2(el2)==true){
        console.log("In viewpoint");
        if(el2.classList.contains("loadcontent")==false){
            el2.classList.add("loadcontent");
        }
    }

    let el3=document.getElementsByClassName("creation-content-image");
    if(elementInViewport2(el3[0])==true)
    {
        for(let i=0;i<el3.length;i++)
        {
            setTimeout(()=>{
                el3[i].classList.add("loadcontent2");
            },(i*200))
            
        }
    }
   
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").classList.add("fixed-nav");
  } else {
    document.getElementById("navbar").classList.remove("fixed-nav");  
  }
}

setTimeout(()=>{
    
    document.getElementById("preloader").classList.add("preloader-close");
},5000)
setTimeout(()=>{
    
    document.getElementById("preloader").style.display="none";
},8000)

function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }


//   var mouseX = 0,
//     mouseY = 0;
//   var xp = 0,
//     yp = 0;

//     document.onmousemove=function(e){
//         mouseX = e.pageX - 30;
//         mouseY = e.pageY - 30;
//     }

    
//       setInterval(function () {
//         xp += (mouseX - xp) / 6;
//         yp += (mouseY - yp) / 6;
//         document.getElementById("circle").style.left=xp+"px";
//         document.getElementById("circle").style.top=yp+"px";
//       }, 10);