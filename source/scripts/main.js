$(document).ready(function() {
    console.log("Document ready"); 

    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#data').mask('00/00/0000');

    console.log("Máscaras aplicadas");
});