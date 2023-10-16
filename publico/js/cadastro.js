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

//Completando elementos a partir do CEP

const pesquisarCep = async () => {
limparCampos();

    const cep = document.getElementById('cep').value;

    const url = `http://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {

        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')){  
            //caso o cep informado nao esteja no banco de dados do link,  ele vai dar erro e informar que nao foi localizado
            document.getElementById('logradouro').value = 'C.E.P. não localizado!';
        } else {
            preencheFormulario(endereco);
        }
        
    } else {
        document.getElementById('logradouro').value = 'Revise o C.E.P. inserido!';
    }

}

const cepValido = (cep) => cep.length == 8 && eNumero(cep);
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const limparCampos = (endereco) => {
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencheFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

document.getElementById('cep').addEventListener('blur', pesquisarCep);

// Funçao para não permitir caracteres especiais ao preencher o nome

const nomeInput = document.querySelector("#nome_completo");

nomeInput.addEventListener("keypress", function(e) {

    if(!checandoCaracter(e)){
        e.preventDefault();
    }
});

function checandoCaracter(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[a-z A-Z]';

    if(caracter.match(pattern)){
        return true;
    }
}

// Funçao para permitir somente numeros ao preencher o telefone

const celularInput = document.querySelector("#tel_cliente");

celularInput.addEventListener("keypress", function(e) {

    if(!checandoNumero(e)){
        e.preventDefault();
    }
});

function checandoNumero(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(caracter.match(pattern)){
        return true;
    }
}

// Funçao para permitir somente numeros ao preencher o ddd

const dddInput = document.querySelector("#ddd");

dddInput.addEventListener("keypress", function(e) {

    if(!checandoDDD(e)){
        e.preventDefault();
    }
});

function checandoDDD(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(caracter.match(pattern)){
        return true;
    }
}

// Funçao para permitir somente numeros ao preencher o CEP

const cepInput = document.querySelector("#cep");

cepInput.addEventListener("keypress", function(e) {

    if(!checandoCEP(e)){
        e.preventDefault();
    }
});

function checandoCEP(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(caracter.match(pattern)){
        return true;
    }
}

//Funçao para validar email

function validando(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Por favor, insira um email valido."
        text.style.color = "#ff0000";
        text.style.fontFamily = "sans-serif";
        text.style.fontWeight = "bold";
        text.style.fontSize = "11px";
    }

    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}