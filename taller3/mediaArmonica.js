

function calcularMediaArmonica()
{
    let datos = [50, 10, 20, 10, 40,];
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
