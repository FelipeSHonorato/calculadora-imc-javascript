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
  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  //Criamos a validações e alertas caso esteja fora da regra de negócio do cálculo
  if (pesoEhValido && alturaEhValida) {
    imc.textContent = calculaImc(peso, altura);
  } else {
    var erro = validaErro(pesoEhValido, alturaEhValida);
    imc.textContent = erro;
  }
}

// Função para indicar o erro ocorrido com o paciente que já foi cadastrado
function validaErro(peso, altura) {
  var erros = [];

  if (peso && altura == false) {
    erros.push("Altura Inválida!");
    paciente.classList.add("paciente-invalido");
  }
  if (peso == false && altura) {
    erros.push("Peso Inválido!");
    paciente.classList.add("paciente-invalido");
  }

  if (peso == false && altura == false) {
    erros.push("Peso e Altura Inválidos!");
    paciente.classList.add("paciente-invalido");
  }
  return erros;
}

//Função para validação do peso
function validaPeso(peso) {
  if (peso > 0 && peso <= 300) {
    return true;
  } else {
    return false;
  }
}

//Função para validação da altura
function validaAltura(altura) {
  if (altura > 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

//Função para validação do paciente no form
function validaNovoPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Campo nome não pode ser vazio");
  }
  if (paciente.gordura.length == 0) {
    erros.push("Campo gordura não pode ser vazio");
  }
  if (!validaPeso(paciente.peso) && !validaAltura(paciente.altura)) {
    erros.push("Peso e Altura Inválidos!");
  } else {
    if (!validaPeso(paciente.peso)) {
      erros.push("Peso Inválido!");
    }
    if (!validaAltura(paciente.altura)) {
      erros.push("Altura Inválida!");
    }
  }
  return erros;
}
