function provarValidarSueldosFamiliares() {
  console.assert(
    validarSueldosFamiliares(0) === "Debe ingresar un valor",
    "La funcion validarSueldosFamiliares no valido que el sueldo no sea 0"
  );

  console.assert(
    validarSueldosFamiliares("asfasf") === "Debe ingresar solo numeros",
    "La funcion validarSueldosFamiliares no valido que los sueldos solo contengan numeros"
  );

  console.assert(
    validarSueldosFamiliares(4000) === "Deberias buscar un empleo mejor",
    "La funcion validarSueldosFamiliares no valido que al pobre empleado no lo esten negreando"
  );

  console.assert(
    validarSueldosFamiliares(15000) === "",
    "La funcion validarSueldosFamiliares fallo con un sueldo valido"
  );
}

provarValidarSueldosFamiliares();
