function obtenerMayorSueldo(numeros){
    let arrayNumeros = []

    for (let i = 0; i<numeros.length;i++){

        arrayNumeros.push(numeros[i])
    }
    return Math.max.apply(Math,arrayNumeros)
}

function obtenerMenorSueldo(numeros){
    let arrayNumeros = []

    for (let i = 0; i<numeros.length;i++){

        arrayNumeros.push(numeros[i])
    }
    return Math.min.apply(Math,arrayNumeros)
}

function obtenerPromedioAnual(numeros){
    let acumulador = 0;
    
    for (let i = 0; i<numeros.length;i++){

        acumulador+= numeros[i]
    }
return acumulador / numeros.length
}

function obtenerPromedioMensual(numeros){
    let acumulador = 0;
    const mesesEnUnAnio = 12;

    for (let i = 0; i<numeros.length;i++){

        acumulador+= numeros[i]
    }
return ((acumulador / numeros.length) / mesesEnUnAnio).toFixed(2);
}







