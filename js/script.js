var botaoMenu = document.querySelector('.botao__menu');
var nav = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
    nav.classList.toggle('botao__menu__ativo')
    botaoMenu.classList.toggle('botao__menu__x')
})