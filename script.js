let tl = gsap.timeline()
tl.from("nav a", {
    opacity:0,
    y:-20,
    delay:0.5,
    duration:0.3,
})
tl.from("nav .search", {
    opacity:0,
    y:-20,
    duration:0.3,
})
tl.from("nav button", {
    opacity:0,
    y:-20,
    duration:0.3,
})
tl.from("nav .menu", {
    opacity:0,
    y:-20,
    duration:0.3,
})

let tl2 = gsap.timeline()

tl2.from(".view1 .top h2", {
    opacity:0,
    y:20,
    delay:1,
    duration:0.3,
})
tl2.from(".view1 .top p", {
    opacity:0,
    y:20,
    duration:0.3,
})

let tl3 = gsap.timeline()

tl3.from(".view1 .bottom #box1", {
   scale:0.7,
   delay:0.3,
   duration:0.3,

})
tl3.from(".view1 .bottom #box2", {
  opacity:0,
   y:20,
   duration:0.3,

})
tl3.from(".view1 .bottom #box3", {
    opacity:0,
   y:20,
   duration:0.3,
})

gsap.from(".outerh1",{
    opacity:0,
    y:20,
    delay:1,
    duration:0.5,
    scrollTrigger:".outerh1",
    markers: true
})



gsap.from(".view2 .lower h2, .view2 .lower h3,.view2 .lower h4,.view2 .lower p",{
    opacity:0,
    y:20,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        trigger:".view2",
        scroller:"body",
    }
})


gsap.from(".view2 .upper h2, .view2 .upper p",{
    opacity:0,
    y:20,
    delay:2,
    duration:0.6,
    stagger:0.2,
    scrollTrigger:{
        trigger:"view2 upper h2",
        scroller:"body",
    }
})

gsap.to(".bigName h1", {
    transform: "translateX(-65%)",

    scrollTrigger:{
        trigger: ".bigName",
        scroller:"body",
        // duration:2,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true

    }

    })

    


