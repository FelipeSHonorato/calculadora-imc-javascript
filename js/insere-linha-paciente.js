//Insere nova linha no HTML para um novo paciente

function criarNovoPacienteTabela(paciente) {
  //Criamos uma tr para novo paciente a ser inserido na tabela
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //Criamos as tds que irão no tr que criamos
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  //Inserimos os valores já obtidos e acrescentamos nas tds criadas
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  //Inserimos as tds criadas dentro da tr criada
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}
