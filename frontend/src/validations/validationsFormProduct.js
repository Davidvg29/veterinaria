function validationFormProduct({nombre,codigo,categoria,animal,precio,stock}){
    let error=""

    if(!nombre || nombre.length < 3 ) return error="por favor ingrese un nombre verdadero"
    if(!codigo || codigo.length < 5)  return error="por favor ingrese un codigo valido"
    if(!categoria || categoria.length < 3 ) return error="por favor ingrese una categoria"
    if(!animal || animal.length < 3 ) return error="por favor ingrese un tipo de animal"
    if(isNaN(precio) || precio <= 0) return error="el precio debe ser mayor a cero"//isNaN(precio) previene errores si por algún motivo precio no es número.
    if(!Number.isInteger(stock) || stock < 0 ) return error="el stock debe ser un numero entero mayor o igual a cero" //Number.isInteger(stock) asegura que el valor no tenga decimales.

    return error
}

export default validationFormProduct;