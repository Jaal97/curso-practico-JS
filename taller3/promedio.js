//Promedio o Media Aritmetica
const obtenerPromedio = document.getElementById("obtendato");
const result = document.getElementById("result");
function calcularMediaAritmetica(iterable)
{
    let array = iterable.split(", ");
    let sumaArray = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2));
    return promedio = sumaArray / array.length;
}
function calcular ()
{
    let datosCalcular = obtenerPromedio.value;
    let resultado = calcularMediaAritmetica(datosCalcular);
    result.innerHTML = "Promedio " + resultado.toFixed(2);
}



