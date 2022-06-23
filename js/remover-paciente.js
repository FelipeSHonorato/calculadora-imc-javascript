// Função para remover um paciente da tabela pacientes
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
