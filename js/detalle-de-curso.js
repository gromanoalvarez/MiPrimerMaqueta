var contador=56277;
function sumarInscripcion(){
  if(contador==56277){
    document.getElementById("inscripcion").innerHTML= String(contador+1);
    contador+=1;
  }else{
    document.getElementById("inscripcion").innerHTML= String(contador+1);
    contador+=1;
  }
}

$(document).ready(function(){
  $(function(){
    $("#accordion").accordion();
  });
});
