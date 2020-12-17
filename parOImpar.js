function parEimpar(numeroX){
    if (numeroX ===0){
        console.log("Error")
    }else{
    numeroX%2 === 0 ? console.log("El número es par"): console.log("El número es impar")

    }
}
   console.log(parEimpar(897))
   console.log(parEimpar(100))
   console.log(parEimpar(0))
