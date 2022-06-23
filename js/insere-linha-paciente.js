//Insere nova linha no HTML para um novo paciente

function criarNovoTr(paciente) {
  //Criamos uma tr para novo paciente a ser inserido na tabela
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //Criamos as tds que irão no tr que criamos
  var nomeTd = criarNovoTd(paciente.nome, "info-nome");
  var pesoTd = criarNovoTd(paciente.peso, "info-peso");
  var alturaTd = criarNovoTd(paciente.altura, "info-altura");
  var gorduraTd = criarNovoTd(paciente.gordura, "info-gordura");
  var imcTd = criarNovoTd(paciente.imc, "info-imc");

  //Inserimos as tds criadas dentro da tr criada
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function criarNovoTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
