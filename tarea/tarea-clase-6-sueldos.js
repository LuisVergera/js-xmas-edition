document.querySelector("#agregar-miembro").onclick = function(event){
    event.preventDefault();
    crearInputs();
}

document.querySelector("#quitar-miembro").onclick = function(event){
    event.preventDefault()
    borrarInputs()
}

document.querySelector("#calcular").onclick = function(event){
    event.preventDefault();  
    let $sueldosFamiliares = document.querySelectorAll(".sueldo");   
    const sueldo = obtenerSueldos($sueldosFamiliares)
    if(validarFormulario(sueldo)===''){
    document.querySelector("#mayor-sueldo").textContent = obtenerMayorSueldo(sueldo);
    document.querySelector("#menor-sueldo").textContent = obtenerMenorSueldo(sueldo);
    document.querySelector("#salario-anual-promedio").textContent = obtenerPromedioAnual(sueldo);
    document.querySelector("#salario-mensual-promedio").textContent = obtenerPromedioMensual(sueldo);
    }
}

function crearInputs(){
    const $div = document.createElement('div');
    $div.className = "integrante";
    
    const $label = document.createElement('label');
    $label.textContent = "Sueldo anual del familiar";

    const $input = document.createElement('input');
    $input.type = "number"
    $input.className = "sueldo"

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function borrarInputs(){
    const $integrantes = document.querySelector('.integrante');
    $integrantes.remove();
}

let $sueldosFamiliares = document.querySelectorAll(".sueldo")
let sueldosFamiliares = Number($sueldosFamiliares).value

function obtenerSueldos(sueldosFamiliares){
    let $sueldosFamiliares = document.querySelectorAll(".sueldo")
    const sueldos = []

    for (let i= 0; i< sueldosFamiliares.length;i++){     
        if (sueldosFamiliares[i].value===''){
            continue
        }        
        sueldos.push(Number(sueldosFamiliares[i].value))
    }
    return sueldos;
}

//Validaciones

function validarSueldosFamiliares(sueldosFamiliares){
    if (sueldosFamiliares===0){
        return 'Debe ingresar un valor'
    };

    if (!/^[0-9]+$/.test(sueldosFamiliares)){
        return 'Debe ingresar solo numeros'
    }

    if (sueldosFamiliares<10000){
        return 'Deberias buscar un empleo mejor'
    }else{
    return ''}
}

function validarFormulario(array){
    const $form = document.querySelector('#calculador-sueldos');

    let errorArray = [];
    for (let i = 0; i < array.length; i++){
        errorArray.push(validarSueldosFamiliares(array[i]))
    };

    const errores = Object.assign({}, errorArray);

    const esExito = manejarErrores(errores,$form)===0;

    if (esExito){
        return '';
    }
}


//Manejo de errores

function manejarErrores(errores, form){
    const keys = Object.keys(errores);
    let cantidadDeErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];
        
        if(error){
            cantidadDeErrores++;
            form[key].classList.add('error');
            const $errores = document.querySelector('#errores');
            $errores.classList.remove('error-hide');
            const errorContainer = document.createElement('li');
            const space = document.createElement('br');
            errorContainer.innerText = error;
            errorContainer.className = "error-text"
            $errores.appendChild(errorContainer);
            $errores.appendChild(space);
        }
    })
    return cantidadDeErrores;
}


