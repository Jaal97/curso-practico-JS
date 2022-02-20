//Promedio o Media Aritmetica
const getAverage = document.getElementById("obtenPromedio");
const resultAverage = document.getElementById("resultAverage");
function calcularMediaAritmetica(iterable)
{
    let array = iterable.split(", ");
    let sumaArray = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2));
    return promedio = sumaArray / array.length;
}
function calcularPromedio ()
{
    let datosCalcular = getAverage.value;
    let resultado = calcularMediaAritmetica(datosCalcular);
    resultAverage.innerHTML = "Promedio " + resultado.toFixed(2);
}

//Mediana
const get_Median = document.getElementById("obtenMedia");
const resultMedian = document.getElementById("medianResult");
function calcularMediana(iterable)
{
    let array = iterable.split(", ");
    let listaOrden = array.sort((a, b) => a - b);
    let mitadLista = parseInt(listaOrden.length / 2);
    let mediana;

    if(listaOrden.length % 2 === 0)
    {
        let elemento1 = listaOrden[mitadLista];
        let elemento2 = listaOrden[mitadLista - 1];
        mediana = (Number(elemento1) + Number(elemento2)) / 2;
    }else
    {
        mediana = listaOrden[mitadLista];
    }
    return mediana;
} 
function getMedian()
{
    let medianValue = get_Median.value;
    let result = calcularMediana(medianValue);
    resultMedian.innerHTML = "Mediana: " + result;
}

//Moda
const get_Moda = document.getElementById("obtenModa");
const resultModa_1 = document.getElementById("moda_result_1"); 
const resultModa_2 = document.getElementById("moda_result_2");
const resultModa_3 = document.getElementById("moda_result_3");  
const repeticionNumeros = {};

function calcularModa(iterable)
{
   let array = iterable.split(", ");
   let count_elements = array.map(elemento => 
    {
        if(repeticionNumeros[elemento])
        {
            repeticionNumeros[elemento] += 1;
        }else
        {
            repeticionNumeros[elemento] = 1;
        }
    })

    count_elements = Object.entries(repeticionNumeros);
    let menorAmayor = count_elements.sort((a, b) => a[1] - b[1])
    const modas = [];

    for(let i = 0; i < menorAmayor.length; i++)
    {
        if(menorAmayor[i][1] == menorAmayor[menorAmayor.length - 1][1])
        {
            modas.push(menorAmayor[i])
        }
    }
    return modas;
}

function getModa()
{
    let modaValue = get_Moda.value;
    let resultModa = calcularModa(modaValue);
    if(resultModa.length > 1)
    {
        for(let i = 0; i < resultModa.length; i++)
        {
            resultModa_1.innerHTML = "La moda es: " + resultModa[i][0] + " y se repite" 
            + resultModa[i][1] + " veces"; 
        }
    }else
    {
        resultModa_1.innerHTML = "La moda es: " + resultModa[0][0] 
        + " se repite " + resultModa[0][1] + " veces";
    }
}

//Media Armonica
const getMedianArmonic = document.getElementById("obtenMediaArmonica");
const armonica_result = document.getElementById("armonica_result");

function calcularMediaArmonica(iterable)
{
    let datos = iterable.split(", ");
    let resultado = 0;
    let mediaArmonica;

    let orden = datos.sort
    (
        function (prev, next)
        {
            return prev - next;
        }
    );
    for(let i = 0; i < orden.length; i++)
    {
        resultado += 1 / orden[i];        
    }    
    return mediaArmonica = orden.length / resultado;
}   

function getArmonica()
{
    let mediaArmonica = getMedianArmonic.value;
    let resultado_Armonica = calcularMediaArmonica(mediaArmonica);
    armonica_result.innerHTML = "La media armonica es: " + resultado_Armonica.toFixed(2);
}

// Volumen

const radio_volumen = document.getElementById("obtenVolumen");
const altura_volumen = document.getElementById("obtenVolumen2");
const volumen_result = document.getElementById("volumen_result");

function calcularVolumen(radio, altura)
{
    let radio_vo = radio;
    let altura_vo = altura;
    let PI = 3.1415;

    let radio_elevado = radio_vo * radio_vo;
    let resultado_volumen = 0;

     return resultado_volumen = PI * radio_elevado * altura_vo;
    
}

function getVolumen()
{
    let radio = radio_volumen.value;
    let altura = altura_volumen.value;
    let resultado_volumen = calcularVolumen(radio, altura);
    volumen_result.innerHTML = "Volumen del cilindro es: " + resultado_volumen.toFixed(3);
}

