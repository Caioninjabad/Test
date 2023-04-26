const botaoMenu = document.querySelector('.cabecalho_menu-hamburguer')
const menu = document.querySelector('.lista-menu')

botaoMenu.addEventListener('click', () => {
	menu.classList.toggle('menu-ativo')
})