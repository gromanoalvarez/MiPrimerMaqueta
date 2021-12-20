$(document).ready(function() {
    $("#nombre").keyup(function() {
        $("#destinatario").text($(this).val());
    });

    $("input[name='color']").change(function() {
        switch ($(this).val()) {
            case "red":
                $("#destinatario").removeClass("color-blue color-green color-yellow");
                $("#destinatario").addClass("color-red");
                break;
            case "blue":
                $("#destinatario").removeClass("color-red color-green color-yellow");
                $("#destinatario").addClass("color-blue");
                break;
            case "green":
                $("#destinatario").removeClass("color-red color-blue color-yellow");
                $("#destinatario").addClass("color-green");
                break;
            case "yellow":
                $("#destinatario").removeClass("color-red color-blue color-green");
                $("#destinatario").addClass("color-yellow");
                break;
        }
    });

    $('input[name="font"]').change(function() {
        switch ($(this).val()) {
            case "20px":
                $("#destinatario").removeClass("p-28 p-32 p-48 p-60");
                $("#destinatario").addClass("p-20");
                break;
            case "28px":
                $("#destinatario").removeClass("p-20 p-32 p-48 p-60");
                $("#destinatario").addClass("p-28");
                break;
            case "32px":
                $("#destinatario").removeClass("p-20 p-28 p-48 p-60");
                $("#destinatario").addClass("p-32");
                break;
            case "48px":
                $("#destinatario").removeClass("p-20 p-28 p-32 p-60");
                $("#destinatario").addClass("p-48");
                break;
            case "60px":
                $("#destinatario").removeClass("p-20 p-28 p-32 p-48");
                $("#destinatario").addClass("p-60");
                break;
        }
    });

    $("#monto").keyup(function() {
        $("#precio").text($(this).val());
    });

    $('input[name="pos"]').change(function() {
        switch ($(this).val()) {
            case "abajo-derecha":
                $("#fechaHora").removeClass("arriba-derecha arriba-izquierda");
                $("#fechaHora").addClass("abajo-derecha");
                break;
            case "arriba-derecha":
                $("#fechaHora").removeClass("abajo-derecha arriba-izquierda");
                $("#fechaHora").addClass("arriba-derecha");
                break;
            case "arriba-izquierda":
                $("#fechaHora").removeClass("abajo-derecha arriba-derecha");
                $("#fechaHora").addClass("arriba-izquierda");
                break;
        }
    });

    $('input[name="fondo"]').change(function() {
        switch ($(this).val()) {
            case "coche":
                $(".visualizacion").removeClass("guitarra goku pizza");
                $(".visualizacion").addClass("coche");
                break;
            case "guitarra":
                $(".visualizacion").removeClass("coche goku pizza");
                $(".visualizacion").addClass("guitarra");
                break;
            case "goku":
                $(".visualizacion").removeClass("coche guitarra pizza");
                $(".visualizacion").addClass("goku");
                break;
            case "pizza":
                $(".visualizacion").removeClass("coche guitarra goku");
                $(".visualizacion").addClass("pizza");
                break;
        }
    });

});