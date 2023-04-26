let btnOrdenar = document.getElementById('btnOrdenarPorPreco')

btnOrdenar.addEventListener('click', OrdernarPorPreco)

function OrdernarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosTela(livrosOrdenados)
}