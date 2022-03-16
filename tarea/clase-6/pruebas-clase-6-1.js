function probarValidarFamiliares(){
    console.assert(validarFamiliares('0')=== "Debe ingresar al menos un familiar",
    "La funcion probarValidarFamiliares no valido que el input no este vacio")

    console.assert(validarFamiliares('asfasf') === "Solo puede ingresar numeros",
    "La funcion probarValidarFamiliares no valido que el input contenga solo numeros") 

   /* console.assert(validadFamiliares('12.5') === "El numero no debe contener decimales",
    "La funcion probarValidarFamiliares no valido que el input no contenga decimales")*/



    console.assert(validarFamiliares(17) === '',
    "La funcion probarValidarFamiliares fallo al ingresar un numero valido")
}

probarValidarFamiliares();


function probarValidarEdades(){
    console.assert(validarEdades(0) === "Debe ingresar un valor",
    "La funcion probarValidarEdades no valido que el input no este vacio")

    console.assert(validarEdades('asfdasf') === "Este campo solo puede contener numeros",
    "La funcion probarValidarEdades no valido que el input contenga solo numeros")

    console.assert(validarEdades(9) === '',
    "La funcion probarValidarEdades fallo con un numero valido")
}

probarValidarEdades();