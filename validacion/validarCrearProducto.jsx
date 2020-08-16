export default function validarCrearProducto(valores) {
    let errores = {};

    // Validar el nombre del usuario
    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }

    // Validar empresa
    if (!valores.empresa) {
        errores.empresa = "El nombre de empresa es necesario"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email = "Email no válido"
    }
    
    // Validar la url
    if(!valores.url) {
        errores.url = 'La URL del producto es necesaria'
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = 'URL no formateada o no válida'
    }

    // Validar descripción
    if(!valores.descripcion) {
        errores.descripcion = 'Agrega una descripción de tu producto';
    }

    return errores;
}