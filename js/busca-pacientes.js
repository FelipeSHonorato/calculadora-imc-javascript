//Buscando dados de uma API externa de pacientes

//Selecionando o botão responsável pela execução
var botaoAdicionar = document.querySelector("#buscar-pacientes");

//Adicionando evento ao botão
botaoAdicionar.addEventListener("click", function () {
  console.log("buscando paciente");

  //Instanciando uma nova conexão
  var xhr = new XMLHttpRequest();

  //Configurando conexão com método e endereço
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  //Adicionando evento ao carregar informando o tipo de resposta
  xhr.addEventListener("load", function () {
    //Inserindo uma mensagem caso ocorra alguma erro no consumo da API
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      //Caso a conexão seja feita corretamente o erro não irá aparecer
      erroAjax.classList.add("invisivel");

      //Informando o tipo de resposta que será recebida no caso String
      var resposta = xhr.responseText;
      console.log(typeof resposta);

      //Efetuando um parse, transformando String em Objeto
      var pacientes = JSON.parse(resposta);
      console.log(typeof pacientes);

      //Inserindo os dados recebidos e convertidos na tabela pacientes
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      //Caso a conexão não seja feita corretamente o erro será exibido
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
