class Produto {
    constructor (nome, datadeCadastro, descricao, valor){
    this.nome = nome;
    this.datadeCadastro = datadeCadastro;
    this.descricao = descricao;
    this.valor = valor;
  }
  mostrarProdutos (){
    return this.nome + this.datadeCadastro + this.descricao + this.valor ;
  }
  }
  
  const produto = new Produto("Vandal Neptuno", "31-02-1999", "Skin de Vandal - Valorant", "R$ 79,49");
  console.log(produto.mostrarProdutos())
  
  class ProdutosDestaque extends Produto{
    constructor (nome, datadeCadastro, descricao,  valor, imagemDestaque){
      super(nome, datadeCadastro, descricao, valor, imagemDestaque)
      this.imagemDestaque = imagemDestaque;
    }
    mostrarProdutosDestaque (){
        return `
        <h1 class = "nm1" >${this.nome}</h1>
        <h4 class = "nm1">${this.datadeCadastro}</h4>
        <img class="imgDestaque"src="${this.imagemDestaque}"></img>
        <p class = "nm1">${this.descricao}</p>
        <p class = "nm1">${this.valor}</p>
        ` 
       // return this.nome + this.datadeCadastro + this.descricao + this.valor + this.imagemDestaque;
     }
  }   
  const produtosDestaque = new ProdutosDestaque("Vandal Reaver", "24/05/2023", "Skin de Vandal - Valorant", "R$ 74,49", "https://valorantinfo.com/images/br/vandal-saqueador-nivel-5variante-1-vermelha_valorant_full_skin_163596.webp");
    
  
  const produtos = document.getElementById("produto-destaque")
  produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
  
  
  