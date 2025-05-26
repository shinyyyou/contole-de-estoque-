// Ao iniciar, carrega do localStorage
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

// Depois que adiciona ou remove um produto, atualize o localStorage
function salvarLocal() {
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

function adicionarProduto() {
  // (seu código)
  produtos.push({ nome, preco, estoque });
  salvarLocal();
  atualizarTabela();
  limparCampos();
}

function removerProduto(index) {
  produtos.splice(index, 1);
  salvarLocal();
  atualizarTabela();
}
