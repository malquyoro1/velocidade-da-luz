# velocidade-da-luz<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Conversor distância na velocidade da luz</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<html>

<head>
  <link rel="stylesheet" href="style.css">
  <title>
    Conversor distância na velocidade da luz
  </title>
</head>

<body>

  <div class="container">
    <h1 class="page-title">
      Viagem ao Espaço
    </h1>

    <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-conversor-de-moedas.svg" class="page-logo" alt=""><br><br>
    <h3 class="sub-title">
      Descubra o tempo de viagem na velocidade da luz
    </h3>
    <label for="moeda">Insira o distância em Km </label><br>
    <input type="number" id="valor" size="2" /><br>
    <button type="submit" onclick="converter()"> Converter </button>
    <h2 id="valorConvertido"></h2>
  </div>
  <a href="https://alura.com.br/" target="_blank">
    <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">

    <a class="link" href="https://www.linkedin.com/in/s%C3%A1vio-rafael-silva-9250091b3/" target="_blank">Desenvolvido por Sávio Rafael</a>
</body>

</html>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>

function converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDaDistancia = parseFloat(valor);

  if (valorDaDistancia < 299792.45) {
    var valorEmMilisegundo = valorDaDistancia / 299.8;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " milissegundo(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  } else if (valorDaDistancia < 17987547.59) {
    var valorEmMilisegundo = valorDaDistancia / 299827;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " segundo(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  } else if (valorDaDistancia < 1079252855.99) {
    var valorEmMilisegundo = valorDaDistancia / 17989646;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " minuto(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  } else if (valorDaDistancia < 25902068543.99) {
    var valorEmMilisegundo = valorDaDistancia / 1079567729;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " hora(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  } else if (valorDaDistancia < 777062056319.99) {
    var valorEmMilisegundo = valorDaDistancia / 25908113770;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " dia(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  } else if (valorDaDistancia < 9324744675839.99) {
    var valorEmMilisegundo = valorDaDistancia / 777515607090;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " mês(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  } else if (valorDaDistancia > 9324744675840) {
    var valorEmMilisegundo = valorDaDistancia / 9324744675840;

    var valorEmMilisegundozfix = valorEmMilisegundo.toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido =
      " O tempo da viagem da distancia inserida é(são): " +
      valorEmMilisegundozfix +
      " ano(s)" +
      "<img src='https://j.gifs.com/zppZ98.gif' alt='' class='img-resultado'>";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}
body {
  font-family: "Roboto Mono", monospace;
  min-height: 400px;
  background-image: url("https://catracalivre.com.br/wp-content/uploads/2014/08/sistema_solar_-_reproducao.jpg");
  background-color: #000000;
  background-size: 200vh;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  text-align: center;
  padding: 20px;
  height: 100vh;
}

.page-title {
  color: white;
  margin-top: 8px;
  position: static;
  font-size: 45px;
  top: 1px;
  text-align: center;
}

.page-subtitle {
  color: green;
  font-size: 30px;
}

.page-logo {
  width: 180px;
  position: absolute;
  top: 5px;
  left: 10px;
}

valorConvertido {
  color: white;
}

.alura-logo {
  width: 40px;
  position: absolute;
  top: 5px;
  right: 10px;
}

input {
  margin: 12px;
  padding: 13px;
  border-radius: 5px;
}

label {
  color: white;
  font-size: 25px;
  border: none;
  background-color: rgb(72 60 60 / 77%);
}

button {
  margin-top: 1px;
  padding: 4px 8px;
  border-radius: 10px;
  background: #ffffff;
  font-size: 25px;
}

h3 {
  color: white;
  font-size: 26px;
  margin-top: 1px;
  border: none;
  background-color: rgb(72 60 60 / 77%);
}

h2 {
  color: white;
  font-size: 20px;
  margin-top: 1px;
  border: none;
  background-color: rgb(72 60 60 / 77%);
}

img.img-resultado {
  width: 770px;
  height: 300px;
}

.link {
  position: absolute;
  text-decoration: none;
  top: 25px;
  right: 7px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
}
