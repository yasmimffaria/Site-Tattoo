function cadastrar() {
    var nome = document.getElementById('cadastroNome').value;
    var senha = document.getElementById('cadastroSenha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;

    // Verifica se os campos estão preenchidos
    if (nome === '' || senha === '' || confirmaSenha === '') {
        exibirAlerta('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        exibirAlerta('As senhas não coincidem.');
        return;
    }

    // Salva os dados no armazenamento local (simulação de armazenamento)
    localStorage.setItem(nome, senha);

    exibirAlerta('Cadastro realizado com sucesso!', 'alert-success');

    // Redireciona para a página de login após 3 segundos
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 3000);
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

