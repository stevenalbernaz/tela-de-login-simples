function logar() {
    var login = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if ( login == "admin" && senha == "admin"){
        alert("Sucesso");

    }else{
        alert('Usuário ou senha incorretos');
    }
}