//Script para enviar o form através do botão Adicionar

var botaoAdicionar = document.querySelector("#adicionar-paciente"); //Pegamos primeiro o botão da DOM

// Inserimos uma função ao botão
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); //Acrescentamos event.preventeDefault para evitar que o botão ao clicar recarregue a página

  // Abstrai o formulário preenchido
  var form = document.querySelector("#form-adiciona");

  //  Cria um objeto paciente com os dados obtidos do form preenchido
  var paciente = obterPacienteFormulario(form);

  // Aplicamos as validações de peso e altura no novo paciente
  if (!validaNovoPaciente(paciente)) {
    console.log("Paciente inválido");
    return;
  }

  // Cria nova linha no HTML para o novo paciente
  var pacienteTr = criarNovoTr(paciente);

  //Pegamos a tabela de pacientes da DOM
  var tabela = document.querySelector("#tabela-pacientes");

  //Inserimos dentro da tabela a nova tr com seus tds do novo paciente
  tabela.appendChild(pacienteTr);

  //Após inserido o novo paciente os campos são resetados
  form.reset();
});
