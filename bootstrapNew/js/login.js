function entrar() {
    var nome = document.getElementById('loginNome').value;
    var senha = document.getElementById('loginSenha').value;

    // Verifica se o usuário existe no armazenamento local (simulação de armazenamento)
    var senhaArmazenada = localStorage.getItem(nome);
    // Salva o nome do usuário na sessão (simulação de sessão)
     sessionStorage.setItem('loggedUser', nome);

    if (senhaArmazenada === null || senhaArmazenada !== senha) {
        exibirAlerta('Usuário ou senha incorretos.');
    } else {
        exibirAlerta('Login bem-sucedido!', 'alert-success');
        // Redirecione ou execute outras ações após o login bem-sucedido
        window.location.href = 'index.html'; //encaminha para a pagina desejada 
    }
}

function exibirAlerta(mensagem, classe = 'alert-danger') {
    var alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = mensagem;
    alertBox.className = 'alert ' + classe;
    alertBox.style.display = 'block';

    setTimeout(function() {
        alertBox.style.display = 'none';
    }, 3000); // Oculta o alerta após 3 segundos
}
