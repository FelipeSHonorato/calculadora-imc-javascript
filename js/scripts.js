var titulo = document.querySelector(".titulo");
titulo.textContent = "Nova Nutrição";

var paciente = document.querySelector("#primeiro-paciente");

var pacientePeso = document.querySelector(".info-peso").textContent;

console.log(pacientePeso);

var pacienteAltura = document.querySelector(".info-altura").textContent;

console.log(pacienteAltura);

var imc = pacientePeso / (pacienteAltura * pacienteAltura);
console.log(imc);
