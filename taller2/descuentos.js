// //Solucion 1, 2
//  const coupons = 
//  [
//      "silver",
//      "gold",
//      "diamond"
//  ];

//Solucion #1

// function couponsAproved()
// {
//     const discountsCoupons = document.getElementById("discountCoupons");
//     const disCupons = discountsCoupons.value;

//     let discount = 0;

//     switch(disCupons)
//     {
//         case coupons[0]:
//             discount = 10;
//             break;
        
//         case coupons[1]:
//             discount = 15;
//             break;

//         case coupons[2]:
//             discount = 25;
//             break;
//     }
//     return discount;
// }

//Solucion #2
// function couponsAproved()
// {
//     const discountsCoupons = document.getElementById("discountCoupons");
//     const disCupons = discountsCoupons.value;

//     let discount = 0;

//     if(!coupons.includes(disCupons))
//     {
//         alert("El cupon no es valido");
//     }else if(disCupons === "silver")
//     {
//         discount = 5;
//     }else if(disCupons === "gold")
//     {
//         discount = 10;
//     }else if(disCupons === "diamond")
//     {
//         discount = 20;
//     }
//     return discount;
// }
const result1 = document.getElementById("result");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
let discount = 0;
const coupons = 
[
    {
        name: "silver",
        discount: 5,
    },
    {
        name: "gold",
        discount : 10,
    },
    {
        name: "diamond",
        discount: 20,
    },
    {
        name: "maicraft",
        discount: 30,
    },
    {
        name: "drake",
        discount: 40,
    },
    {
        name: "elvis",
        discount: 50,
    },
    {
        name: "shadow",
        discount: 60,
    },
    {
        name: "jaal",
        discount: 90,
    },
    {
        name: "nada",
        discount: 70,
    },
    {
        name: "nada",
        discount: 100,
    },
];

function calcDiscount()
{
    const priceInitial = document.getElementById("InputPrice");
    const discountInitial = document.getElementById("InputDiscount");

    const price = parseInt(priceInitial.value);
    const discount = parseInt(discountInitial.value);

    const discountPercentage = 100 - discount;
    const priceFinal = (price * discountPercentage) / 100;
    
    return priceFinal;
}

function couponsAproved()
{
    const discountsCoupons = document.getElementById("discountCoupons");
    const disCupons = discountsCoupons.value;
    
    let discount = 0;

    const couponValueValid = function(coupons)
    {
        return coupons.name === disCupons
    }

    const userCoupon = coupons.find(couponValueValid);

    if(!userCoupon)
    {
        alert("no existe el cupon " + disCupons);
    }else
    {
        discount = userCoupon.discount;
    }

    return discount;

    
}

function calcularDescuento()
{
    const priceInitial = document.getElementById("InputPrice");
    const price = parseInt(priceInitial.value);
    const priceFinal = calcDiscount();
    const discounts = couponsAproved();
    
    const percentageCoupon = 100 - discounts;
    const superDiscount = (priceFinal * percentageCoupon) / 100;

    const save = price - superDiscount;

    console.log(priceFinal)
    console.log(discounts)

    result1.innerHTML = "El precio con descuento es: " + "$ " + priceFinal

    result2.innerHTML = "El precio que pagas con Cupon: " 
    + "$ " + superDiscount;

    result3.innerHTML = "Te has ahorrado: "  + "$ " + save;
}
