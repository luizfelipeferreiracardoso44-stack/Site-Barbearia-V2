const opcoes = document.querySelectorAll(".servico-opcao");

const servicoselecionado = document.querySelector("#servico-selecionado");

const botaowhatsapp = document.querySelector("#btn-whatsapp");

let servicoatual = null;
let precoatual = null;


opcoes.forEach(function(opcao) {

    opcao.addEventListener("click", function() {

        opcoes.forEach(function(item) {
            item.classList.remove("selecionado");
        });

        opcao.classList.add("selecionado");

        servicoatual = opcao.dataset.servico;
        precoatual = opcao.dataset.preco;

        servicoselecionado.textContent =
            `Serviço selecionado: ${servicoatual} - R$ ${precoatual}`;

    });

});


botaowhatsapp.addEventListener("click", function(event) {

    event.preventDefault();

    if (!servicoatual) {
        alert("Selecione um serviço primeiro.");
        return;
    }

    const telefone = "5541992449105";

    const mensagem = `Olá! Gostaria de agendar um horário.%0A%0A
Serviço: ${servicoatual}%0A
Valor: R$ ${precoatual}`;

    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    window.open(url, "_blank");

});