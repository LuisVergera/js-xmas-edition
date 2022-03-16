const $form = document.querySelector('#formulario-integrantes');
const $form2 = document.querySelector('#formulario-edad')
const $grupoFamiliar= document.querySelector("#cantidad-integrantes");
const $botonSiguiente= document.querySelector("#siguiente");
const $botonLimpiar= document.querySelector("#limpiar")
const formularioEdad = document.querySelector("#formulario-edad");

$botonLimpiar.onclick=function(){
    borrarIntegrantesAnteriores()
}

function crearIntegrante($cantidadIntegrantes){
    for (let i=0;i<$cantidadIntegrantes;i++){
        crearInputs(i)
    }    
}

function crearInputs(input){
    const $div=document.createElement('div');
    $div.className="integrante"
    
    const $label=document.createElement('label')
    $label.textContent= "edad del integrante" + (input + 1)

    const $input=document.createElement('input')
    $input.type='number'
    $input.className='edad'

    $div.appendChild($label)
    $div.appendChild($input)

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }

function mostrarCalculadora(){
    formularioEdad.className = ""

}

function HTMLCollectionIntoArray(HTMLCollection) {
    let array = [];
    for (let i = 0; i < (HTMLCollection.length); i++) {
    let item = Number(HTMLCollection.item(i).value)
    array.push(item);
}
    return array;
}

const $botonCalcular=document.querySelector("#calcular")  

$botonCalcular.onclick= function(event){
    event.preventDefault();
    let arrayEdades = HTMLCollectionIntoArray(document.getElementsByClassName('edad'));
    
    if(validarFormularioEdades(arrayEdades)=== ''){
    mostrarResultados("mayor",obtenerMayorNumero(arrayEdades))
    mostrarResultados("menor",obtenerMenorNumero(arrayEdades))
    mostrarResultados("promedio",obtenerPromedio(arrayEdades))
    }
    
}

function obtenerMayorNumero(numeros){
    let numeroMaximo= (numeros[0])  
    for (let i=1; i<numeros.length;i++){
        if (numeros[i]>numeroMaximo){
            numeroMaximo= numeros[i];
        }
    }
    return numeroMaximo;
}

function obtenerMenorNumero(numeros){
    let numeroMinimo= (numeros[0]);
    for (let i=1;i<numeros.length;i++){
        if (numeros[i]<numeroMinimo){
            numeroMinimo=numeros[i];
        }
    }
    return numeroMinimo;
}

function obtenerPromedio(numeros){
    let acumulador=0
    for (let i=0; i<numeros.length;i++){
        acumulador+= numeros[i]
    }
    return acumulador/numeros.length
}

function obtenerEdades (){
    let $edadFamiliares= document.querySelectorAll(".edad")
    const edades= [];    
    for (let i= 0; i< $edadFamiliares.length;i++){
        edades.push(Number($edadFamiliares[i].value))
    }
    return edades;
}

function mostrarResultados(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent= valor
}

function validarEdades(edades){
    if (edades===0){
        return "Debe ingresar un valor"
    }
    
    if (!/^\d+$/.test(edades)){
        return "Este campo solo puede contener numeros";
    } else{
    return ''}
}

function validarFamiliares(familiares){
   /* if (familiares.trim().length === 0){
        return "Debe ingresar al menos un familiar"
    }*/
    if (familiares === '0'){
      return "Debe ingresar al menos un familiar"
    }

    if (!/^[0-9]+$/.test(familiares)){
        return "Solo puede ingresar numeros"
    }

    else {
        return""
    }
}

function clearErrors(formnumber) {
    document.querySelector(`#errors${formnumber}`).innerHTML = '';
}

function validarFormularioIntegrantes(event){
    event.preventDefault();
    const $form = document.querySelector('#formulario-integrantes')
    const cantidadIntegrantes = $form['cantidad-integrantes'].value;
    const errorFamiliares = validarFamiliares(cantidadIntegrantes);
    //let $cantidadIntegrantes= Number($grupoFamiliar.value);  
    
    //let esExito = manejarErrores(errorFamiliares)=== 0;
    borrarIntegrantesAnteriores()
   
    const errores = {
        'cantidad-integrantes': errorFamiliares
}
    let esExito = manejarErrores(errores, $form)=== 0;

    if (esExito){     
        crearIntegrante(cantidadIntegrantes)
        document.querySelector('#cantidad-integrantes').className = '';
        mostrarCalculadora()
    }
    else{      
        document.querySelector('#errores').appendChild(error);
        document.querySelector('#cantidad-integrantes').className = 'error';
    }

    console.log(errores)
    
    manejarErrores(errores)
}

function manejarErrores (errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;

    keys.forEach(function (key){
        const error = errores[key]
        if(error){
            cantidadErrores++;
            $form[key].className = "error"

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error)
        }
        else{
            $form[key].className = ''
        }
    })
    return cantidadErrores
}

$form.onsubmit = validarFormularioIntegrantes;


function manejarErrores02(errors, form) {
    const keys = Object.keys(errors);
    
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errors[key];

        if(error){
            cantidadErrores ++,
            form[key].classList.add('error');
            //console.log(error);
            const $errors = document.querySelector('#errors02');
            $errors.classList.remove('error-hide');
            const errorContainer = document.createElement('li');
            const space = document.createElement('br');
            errorContainer.innerText = error;
            $errors.appendChild(errorContainer);
            $errors.appendChild(space);
            //console.log($errors)
        } /*else {
           //form[key].classList.add('correct');
           //form[key].classList.remove('error');
        }*/
    });
    return cantidadErrores;
}

function validarFormularioEdades(array){
    const $form = document.querySelector('#formulario-edad')  
    clearErrors('02');
    let errorArray = [];
    for (let i = 0; i < array.length; i++) {
        errorArray.push(validarEdades(array[i]));
    };
    const errores = Object.assign({}, errorArray);
    
    let esExito = manejarErrores02(errores,$form) === 0;   
    
    if (esExito){
        return ''
}
}
















