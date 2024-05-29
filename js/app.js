var arrayAmigos = [];

var listaSorteio = document.getElementById("lista-sorteio");
var listaAmigos = document.getElementById("lista-amigos");

function adicionar() { 

    var nome = document.getElementById("nome-amigo").value;
    
    if (nome == "") {
        
        alert("Insira um nome, por favor!");

    } else if (arrayAmigos.includes(nome)) {

        alert("Nome já inserido, escolha outro!");

    } else {

        arrayAmigos.push(nome);
        listaAmigos.innerText = arrayAmigos.join(", ");

    };    

    document.getElementById("nome-amigo").value = "";
    document.getElementById("nome-amigo").focus();
};

function sortear() {

    if (arrayAmigos.length < 2) {

        alert("Por favor, insira pelo menos duas pessoas!");
        return;

    };

    var sorteados = [...arrayAmigos];
    listaSorteio.innerHTML = "";

    // Embaralhar a lista de sorteados
    sorteados.sort(() => Math.random() - 0.5);

    for (var i = 0; i < arrayAmigos.length; i++) {

        var amigo = sorteados[i];
        var amigoSecreto = sorteados[(i + 1) % arrayAmigos.length]; // Garantir o ciclo
        var novoPar = `<p>${amigo} ⭢ ${amigoSecreto}</p>`;
        listaSorteio.insertAdjacentHTML("beforeend", novoPar);

    };
};

function reiniciar() {

    arrayAmigos = [];
    listaAmigos.innerText = "";
    listaSorteio.innerText = "";
    
};
