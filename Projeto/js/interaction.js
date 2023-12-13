// pegando os elementos do html 
const navMenu = document.querySelector('.nav-menu');
const sanduiche = document.querySelector('.sanduiche');

// função que alterna os elementos a aplicação da class active 
function toggleMenu () {
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// chamada da função 
sanduiche.addEventListener('click', toggleMenu);

navMenu.addEventListener('click', (e) => {
    if(e.target.classList.comtains('item-menu')){
        toggleMenu();
    }
});

