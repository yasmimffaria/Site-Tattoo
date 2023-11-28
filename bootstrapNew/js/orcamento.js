var loggedUser = sessionStorage.getItem('loggedUser');
// Exibe o nome do usuário na tela
if (loggedUser) {
  var alertBox = document.getElementById('Mostra');

  alertBox.style.display = 'none';
  var loggedUser = sessionStorage.getItem('loggedUser');
  document.getElementById('loggedUserName').innerHTML = 'Bem-vindo, ' + loggedUser + '! ' + '<button type="button" class="btn btn-light" onclick="sair()">Sair</button>';
}
function sair() {
  // Remove o nome do usuário da sessão
  sessionStorage.removeItem('loggedUser');

  // Redireciona de volta para a página de index
  window.location.href = 'index.html';
}

function calcularOrcamento() {
  // Recupera os valores dos campos
  var loggedUser = sessionStorage.getItem('loggedUser');

  if (loggedUser !== "" && loggedUser !== null) {
  var nome = document.getElementById('nomeInput').value;
  var telefone = document.getElementById('telefoneInput').value;
  var dimensaoCm = parseFloat(document.getElementById('dimensaoCmInput').value) || 0;
  var coloridaCheckbox = document.getElementById('coloridaCheckbox').checked;
  var pretoBrancoCheckbox = document.getElementById('pretoBrancoCheckbox').checked;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!nome || !telefone || isNaN(dimensaoCm) || !(coloridaCheckbox || pretoBrancoCheckbox)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
  }

  // Lógica de cálculo do orçamento
  var custoPorCm = coloridaCheckbox ? 50 : 20;
  var orcamento = dimensaoCm * custoPorCm;

  // Exibe o resultado do orçamento
  var resultado = "Orçamento para " + nome + " (" + telefone + "): R$ " + orcamento.toFixed(2);
  document.getElementById('resultadoOrcamento').innerHTML = resultado;
}else{
  alert('Error!Não é possivel fazer seu orçamento, faça login!');
  return;
}
}
