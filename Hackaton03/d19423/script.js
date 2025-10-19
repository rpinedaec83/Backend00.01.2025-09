async function ejercicio01() {
    //1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.

    //let numero = Number.parseInt( prompt("Escribe un numero"));
    let numero = 0
    const { value: numeroRecibido } = await Swal.fire({
        title: "Escribe un numero ",
        input: "text",
        inputLabel: "Escribe un numero",
        inputPlaceholder: "Ingresa un numero "
    });
    if (numeroRecibido) {
        numero = Number.parseInt(numeroRecibido)
    }

    if (isNaN(numero)) {

        Swal.fire("Lo que escribiste no es un numero");
        return;
    }

    if (numero > 99 && numero < 1000) {
        alert("Si tiene 3 digitos")
    } else {
        alert("No tiene 3 digitos")
    }
    let strNumero = numero.toString();
    if (strNumero.length === 3) {
        alert("Si tiene 3 digitos")
    } else {
        alert("No tiene 3 digitos")
    }
}

function ejercicio02() {
    //2. Hacer un algoritmo en Javascript que lea un número entero por el teclado y determinar si es negativo.


}