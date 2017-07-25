//$("#btn-menu1").click(function() {
//    $("#btn-menu1").css({"background-color": " #fff"});
//});
//
//$("#btn-menu2").click(function() {
//    $("#btn-menu2").css({"background-color": " #fff"});
//});

document.querySelector('input[type=text]').oninvalid = function() {
    this.setCustomValidity(""); // remove mensagens de erro antigas
    if (!this.validity.valid) { // reexecuta validação
        this.setCustomValidity("Campo usuário Obrigatorio"); // se inválido, coloca mensagem de erro
    }
};

document.querySelector('input[type=password]').oninvalid = function() {
    this.setCustomValidity("");// remove mensagens de erro antigas
    if (!this.validity.valid) {// reexecuta validação
        this.setCustomValidity("Campo senha Obrigatorio"); // se inválido, coloca mensagem de erro
    }
};


