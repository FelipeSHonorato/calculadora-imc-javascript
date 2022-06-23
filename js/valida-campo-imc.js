// Script para validar campos de Altura e Peso da tabela.

var pacientes = document.querySelectorAll(".paciente");

//Criamos um for para percorrer a DOM na tabela pacientes
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  // Abstraimos os tds da tabela
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");

  //Criarmos variáveis booleanas para validação
  var pesoEhValido = true;
  var alturaEhValida = true;

  //Criamos a regra para validação do peso
  if (peso < 0 || peso >= 1000) {
    pesoEhValido = false;
  }

  // Criamos a regra de validação da altura
  if (altura < 0 || altura >= 3.0) {
    alturaEhValida = false;
  }

  //Criamos a validações e alertas caso esteja fora da regra de negócio do cálculo
  if (pesoEhValido && alturaEhValida) {
    imc.textContent = calculaImc(peso, altura);
  } else {
    if (pesoEhValido && alturaEhValida == false) {
      imc.textContent = "Altura Inválida!";
      paciente.classList.add("paciente-invalido");
    } else {
      if (pesoEhValido == false && alturaEhValida) {
        imc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
      } else {
        imc.textContent = "Peso e Altura Inválidos!";
        paciente.classList.add("paciente-invalido");
      }
    }
  }
}
