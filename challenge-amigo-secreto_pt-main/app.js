 let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    // Atualiza a lista na tela (opcional)
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);

    input.value = ""; // Limpa o campo
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${sorteado}</li>`;
}
