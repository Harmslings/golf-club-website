gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    
})

var crsrBlr = document.querySelector("#cursor-blr");
document.addEventListener("mousemove",function(dets){
    crsrBlr.style.left = dets.x- 200+"px";
    crsrBlr.style.top = dets.y-200+"px";
    
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 3;
            crsr.style.border = "1px solid #fff";
            crsr.style.backgroundColor = "transparent"
        });

        elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.border = "0px solid #95c11e"
            crsr.style.backgroundColor = "#95c11e"
        })


})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
        
    }

})




































