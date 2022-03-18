//story 1 Animatie om de images stories te laten draaien 
//Als api heb ik een webanimation gebruikt 
let story1 = document.querySelector(".story1")
let animation = story1.animate([{
    transform: "translateX(2em)"
}], {
    duration: 3000,
    iterations: Infinity,
    easing: 'ease-in-out'
});

//story2
let story2 = document.querySelector(".story2")
let animation1 = story2.animate([{
    transform: "translateX(-5.5em)"
}], {
    duration: 3000,
    iterations: Infinity,
    easing: 'ease-in-out'
});

//story3
let story3 = document.querySelector(".story3")
let animation3 = story3.animate([{
    transform: "rotate(360deg)"
}], {
    duration: 5000,
    iterations: Infinity,
    easing: 'ease-in-out'
});

//story4
let story4 = document.querySelector(".story4")
let animation4 = story4.animate([{
    transform: "rotate(360deg)"
}], {
    duration: 5000,
    iterations: Infinity,
    easing: 'ease-in-out'
});


//story5
let story5 = document.querySelector(".story5")
let animation5 = story5.animate([{
    transform: "rotate(360deg)"
}], {
    duration: 5000,
    iterations: Infinity,
    easing: 'ease-in-out'
});
