function calcularMediaAritmetica(iterable)
{
    let array = iterable.split(", ");
    let sumaArray = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2));
    return promedio = sumaArray / array.length;
}

function calcularMediana()
{
    //const listas = [100, 200, 300, 500, 1000];
    const result = document.getElementById("result");
    //Capturar los datos del Html y guardarlos en una
    //variable
    const listas = document.getElementById("numArray");
    const listasValue = listas.value;
    //Al ser String los valores capturados, se procede a convertirlos
    //a numero 
    let arrayMediana = Array.from(listasValue.split(","), Number);
    //Ordenamos los valores de la lista desordenada mediante el metodo 
    //sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
    //Hallamos la mitad de la cantidad de la cantidad de elementos de la lista
    //y la redondeamos en caso que sea decimal
    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    //creamos la funcion esPar para verificar si la lista es Par o impar
    function esPar(numero)
    {
        if(numero % 2 === 0)
        {
            return true;
        }else
        {
            return false;
        }
    }

    let mediana;
    //Si la lista es par hallamos la mediana mediante esta forma
    //de lo contrario seguiriamos con el else
    if(esPar(listaOrdenada.length))
    {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        //Llamamos a la funcion calcularMediaAritmetica() con los elemento1
        //elemento2 como parametros y guardamos en la variable mediana
        let promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
    }else
    {
        mediana = listaOrdenada[mitadLista];
    }
    result.innerHTML = mediana + "se";
} 

    // const listas = [100, 200, 300, 500, 1000];
    

    