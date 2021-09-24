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