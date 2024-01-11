let btnmenu = document.getElementById('Lista-menu');
let menu = document.getElementById('Menu-Mobile');
let overlay = document.querySelector('.overlay-menu');

btnmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('ativo');
});

// Adicione um event listener para fechar o menu e remover a classe do overlay ao clicar no botão fechar
let botaoFechar = document.querySelector('.Botao-fechar');
botaoFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});

// Seletor para cada item do menu mobile
const menuItems = document.querySelectorAll('.Link-Menu-MB');

// Função para fechar o menu
function fecharMenu() {
    const menu = document.getElementById('Menu-Mobile');
    const overlay = document.querySelector('.overlay-menu');

    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
}

// Adiciona um event listener para cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', fecharMenu);
});