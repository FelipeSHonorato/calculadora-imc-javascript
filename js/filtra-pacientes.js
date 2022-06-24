//Função de filtragem de pacientes da tabela
var campoFiltro = document.querySelector("#filtrar-tabela");

//Com evento input conseguimos saber os está sendo digitado no campo
campoFiltro.addEventListener("input", function () {
  //Selecionamos todos os pacientes da tabela para executar o filtro
  var pacientes = document.querySelectorAll(".paciente");

  // Se o resultado for diferente de 0 no campo input
  if (this.value != 0) {
    //Aplicamos o foreach para mapear todos os nomes da tabela
    pacientes.forEach((paciente) => {
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      //Aplicando expressão regular para que o filtro comece a filtrar com somente letras
      // e não o nome completo, this.value = valor inserido no input e "i" = indica que não
      // será Case Sensetive, caso queira inserir "I".
      var expressao = new RegExp(this.value, "i");

      //Caso encontre o nome ele aplica uma classe invisivel em todos os outros nomes
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
        //Caso não encontre ele remove de todos os nomes a classe invisível
      } else {
        paciente.classList.remove("invisivel");
      }
    });
  } else {
    pacientes.forEach((paciente) => {
      paciente.classList.remove("invisivel");
    });
  }
});
