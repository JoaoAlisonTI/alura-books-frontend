let livros = [];
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
buscarLivrosDaApi();

async function buscarLivrosDaApi() {
  const response = await fetch(endpointDaApi);
  livros = await response.json();
  livros = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
  
  //console.table(livros);
};