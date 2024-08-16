
document.addEventListener("DOMContentLoaded", function() {

    navegacionFija()

})

function navegacionFija() {
    const navbar = document.getElementById("navbar");
    const seccionServicios = document.getElementById("servicios");

    document.addEventListener("scroll", function() {
        if(seccionServicios.getBoundingClientRect ().top <= 0) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    })
}











