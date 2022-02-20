//Helpers
function esPar(numero)
{
    return (numero & 2 === 0);
}

function calcularMediaAritmetica(iterable)
{
    let array = iterable.split(", ");
    let sumaArray = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2));
    return promedio = sumaArray / array.length;
}

//Calculadora de mediana
function meadianaSalarios(lista)
{
    const mitad =parseInt(lista.length / 2);

    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2);
        return mediana;

    }else
    {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosNatuland = personas.map
(
    function (persona)
    {
        return persona.salario;
    }
);

const salariosOrdenados = salariosNatuland.sort
(
    function (prev, next)
    {
        return prev - next;
    }
);
const medianaGeneral = meadianaSalarios(salariosOrdenados);

//Media Top 10 %
const spliceStart = (salariosOrdenados.length * 90 ) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;
const salariosTop10 = salariosOrdenados.splice(spliceStart, spliceCount);

const medianaTop10 = meadianaSalarios(salariosTop10);

console.log(medianaGeneral, medianaTop10)