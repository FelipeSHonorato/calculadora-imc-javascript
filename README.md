# Calculadora de IMC em JavaScript

Projeto de estudos em JavaScript onde crio uma tabela de cadastro de clientes e seu respectivo IMC.

Nesse projeto também é abordado método de consumo de API externa, efetuando o consumo de dados em JSON de uma API pública no Heroku.

Tecnologias utilizadas no desenvolvimento deste projeto:

- JavaScript
- HTML
- CSS

---

# Informações de desenvolvimento

O projeto foi criado para ser gerada automaticamente o calculo de IMC de um paciente através de um pequeno formulário.

Nesse formulário contém os seguintes campos:

* Nome
* Altura
* Peso
* % de gordura

Ao preencher esses campos e clicar "Adicionar" uma função é disparada para gerar uma nova linha na tabela (tr) e suas colunas respectivas (td) contendo nome do paciente, altura, peso, % de gordura e seu imc calculado.

O imc foi calculado através de uma função onde obtendo a informação do paciente é aplicada a seguinte fórmula: (peso/(altura*altura)).

Além disso, nesse projeto foram aplicados alguns tratamentos de erro, onde o usuário é informado caso:

* Peso - Seja vazio, abaixo de 0kg ou acima ou igual a 300kg.
* Altura - Seja vazio, abaixo de 0 metros ou acima ou igual a 3 metros.
* Nome e % de Gordura - Sejam vazios.
* API - Caso ocorra uma erro no consumo da API de pacientes externos.

A API consumida no projeto é hospedada no Heroku e seu consumo foi através do formato JSON (JavaScript Object Notation). 

Clicando sobre o botão "Buscar Paciente" é efetuada a solicitação via "GET" via url e retornado em string, foi efetuado sua conversão via parse para JSON e inserida na tabela através da função de criar novo paciente.

---

# Execução da aplicação

A aplicação após ser clonada através do prompt ou de uma IDE, como Visual Studio Code.

A sua execução é através da vizualização do arquivo index.html contido dentro do projeto.

---

# Imagem do projeto sendo executado via browser

![image](https://user-images.githubusercontent.com/21232079/175616101-c55efbec-561c-4901-899e-d3134855a4b4.png)
