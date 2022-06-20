var titulo = document.querySelector(".titulo");
titulo.textContent = "Nova Nutrição";

var paciente = document.querySelector("#primeiro-paciente");
var pacientePeso = document.querySelector(".info-peso").textContent;
var pacienteAltura = document.querySelector(".info-altura").textContent;
var imcPaciente = pacientePeso / (pacienteAltura * pacienteAltura);

var pesoEhValido = true;
var alturaEhValida = true;

if (pacientePeso < 0 || pacientePeso > 1000) {
  console.log("Peso Inválido!");
  pesoEhValido = false;
}

if (pacienteAltura < 0 || pacienteAltura > 3.0) {
  console.log("Altura Inválida!");
  alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
  var imc = document.querySelector(".info-imc");
  imc.textContent = imcPaciente;
}
