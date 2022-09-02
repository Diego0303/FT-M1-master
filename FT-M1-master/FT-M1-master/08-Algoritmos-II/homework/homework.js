'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array [0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if ( array[i] > pivot){
      right.push(array[i]);
    } else {
      left.push (array[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
//caso base
  if (array.length === 1) return array;

  let division = split(array);
  let left = division[0];
  let right = division[1];

  return paste(mergeSort(left), mergeSort(right));
}

//funcion que divide el arreglo
function split(array){
  let middle = Math.floor(array.length / 2);
  let left = array.slice (0, middle);
  let right = array.slice (middle);

  return [left, right];
}

function paste(left, right) {
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex])
      rightIndex++
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
