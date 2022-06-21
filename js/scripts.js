var titulo = document.querySelector(".titulo");
titulo.textContent = "Nova Nutrição";

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes.length);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var pacientePeso = paciente.querySelector(".info-peso").textContent;
  var pacienteAltura = paciente.querySelector(".info-altura").textContent;
  var imcPaciente = pacientePeso / (pacienteAltura * pacienteAltura);
  var imc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (pacientePeso < 0 || pacientePeso >= 1000) {
    pesoEhValido = false;
  }

  if (pacienteAltura < 0 || pacienteAltura >= 3.0) {
    alturaEhValida = false;
  }

  if (pesoEhValido && alturaEhValida) {
    imc.textContent = imcPaciente.toFixed(2);
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
