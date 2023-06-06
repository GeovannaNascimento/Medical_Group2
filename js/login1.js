var usuarios = [
    {"email": "Lívia", "cpf": "123", "senha": "123"},
    {"email": "", "cpf": "123", "senha": "123"},
    {"email": "", "cpf": "123", "senha": "123"},
];

function Entrar() {
    var email = document.getElementsByName('email')[0].value.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;

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