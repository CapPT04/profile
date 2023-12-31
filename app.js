let textLogo = document.querySelector('.logo')
const tl = gsap.timeline({
    defaults: {
        ease: "power4.inOut"
    }
})
textLogo.innerHTML = textLogo.textContent.replace (
    /\S/g,
    "<span class='letter'>$&</span>"
    
)
tl.from('.letter', 0.7, {
    y: -50,
    x: 50,
    rotation: 20,
    autoAlpha: 0,
    stagger: 0.1,
})
.from(
    '.nav_list',
    0.7,
    {
        y: 50,
        x: -50,
        rotation: 180,
        autoAlpha: 0,
        stagger: 0.1,
    },
    '-=1'
)
.from(
    '.home_left',
    1.5,
    {
        x: '-100%',
        autoAlpha: 0,
    },
    '-=1'
)
