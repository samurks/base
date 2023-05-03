class Produto{
    constructor(nome, datadeCadastro, descricao, preco){
    this.nome = nome;
    this.datadeCadastro = datadeCadastro;
    this.descricao = descricao;
    this.preco = preco;

    }

    mostrarProduto(){
    return this.nome +  this.datadeCadastro  + this.descricao + this.preco;
    }
}

class produtoDestaque extends Produto{
    constructor(nome, datadeCadastro, descricao, preco, imagemDestaque){
        super(nome, datadeCadastro, descricao, preco)
        this.imagemDestaque = imagemDestaque;
    }

    mostrarProdutoDestaque(){
    return ` 
    <p class="vermeio">${this.nome}<p>
    <p>${this.datadeCadastro}<p>
        `
}
}

   const produto = new Produto('manteiga', '21/07/2000', 'bom', 'R$5')
     const produtodestaque = new produtoDestaque('margarina', '21/07/2020', 'otimo', 'R$8', 'margarina.jpg')
     console.log(produto.mostrarProduto())
     console.log(produtodestaque.mostrarProduto());
     
 produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrarProdutoDestaque());