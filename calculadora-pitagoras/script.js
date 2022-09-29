function calcular() {
    let catetoOposto = $("#cateto-oposto").val();
    let catetoAdjacente = $("#cateto-adjacente").val();
    let hipotenusa = Math.hypot(catetoOposto, catetoAdjacente).toFixed(2);
    
    $("#hipotenusa").val(hipotenusa);
    toogleHipotenusa('block');
}

function toogleHipotenusa(display) {
    $("#div-hipotenusa").css("display", display);
}

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

function limparCampos() {
    $("#mensagem-cateto-oposto").css("display", "none");
    $("#mensagem-cateto-adjacente").css("display", "none");
    toogleHipotenusa('none');
}

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