document.write("Hello World!");
console.log('Olá Mundo!');

//Adicionar em arquivo diferente pelo PC

function converteFparaC(F) {
    var celsius = (F - 32) * (5 / 9)
    return celsius;
}

var base      = 2;
      var expoente  = 8;
      var resultado = base;
      document.write('Base: 2' + '<br>');
      document.write('Expoente: 8' + '<br><br>');
      for (i = 0; i <= expoente; i++) {
        if (i == 0) {
          document.write('2<sup>' + i + '</sup> = 1 <br>');
        } else if (i == 1) {
          document.write("2<sup>" + i + "</sup> = " + (2*1) + "<br>");
        } else {
          for (x = 2; x <= i; x++) {
            resultado *= base;
          }
          document.write("2<sup>" + i + "</sup> = " + resultado + "<br>");
          resultado = base;
        }
      }
