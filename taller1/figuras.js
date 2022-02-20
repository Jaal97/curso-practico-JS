//Código del cuadrado
function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado)
{
    return lado * lado;
}

//Código el triangulo 
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function alturaTriangulo(lado, base)
{
    let cateto = base / 2;
    let cat = cateto * cateto;

    let lados = lado * lado;
    let lat = lados - cat;
    
    let altura = Math.sqrt(lat);
    let alturafinal = Math.trunc(altura);
    return alturafinal;
}

function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

//Código círculo 
const PI = Math.PI;
//Diametro
function diametroCirculo(radio)
{
    return radio * 2;
}

//Circunferencia
function perimetroCirculo(radio)
{
   return diametroCirculo(radio) * PI;
    
}

//Área
function areaCirculo(radio)
{
    return (radio * radio) * PI; 
}

//Interacción con HTML

//Calcular Cuadrado
const mostrarCuadro = document.getElementById("mostrarCuadro");

function calcularPerimetroCuadrado() 
{
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    const perimetro = perimetroCuadrado(value);
    mostrarCuadro.innerHTML = "El perimetro de tu cuadrado es: "
    + perimetro + " " + " cm";

}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    mostrarCuadro.innerHTML = "El área de tu cuadrado es: " 
    + area + " cm^2";
}

//Calcular Triangulo
const mostrarTriangulo = document.getElementById("mostrarTriangulo");

function calcularPerimetroTriangulo()
{
    const lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const base = document.getElementById("base");
    
    const value1 = parseInt(lado1.value);
    const value2 = parseInt(lado2.value);
    const value3 = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    mostrarTriangulo.innerHTML = "El perimetro de tu triangulo es: " 
    + perimetro + " cm";

}

function calcularAlturaTriangulo()
{
    const lado1 = document.getElementById("lado1");
    const base = document.getElementById("base");

    const value1 = parseInt(lado1.value);
    const value2 = parseInt(base.value);
    
    const altura = alturaTriangulo(value1, value2);
    mostrarTriangulo.innerHTML = "La altura de tu triangulo es: " 
    + altura + " cm";
    return altura
  
}

function calcularAreaTriangulo()
{
    const lado1 = document.getElementById("lado1");
    const base = document.getElementById("base");

    const value1 = parseInt(lado1.value);
    const value2 = parseInt(base.value);

    const altura = calcularAlturaTriangulo(value1, value2);
    const area = areaTriangulo(value2, altura);
    
    mostrarTriangulo.innerHTML = "El área de tu triangulo es: " 
    + area + " cm^2" 
}

//Calcular Circulo
const mostrarCirculo = document.getElementById("mostrarCirculo");

function calcularDiametroCirculo()
{
    const radio = document.getElementById("radioCirculo");

    const value = parseInt(radio.value);
    const diametro = diametroCirculo(value);
    mostrarCirculo.innerHTML = "El diametro de tu circulo es: " 
    + diametro + " cm";
}

function calcularPerimetroCirculo()
{
    const radio = document.getElementById("radioCirculo");

    const value = parseInt(radio.value);
    const perimetro = perimetroCirculo(value);
    mostrarCirculo.innerHTML = "El perimetro de tu circulo es: " 
    + perimetro + " cm";

}

function calcularAreaCirculo()
{
    const radio = document.getElementById("radioCirculo");
    const value = parseInt(radio.value);

    const area = areaCirculo(value);
    mostrarCirculo.innerHTML = "El area de tu circulo es: " 
    + area + " cm^2";
}