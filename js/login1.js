var usuarios = [
    {"email": "Livia", "cpf": "123", "senha": "123"},
    {"email": "", "cpf": "123", "senha": "123"},
    {"email": "", "cpf": "123", "senha": "123"},
];

function Entrar() {
    var usuario = document.getElementById('email').value.toLowerCase();
    var senha = document.getElementById('senha').value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "index.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}