// alert(`Pagina Cadastro`);

//Inicio - transiçao do nav para branco ao descer a pagina
//Funcionando junto ao css 

const menu = document.querySelector('nav');

function activeScroll() {

    menu.classList.toggle('ativo', scrollY > 0);

}

window.addEventListener('scroll', activeScroll);

/* Fim*/

// Funçao do botao que leva para a pagina Home

function caminhoHome() {
    window.location.href = "file:///c%3A/Users/thais/OneDrive/%C3%81rea%20de%20Trabalho/projetoNode/publico/html/home.html";
}

/* Fim*/