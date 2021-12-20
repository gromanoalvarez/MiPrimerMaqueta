$(document).ready(function() {
    $("#boton-enviar").click(function(e) { // E es un valor usado para prevenir el envio en caso de error
        validar(e);
    });
    $("#nombre").keyup(function(e) { // VALIDA EN VIVO mientras escribo
        validar(e);
    });
    $("#consulta").keyup(function(e) {
        validar(e);
    });
});

function validar(e) {
    var error = false;
    var mensajesDeError = "";
    var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var regexCampoNumerico = /^[0-9]{4}\-[0-9]{4}$/;

    $("p.error").empty(); //limpia los mensajes anteriores

    //validacion de nombre y apellido ... id="nombre"
    if ($("#nombre").val() == "") {
        error = true;
        $("#nombre").after("<p class='error'>El campo nombre y apellido debe estar completo</p>");
    }

    //validacion de email... id="mail" CON EXPRESION REGULAR : selector.val().match(expresionRegular);
    if (!($("#mail").val().match(regexEmail))) {
        error = true;
        $("#mail").after("<p class='error'>El email no coincide con el formato requerido</p>");
    }

    //validacion de telefono... id="tel"
    if (!($("#tel").val() == "")) {
        if (!($("#tel").val().match(regexCampoNumerico))) {
            error = true;
            $("#tel").after("<p class='error'>El numero telefonico no coincide con el formato requerido</p>");
        }
    }
    //validacion de consulta... id="consulta"
    if ($("#consulta").val().length > 1000) {
        error = true;
        $("#consulta").after("<p class='error'>El texto ingresado debe tener menos de mil caracteres</p>");
    } else {
        $("#caracteres").empty();
        $("#caracteres").text($("#consulta").val().length);
    }

    if (error) {
        e.preventDefault(); //detiene el envio
    }




}