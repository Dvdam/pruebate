
$('.carousel').carousel();
var $inicio = $('#cortes');
var $modelo = $('#modelos');


$('#voy').click(function () {
    $modelo.show();
    ocultoCortes();
});

ocultoCortes = function(){
    var inicio = document.querySelector("#cortes")
    inicio.parentNode.removeChild(inicio);
};