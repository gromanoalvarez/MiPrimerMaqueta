// JS// debo usar Local Store para guardar lo contado cuando cambio de pestaña? 

var inicial = 0;

function sumarAlCarrito() {
    if (inicial == 0) {
        var contador = String(parseInt(inicial) + 1);
        document.getElementById("contador").innerHTML = contador;
        inicial = contador;
    } else {
        var contador = String(parseInt(inicial) + 1);
        document.getElementById("contador").innerHTML = contador;
        inicial = contador;
    }
}

$(document).ready(function() {

    $('.slider').slick();
    $('.slider2').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});