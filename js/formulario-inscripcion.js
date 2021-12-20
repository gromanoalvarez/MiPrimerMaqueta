$(document).ready(function() {

    var importeAcumulado = 6000;
    $("#precio").text(importeAcumulado);

    $(".agregar-persona .clonar").click(function() {
        var clonacion = $(".bloque").clone(true);
        clonacion.removeClass();
        clonacion.addClass("removible");
        $(".bloque").after(clonacion);
        importeAcumulado += 2000;
        $("#precio").text(importeAcumulado);
    });

    if ($(".formulario div").length > 2) {
        $(".formulario .eliminar").click(function() {
            $(this).parent(".removible").remove();
            if (importeAcumulado >= 8000) {
                importeAcumulado -= 2000;
                $("#precio").text(importeAcumulado);
            }
        });
    }

    $('#btnEnviar').click(function() {
        var nombresDelInput = $("input[name='nombres[]']").val;

        setTimeout(function() { // setTimeout es metodo de una cuenta regresiva
            Ladda.stopAll(); //detiene la carga del boton
            toastr.success(`Los inscriptos son ${nombresDelInput}`); // muestra el cartel
        }, 2000); // expresado en milisegundos
    });
    Ladda.bind('.ladda-button', { timeout: 20000 });

});