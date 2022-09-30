// função responsável pelo cálculo da hipotenusa
function calcular() {
    let catetoOposto = $("#cateto-oposto").val();
    let catetoAdjacente = $("#cateto-adjacente").val();
    let hipotenusa = Math.hypot(catetoOposto, catetoAdjacente).toFixed(2);

    $("#hipotenusa").val(hipotenusa);
    toogleHipotenusa('block');
}

// função responsável por mostrar o input de resultado da hipotenusa
function toogleHipotenusa(display) {
    $("#div-hipotenusa").css("display", display);
}

// função responsável pela verificação
function validaCampos() {
    limparCampos();
    let catetoOposto = $("#cateto-oposto").val();
    let catetoAdjacente = $("#cateto-adjacente").val();

    let camposValidados = true;

    if (catetoOposto == "") {
        $("#mensagem-cateto-oposto").css("display", "block");
        camposValidados = false;
    }

    if (catetoAdjacente == "") {
        $("#mensagem-cateto-adjacente").css("display", "block");
        camposValidados = false;
    }

    if (camposValidados)
        calcular();
}

// função de limpar os campos, para que a mensagem de erro suma
function limparCampos() {
    $("#mensagem-cateto-oposto").css("display", "none");
    $("#mensagem-cateto-adjacente").css("display", "none");
    toogleHipotenusa('none');
}

// função responsável por destacar o lado do triângulo quando seu respectivo input por selecionado
function destacarLados(status, element) {
    let elementCollection = $("." + element);
    let elemento;
    if (elementCollection != null) {
        elemento = elementCollection[0];
        if (status) {
            elemento.classList.remove('border-dark');
            elemento.classList.add('border-danger');
        } else {
            elemento.classList.add('border-dark');
            elemento.classList.remove('border-danger');
        }
    }
}

// função responsável por permitir apenas a entrada de number no input text
$(document).ready(function () {
    $(".input-numerico").on("keypress keyup blur", function (event) {
        const DOT_EVENT_VALUE = 46; // numero dos eventos para realizar condição de fluxo
        const ZERO_EVENT_VALUE = 48;
        const NINE_EVENT_VALUE = 57;

        $(this).val($(this).val().replace(/[^0-9\.]/g, '')); 
        if ((event.which != DOT_EVENT_VALUE || $(this).val().indexOf('.') != -1) &&
            (event.which < ZERO_EVENT_VALUE || event.which > NINE_EVENT_VALUE)) {
            event.preventDefault();
        }
    });
});