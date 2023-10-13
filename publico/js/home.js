alert(`Pagina Home`);

//Inicio - transiçao do nav para branco ao descer a pagina
//Funcionando junto ao css - linhas 39-46

const menu = document.querySelector('nav');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);

//Fim

// Funçao do botao que leva para a pagina de Cadastro

function caminhoCadastro() {
    window.location.href = "file:///c%3A/Users/thais/OneDrive/%C3%81rea%20de%20Trabalho/projetoNode/publico/html/cadastro.html";
}

//Funçao do botao que leva para a pagina de Contato

function caminhoContato() {
    window.location.href = "file:///c%3A/Users/thais/OneDrive/%C3%81rea%20de%20Trabalho/projetoNode/publico/html/contato.html";
}

//Fim