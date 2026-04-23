let carrinho = {};

function add(nome, preco) {
  if (!carrinho[nome]) {
    carrinho[nome] = {
      qtd: 0,
      preco: preco
    };
  }

  carrinho[nome].qtd++;
  atualizar();
}

function remover(nome) {
  if (carrinho[nome] && carrinho[nome].qtd > 0) {
    carrinho[nome].qtd--;

    if (carrinho[nome].qtd <= 0) {
      delete carrinho[nome];
    }
  }

  atualizar();
}

function formatarNome(nome) {
  const nomes = {
    Hamburguer: "Hambúrguer",
    XBurguer: "X-Burguer",
    Bauru: "Bauru",
    XTudo: "X-Tudo",
    XBacon: "X-Bacon",
    Misto: "Misto",
    FileCarne: "Filé de Carne",
    Sertanejo: "Sertanejo",
    FileSol: "Filé de Sol",

    Buiu: "Buiu",
    XCaseiro: "X-Caseiro",
    BuiuEspecial: "Buiu Especial",

    Frangabacon: "Frangabacon",
    Franburguer: "Franburguer",
    FranCoracao: "Fran Coração",
    Passaporte: "Passaporte",
    BuiuDuplo: "Buiu Duplo",
    XCalabresa: "X-Calabresa",
    BuiuFrango: "Buiu Duplo c/ Frango",

    XCamarao: "X-Camarão",
    Framarao: "Framarão",

    Tradicional: "Cachorro Quente",
    Especial: "Especial",
    HotSertanejo: "Sertanejo",
    HotCoracao: "De Coração",
    HotCamarao: "De Camarão",
    HotBacon: "De Bacon",
    SandFrango: "Sanduíche de Frango",

    BatataP: "Batata Pequena",
    BatataM: "Batata Média",
    BatataCheddar: "Batata + Cheddar + Bacon",
    FileFritas: "Filé c/ Fritas",
    CalabresaFritas: "Calabresa c/ Fritas",
    AceboladaFritas: "Acebolada c/ Fritas",

    PastelQueijo: "Pastel Queijo",
    PastelMussarela: "Pastel Mussarela",
    PastelCarneSol: "Pastel Carne de Sol",
    PastelChocolate: "Pastel Chocolate",
    PastelFrango: "Pastel Frango",
    PastelPizza: "Pastel Pizza",

    RefriLata: "Refri Lata",
    Refri250: "Refri 250ml",
    Refri600: "Refri 600ml",
    Refri1L: "Refri 1L",
    Coca1L: "Coca 1L",
    AguaGas: "Água c/ Gás",
    Agua: "Água Mineral",

    SucoAgua: "Suco na Água",
    SucoLeite: "Suco no Leite",

    Acai400: "Açaí 400ml",
    Acai500: "Açaí 500ml",
    Guarana: "Guaraná do Amazonas 400ml",

    ShakeMorango: "Milk Shake Morango",
    ShakeChocolate: "Milk Shake Chocolate",
    ShakeOvomaltine: "Milk Shake Ovomaltine"
  };

  return nomes[nome] || nome;
}

function atualizar() {
  const lista = document.getElementById("lista");
  const totalSpan = document.getElementById("total");

  let total = 0;
  lista.innerHTML = "";

  for (let item in carrinho) {
    const qtd = carrinho[item].qtd;
    const preco = carrinho[item].preco;
    const subtotal = qtd * preco;

    total += subtotal;

    lista.innerHTML += `
      <div class="item-carrinho">
        ${formatarNome(item)} x${qtd} - R$ ${subtotal.toFixed(2)}
      </div>
    `;
  }

  totalSpan.innerText = total.toFixed(2);
}

function enviar() {
  if (Object.keys(carrinho).length === 0) {
    alert("Adicione itens ao pedido.");
    return;
  }

  let mensagem = "Olá, quero fazer um pedido:%0A%0A";

  for (let item in carrinho) {
    mensagem += `• ${formatarNome(item)} x${carrinho[item].qtd}%0A`;
  }

  mensagem += `%0ATotal: R$ ${document.getElementById("total").innerText}`;


// 👇 COLE AQUI
let obs = document.getElementById("obs-geral").value;

if(obs.trim() !== ""){
  mensagem += `%0A📝 Observações: ${encodeURIComponent(obs)}`;
}

// 👇 DEPOIS DISSO VEM A URL
const url = "https://wa.me/5584988687921?text=" + mensagem;

window.open(url, "_blank");
}
}

/* ALTERAÇÃO PEDIDA:
   Cachorro Quente Tradicional agora custa R$ 7,50
   No HTML use:
   onclick="add('Tradicional',7.50)"
*/