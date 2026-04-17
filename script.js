let carrinho = {};

function add(nome, preco) {
  if (!carrinho[nome]) {
    carrinho[nome] = {qtd: 0, preco: preco};
  }
  carrinho[nome].qtd++;
  atualizar();
}

function remover(nome) {
  if (carrinho[nome] && carrinho[nome].qtd > 0) {
    carrinho[nome].qtd--;
  }
  atualizar();
}

function atualizar() {
  let lista = document.getElementById("lista");
  let total = 0;
  lista.innerHTML = "";

  for (let item in carrinho) {
    if (carrinho[item].qtd > 0) {
      let subtotal = carrinho[item].qtd * carrinho[item].preco;
      total += subtotal;

      let nomeExibido = "";
      if(item === "XCamarao") nomeExibido = "X Camarão";
      if(item === "FrangoCoracao") nomeExibido = "Frango com Coração";
      if(item === "XCaseiro") nomeExibido = "X Caseiro";
      if(item === "MegaBuiu") nomeExibido = "Mega Buiu Especial";

      lista.innerHTML += `
        <div class="item-carrinho">
          ${nomeExibido} x${carrinho[item].qtd} - R$${subtotal}
        </div>
      `;

      document.getElementById("qtd-" + item).innerText = carrinho[item].qtd;
    } else {
      document.getElementById("qtd-" + item).innerText = 0;
    }
  }

  document.getElementById("total").innerText = total;
}

function enviar() {
  let mensagem = "Olá, quero fazer um pedido:%0A";

  for (let item in carrinho) {
    if (carrinho[item].qtd > 0) {
      let nomeExibido = "";
      if(item === "XCamarao") nomeExibido = "X Camarão";
      if(item === "FrangoCoracao") nomeExibido = "Frango com Coração";
      if(item === "XCaseiro") nomeExibido = "X Caseiro";
      if(item === "MegaBuiu") nomeExibido = "Mega Buiu Especial";

      mensagem += `- ${nomeExibido} x${carrinho[item].qtd}%0A`;
    }
  }

  let total = document.getElementById("total").innerText;
  mensagem += "%0ATotal: R$" + total;

  let url = "https://wa.me/5584991139970?text=" + mensagem;
  window.open(url, "_blank");
}