var nome = 'Vitoria'
var idade = 39
var letra = 'v'
var peso = 60.30

console.log(nome, idade, letra, peso)

var clientes = ['Vitoria', 'Maria', 'Helena', 'André', 'Rafael']

for (var i = 0; i < clientes.length; i++) {
    console.log(clientes[i])
}

function myFunction(){
    var x = document.getElementById('contextText');
    /* a variável x é o texto dentro da div com id="contextText" */
    if (x.style.display ==='none'){
      /* se o sytle da div for none, ou seja, estiver invisível... */
      x.style.display = 'block';
      /* ... então faça o style ser block, ou seja, ficar visível... */
    } else {
      x.style.display = 'none';
      /* ... caso contrário, (se já estiver visível) faça sumir.*/
    }
  }

  var exemploBoolean = 10;
  var exemplonull = null;
  var exemploUndefined;
  var exemploNumber = 40;
  var exemploString = "Exemplo";
  var exemploCaracter = 'A';
  var $ = 100;
  var $$ = "Hello World";

  console.log(exemploBoolean)
  console.log(exemplonull)
  console.log(exemploUndefined)
  console.log(exemploNumber)
  console.log(exemploString)
  console.log(exemploCaracter)
  console.log($)
  console.log($$)