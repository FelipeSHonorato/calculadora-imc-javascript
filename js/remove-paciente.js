// Função para remover um paciente da tabela pacientes através de dois clicks
var pacientes = document.querySelectorAll(".paciente");

//Selecionamos a tabela para ser responsável em delegar a ação
var tabela = document.querySelector("table");

//Inserimos o event para direcionar qual célula sofreu o duplo click
tabela.addEventListener("dblclick", function (event) {
  // Inserimos um efeito de CSS para remoção gradativa do tr
  event.target.parentNode.classList.add("fadeOut");
  // Seguramos o tempo igual ao efeito acima para remoção completa da tr
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});

// Função para remover um paciente da tabela pacientes através do botão remover
function removerPaciente(elementoClicado) {
  elementoClicado.closest("tr").classList.add("fadeOut");

  setTimeout(function () {
    elementoClicado.closest("tr").remove();
  }, 500);
}
