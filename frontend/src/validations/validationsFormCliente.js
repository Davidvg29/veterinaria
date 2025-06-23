function validationFormCliente({nombre, dni, direccion, celular, email}){
    let error = ""
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nombre || nombre.length < 3 ) return error="por favor ingrese un nombre verdadero"
    if(!dni || isNaN(dni) || dni.length<8) return error="por favor ingrese un dni correcto"
    if(!direccion || direccion.length<3) return error="por favor ingrese una direccion valida"
    if(!celular || isNaN(celular) || celular.length<10) return error= "por favor ingrese un numero de celular valido"
    if(!email || !regex.test(email)) return error = "error email incorrecto"

    return error
}

export default validationFormCliente;