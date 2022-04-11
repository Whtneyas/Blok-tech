
// //filter voor landen

function filterLand(event) {
    //console.log(event.target.value);
 // die gaat alle section selecteren 
    var sections = document.querySelectorAll('section')

    for (var i = 0; i < sections.length; 1++) {
    (sections[i]).classList.remove("hidden")
    if (sections[i].dataset.location !==event.target.value) {
        //console.log(i)
        //console.log(sections[i].dataset.location)
        sections [i].classList.add('hidden')
    }
}
}

var radios = document.querySelectorAll("input");

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", filterLand)
}

