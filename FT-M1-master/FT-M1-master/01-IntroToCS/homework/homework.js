'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  const i = 10;
  var resto = 0;
  var cont = 1;
  var resultado = 0;
  while (num > 0){
   resto = num % i;
   num = Math.floor(num/i);
   resultado += resto*cont;
   cont*=2; 
  }
  return resultado;
  /*let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;*/

}

function DecimalABinario(num) {
  // tu codigo aca
  const i = 2;
  var resto = 0;
  var cont = 1;
  var resultado = 0;
  while (num > 0){
   resto = num % i;
   num = Math.trunc(num/i);
   resultado += resto*cont;
   cont*=10; 
   }
  return resultado.toString();
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}