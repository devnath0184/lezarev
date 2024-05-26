function navAnimation(){
    var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    var tl = gsap.timeline();
    tl.to(".nav-bottom", {
        height: "21vh"
    })
    tl.to(".nav-elem h5", {
        display: "block",
        duration: "0.1s"
    })
    tl.to(".nav-elem h5 span",{
        y: 0,
        stagger: {
            amount: .1
        }
    })
})

nav.addEventListener("mouseleave", function(){
    var tl = gsap.timeline();
    tl.to(".nav-elem h5 span",{
        y: 25,
        stagger: {
            amount: .1
        }
    })
    tl.to(".nav-elem h5", {
        display: "none",
        duration: "0.1s"
    })
    tl.to(".nav-bottom", {
        height: "0vh"
    })
})
}
navAnimation();

var scroll = document.querySelector("body");
scroll.addEventListener("wheel", function(event){
    var tlTwo = gsap.timeline();
    if(event.deltaY >0){
        
        tlTwo.to("nav", {
            padding: "1.7vw 0vw"
        })
    }
    else{
        tlTwo.to("nav",{
            padding: "2.7vw 0vw"
        })
    }
});