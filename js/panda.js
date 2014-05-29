

//锚记链接

window.onload=function(){
    var oBtn=document.querySelector("#nav");
    var aA=oBtn.querySelectorAll("a");
    for(var i=0;i<aA.length;i++) {
        aA[i].onclick=function(ev){
            var ev= ev || window.event;
            var id=this.hash;
            var thisId=document.querySelector(id);
            document.documentElement.scrollTop=document.body.scrollTop = thisId.offsetTop-oBtn.offsetHeight;
            ev.preventDefault();
        }
    }

};




//case


$(function(){
    $(".caseimg").hover(function(){
        $(this).children("img").stop().animate({
            top:"-200px"
        },500);
    },function(){
        $(this).children().stop("img").animate({
            top:"0"
        },500);
    });
});