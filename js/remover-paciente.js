// Função para remover um paciente da tabela pacientes
var pacientes = document.querySelectorAll(".paciente");

//Selecionamos a tabela para ser responsável em delegar a ação
var tabela = document.querySelector("table");

//Inserimos o event para direcionar qual célula sofreu o duplo click
tabela.addEventListener("dblclick", function (event) {
  // Com parentNode removemos a tr toda e não somente a célula que sofreu o duplo click
  event.target.parentNode.remove();
});
