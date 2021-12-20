//ejemplo de como usar AJAX para conectar con un SERVIDOR

function getApi (){
    $.ajax({ //para usar AjAX tengo que tener vinculado JQUERY
        url: 'https://...', // a donde esta ubicado el servidor?
        type: 'GET', // de que tipo se conecta: get o post o put?
        success: functionAction
    });
}       //GET deja ver el dato por la URL
function setApi(){
    $.ajax({
        url: 'https://...',
        type: 'PUT',
        success: function () {
            toastr.success("Mensaje Exitoso");
        },
        error:function () {
            toastr.error("Mensaje error");
        }

    });
}
