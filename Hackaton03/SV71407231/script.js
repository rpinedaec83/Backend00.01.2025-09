const contenedor = document.getElementById('contenedor-botones');

for (let i = 1; i <= 40; i++) {
  const boton = document.createElement('button');
  boton.textContent = `Ejercicio ${i}`;
  boton.className = 'boton';
  boton.addEventListener('click', () => {
    
    const funcion = window[`btn${i}`];
        funcion();
    });
  contenedor.appendChild(boton);
}

 function btn1(){
    const numeroDigitado = prompt('Ingrese un numero: ')
    if(numeroDigitado >= 100 && numeroDigitado <= 999 || numeroDigitado <= -100 && numeroDigitado >= -999  ){
        alert('El numero SI tiene tres digitos')
    } else alert ('El numero NO tiene digitos')
    
}  
function btn2(){
    const numeroNegativo = prompt('Ingrese un numero: ')
        if (numeroNegativo < 0 ) {
            alert('El numero es negativo')
        }else alert ('El numero es positivo')
}
function btn3() {
    const num = prompt('Ingresa un numero: ')
        if(num % 10 === 4 ||  num % 10 === -4 ){
            alert('El numero termina en 4')
        }else alert('El numero no termina en 4')
}
function btn4() {
    let a = 0, b =0, c= 0, temp = 0;
    a = parseFloat(prompt('Ingrese el primer numero: ')); 
    b = parseFloat(prompt('Ingrese el segundo numero: ')); 
    c = parseFloat( prompt('Ingrese el tercer numero: ')); 
    if (a > b && a > c) {
        if (b > c) {
        temp = a; a = c; c = temp;
    } else temp = a; a = b; b = c; c = temp;
    } else if (b > a && b > c) {
        if (a > c) {
            temp = b; b = a; a = c; c = temp;
    } else {
        temp = b; b = c; c = temp;
    }
    } else if (c > a && c > b) {
    if (a > b) {
        temp = a; a = b; b = temp;
    }
    }
    alert(`Los numeros ordernados son: ${a}, ${b}, ${c}`)
}
function btn5(){
  let cantidad = parseInt(prompt("Ingrese la cantidad de zapatos:"));
  let precio = 80;
  let total = cantidad * precio;
  let descuento = 0;

  if (cantidad > 30) descuento = 0.4;
  else if (cantidad > 20) descuento = 0.2;
  else if (cantidad > 10) descuento = 0.1;

  let totalFinal = total - (total * descuento);
  alert(`Total a pagar: $${totalFinal}`); 
}

function btn6(){
  let horas = parseInt(prompt("Ingrese las horas trabajadas:"));
  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * 20;
  } else {
    let extras = horas - 40;
    sueldo = (40 * 20) + (extras * 25);
  }

  alert(`El sueldo semanal es: $${sueldo}`);
}

function btn7(){
  let tipo = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
  let precio = parseFloat(prompt("Ingrese el precio del helado:"));
  let descuento = 0;

  if (tipo === "A") descuento = 0.10;
  else if (tipo === "B") descuento = 0.15;
  else if (tipo === "C") descuento = 0.20;

  let total = precio - (precio * descuento);
  alert(`El total con descuento es: $${total}`);    
}
function btn8 () {
  let n1 = parseFloat(prompt("Ingrese la primera nota:"));
  let n2 = parseFloat(prompt("Ingrese la segunda nota:"));
  let n3 = parseFloat(prompt("Ingrese la tercera nota:"));

  let promedio = (n1 + n2 + n3) / 3;

  alert("El promedio es: " + promedio);

  if (promedio >= 10.5) {
    alert("El estudiante aprobó.");
  } else {
    alert("El estudiante no aprobó.");
  }
}
function btn9(){
  let sueldo = parseFloat(prompt("Ingrese su sueldo actual:"));
  let aumento;

  if (sueldo > 2000) aumento = sueldo * 0.05;
   else aumento = sueldo * 0.10;

  let nuevoSueldo = sueldo + aumento;
  alert("Su nuevo sueldo es: $" + nuevoSueldo);
}
function btn10 (){
  let num = parseInt(prompt("Ingrese un número:"));
  if (num % 2 === 0) alert("El número es par");
  else alert("El número es impar");    
}
function btn11(){
  let a = parseFloat(prompt("Ingrese el primer número:"));
  let b = parseFloat(prompt("Ingrese el segundo número:"));
  let c = parseFloat(prompt("Ingrese el tercer número:"));

  let mayor = a;
  if (b > mayor) mayor = b;
  if (c > mayor) mayor = c;

  alert(`El mayor es: ${mayor}`);    
}
function btn12(){
  let a = parseFloat(prompt("Ingrese el primer número:"));
  let b = parseFloat(prompt("Ingrese el segundo número:"));

  if (a > b) alert(`El mayor es: ${a}`);
  else if (b > a) alert(`El mayor es: ${b}`);
  else alert("Ambos números son iguales");
}
function btn13(){
  let letra = prompt("Ingrese una letra:").toLowerCase();

  if (["a", "e", "i", "o", "u"].includes(letra))
    alert("Es una vocal");
  else
    alert("No es una vocal");
}
function btn14(){
  let num = parseInt(prompt("Ingrese un número del 1 al 9:"));

  if (num < 1 || num > 9) 
    alert("Número fuera de rango");
  else if (num === 1) 
    alert("1 no es primo");
  else {
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        primo = false;
        break;
      }
    }
    if (primo)
      alert("Es primo");
    else
      alert("No es primo");
  }   
}
function btn15(){
  let cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
  let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));

  let pulgadas = cm / 2.54;
  let kilogramos = libras * 0.453592;

  alert(cm + " centímetros equivalen a " + pulgadas + " pulgadas.");
  alert(libras + " libras equivalen a " + kilogramos + " kilogramos.");    
}
function btn16(){
    let num = parseInt(prompt("Ingrese un número del 1 al 7:"));

  switch (num) {
    case 1: alert("Lunes"); break;
    case 2: alert("Martes"); break;
    case 3: alert("Miércoles"); break;
    case 4: alert("Jueves"); break;
    case 5: alert("Viernes"); break;
    case 6: alert("Sábado"); break;
    case 7: alert("Domingo"); break;
    default: alert("Número inválido");
  }
}
function btn17(){
    let hora = parseInt(prompt("Ingrese la hora:"));
    let minuto = parseInt(prompt("Ingrese los minutos:"));
    let segundo = parseInt(prompt("Ingrese los segundos:"));

    segundo = segundo + 1;
    if (segundo == 60) {
        segundo = 0;
        minuto = minuto + 1;
    }

    if (minuto == 60) {
        minuto = 0;
        hora = hora + 1;
    }

    if (hora == 24) 
        hora = 0;

    alert("La hora dentro de un segundo será: " + hora + ":" + minuto + ":" + segundo);

}

function btn18(){
  let cantidad = parseFloat(prompt("Ingrese la cantidad de CDs a vender:"));
  let precioUnidad, totalVenta, ganancia;

  if (cantidad <= 9) 
    precioUnidad = 10;
  else if (cantidad <= 99) 
    precioUnidad = 8;
  else if (cantidad <= 499) 
    precioUnidad = 7;
  else 
    precioUnidad = 6;

  totalVenta = cantidad * precioUnidad;
  ganancia = totalVenta * 0.0825;

  alert("Precio total para el cliente: $" + totalVenta);
  alert("Ganancia para el vendedor: $" + ganancia);
}
function btn19(){
  let idEmpleado = parseInt(prompt("Ingrese el número de identificador del empleado (1-4):"));
  let dias = parseInt(prompt("Ingrese los días trabajados (máximo 6):"));
  let pagoDia, totalPagar;

  switch (idEmpleado) {
    case 1: pagoDia = 56; break; // Cajero
    case 2: pagoDia = 64; break; // Servidor
    case 3: pagoDia = 80; break; // Preparador de mezclas
    case 4: pagoDia = 48; break; // Mantenimiento
    default:
      alert("Identificador inválido.");
      pagoDia = 0;
  }

  if (pagoDia > 0) {
    if (dias < 0 || dias > 6) 
      alert("Número de días inválido (debe ser entre 0 y 6).");
    else {
      totalPagar = dias * pagoDia;
      alert("El total a pagar es: $" + totalPagar);
    }
  }
}
function btn20(){
  let a = parseInt(prompt("Ingrese el primer número entero positivo:"));
  let b = parseInt(prompt("Ingrese el segundo número entero positivo:"));
  let c = parseInt(prompt("Ingrese el tercer número entero positivo:"));
  let d = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

  let valido = true;

  if (a < 0 || b < 0 || c < 0 || d < 0) {
    alert("Error: debe ingresar números enteros positivos.");
    valido = false;
  }

  if (valido) {
    let pares = 0;
    if (a % 2 == 0) pares++;
    if (b % 2 == 0) pares++;
    if (c % 2 == 0) pares++;
    if (d % 2 == 0) pares++;

    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;
    if (d > mayor) mayor = d;

    alert("Cantidad de pares: " + pares);
    alert("El mayor es: " + mayor);

    if (c % 2 == 0) {
      let cuadrado = b * b;
      alert("El cuadrado del segundo es: " + cuadrado);
    }

    if (a < d) {
      let media = (a + b + c + d) / 4;
      alert("La media de los cuatro es: " + media);
    }

    if (b > c) {
      if (c >= 50 && c <= 700) {
        let suma = a + b + c + d;
        alert("La suma de los cuatro números es: " + suma);
      }
    }
  }
}
function btn21(){
  let num = parseInt(prompt("Ingrese un número:"))
  let fact = 1
  for (let i = 1; i <= num; i++) fact = fact * i
  alert("El factorial de " + num + " es " + fact)
}
function btn22(){
  let n = parseInt(prompt("Ingrese n:"))
  let suma = 0
  for (let i = 1; i <= n; i++) suma = suma + i
  alert("La suma de los " + n + " primeros números es " + suma)    
}
function btn23(){
  let n = parseInt(prompt("Ingrese n:"))
  let suma = 0
  for (let i = 1; i <= n; i++)
    if (i % 2 !== 0)
      suma = suma + i
  alert("La suma de los impares hasta " + n + " es " + suma)    
}
function btn24(){
  let suma = 0
  for (let i = 2; i <= 1000; i += 2)
    suma = suma + i
  alert("La suma de los pares hasta 1000 es " + suma)    
}
function btn25(){
  let num = parseInt(prompt("Ingrese un número:"))
  let fact = 1
  while (num > 0) {
    fact = fact * num
    num = num - 1
  }
  alert("El factorial es " + fact)    
}
function btn26(){
  let dividendo = parseInt(prompt("Ingrese el dividendo:"))
  let divisor = parseInt(prompt("Ingrese el divisor:"))
  let cociente = 0
  while (dividendo >= divisor) {
    dividendo = dividendo - divisor
    cociente = cociente + 1
  }
  alert("Cociente: " + cociente + "\nResto: " + dividendo)    
}
function btn27(){
  let num, suma = 0, contador = 0
  do {
    num = parseFloat(prompt("Ingrese un número (negativo para salir):"))
    if (num >= 0) {
      suma = suma + num
      contador = contador + 1
    }
  } while (num >= 0)
  if (contador > 0)
    alert("La media es " + (suma / contador))
  else
    alert("No se ingresaron números positivos.")    
}
function btn28(){
  let i = 1, suma = 0
  do {
    suma = suma + i
    i = i + 1
  } while (i <= 100)
  alert("La suma de los primeros 100 números es " + suma)    
}
function btn29(){
  let i = 1, suma = 0
  while (i <= 100) {
    suma = suma + i
    i = i + 1
  }
  alert("La suma de los primeros 100 números es " + suma)
}
function btn30(){
  let suma = 0
  for (let i = 1; i <= 100; i++)
    suma = suma + i
  alert("La suma de los primeros 100 números es " + suma)    
}
function btn31(){
  let sumaPar = 0, sumaImpar = 0, contPar = 0, contImpar = 0
  for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Ingrese un número:"))
    if (num % 2 === 0) {
      sumaPar = sumaPar + num
      contPar = contPar + 1
    } else {
      sumaImpar = sumaImpar + num
      contImpar = contImpar + 1
    }
  }
  if (contPar > 0) {
    let mediaPar = sumaPar / contPar
    alert("Media de pares: " + mediaPar)
  }
  if (contImpar > 0) {
    let mediaImpar = sumaImpar / contImpar
    alert("Media de impares: " + mediaImpar)
  }
}
function btn32(){
  let mayorPoblacion = 0, ciudadMayor = "", provinciaMayor = ""
  for (let i = 1; i <= 3; i++) {
    let provincia = prompt("Ingrese nombre de la provincia " + i + ":")
    for (let j = 1; j <= 11; j++) {
      let ciudad = prompt("Ingrese nombre de la ciudad " + j + " de la provincia " + provincia + ":")
      let poblacion = parseInt(prompt("Ingrese población de " + ciudad + ":"))
      if (poblacion > mayorPoblacion) {
        mayorPoblacion = poblacion
        ciudadMayor = ciudad
        provinciaMayor = provincia
      }
    }
  }
  alert("La ciudad con mayor población es: " + ciudadMayor)
  alert("Pertenece a la provincia: " + provinciaMayor)
  alert("Con una población de: " + mayorPoblacion)
}
function btn33(){
  let opcion
  do {
    alert("Ejecutando programa...")
    opcion = prompt("¿Desea continuar? (S/N)")
  } while (opcion !== "N" && opcion !== "n")    
}
function btn34(){
  for (let i = 1; i <= 9; i++) {
    let tabla = "Tabla del " + i + ":\n"
    for (let j = 1; j <= 10; j++) {
      tabla += i + " x " + j + " = " + (i * j) + "\n"
    }
    alert(tabla)
  }    
}
function btn35(){
  let num = parseInt(prompt("Ingrese número 1:"))
  let mayor = num, menor = num
  for (let i = 2; i <= 20; i++) {
    num = parseInt(prompt("Ingrese número " + i + ":"))
    if (num > mayor) mayor = num
    if (num < menor) menor = num
  }
  alert("El mayor es: " + mayor)
  alert("El menor es: " + menor)    
}
function btn36(){
  let n = parseInt(prompt("Ingrese cantidad de términos:"))
  let a = 0, b = 1
  let serie = a + ", " + b
  for (let i = 3; i <= n; i++) {
    let c = a + b
    serie += ", " + c
    a = b
    b = c
  }
  alert(serie)   
}
function btn37(){
  let a = parseInt(prompt("Ingrese primer número:"))
  let b = parseInt(prompt("Ingrese segundo número:"))
  let resto
  while (b !== 0) {
    resto = a % b
    a = b
    b = resto
  }
  alert("El MCD es: " + a)    
}
function btn38(){
  let num = parseInt(prompt("Ingrese un número:"))
  let suma = 0
  for (let i = 1; i < num; i++)
    if (num % i === 0)
      suma += i
  if (suma === num)
    alert("Es un número perfecto")
  else
    alert("No es un número perfecto")    
}
function btn39(){
  let n = parseInt(prompt("Ingrese cantidad de términos:"))
  let piAprox = 0, signo = 1
  for (let i = 1; i <= n; i++) {
    piAprox += signo * (4.0 / (2 * i - 1))
    signo *= -1
  }
  alert("Aproximación de pi: " + piAprox)   
}
function btn40(){
  let n = parseInt(prompt("Ingrese cantidad de términos:"))
  let piAprox = 3, signo = 1
  for (let i = 2; i <= n * 2; i += 2) {
    let termino = 4.0 / (i * (i + 1) * (i + 2))
    piAprox += signo * termino
    signo *= -1
  }
  alert("Aproximación de pi: " + piAprox)    
}
