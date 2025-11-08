function ejercicio01() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (isNaN(numero)) { Swal.fire("Error","Eso no es un número","error"); return; }
    if ((numero >= 100 && numero <= 999) || (numero <= -100 && numero >= -999)) {
        Swal.fire("Resultado","El número tiene 3 dígitos","success");
    } else {
        Swal.fire("Resultado","El número NO tiene 3 dígitos","error");
    }
}

function ejercicio02() {
    let numero = parseInt(prompt("Ingresa un número entero:"));
    if (isNaN(numero)) { Swal.fire("Error","Eso no es un número","error"); return; }
    if (numero < 0) Swal.fire("Resultado","El número es negativo","success");
    else Swal.fire("Resultado","El número no es negativo","info");
}

function ejercicio03() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (isNaN(numero)) { Swal.fire("Error","Eso no es un número","error"); return; }
    if (numero % 10 === 4) Swal.fire("Resultado","El número termina en 4","success");
    else Swal.fire("Resultado","El número no termina en 4","info");
}

function ejercicio04() {
    let a = parseInt(prompt("Ingresa el primer número:"));
    let b = parseInt(prompt("Ingresa el segundo número:"));
    let c = parseInt(prompt("Ingresa el tercer número:"));
    if (isNaN(a) || isNaN(b) || isNaN(c)) { Swal.fire("Error","Debes ingresar números válidos","error"); return; }
    let numeros = [a,b,c].sort((x,y)=>x-y);
    Swal.fire("Resultado","Ordenados: " + numeros.join(", "),"info");
}

function ejercicio05() {
    const precioZapato = 80;
    let cantidad = parseInt(prompt("Cantidad de zapatos:"));
    if (isNaN(cantidad)) { Swal.fire("Error","Debes ingresar un número","error"); return; }
    let descuento = 0;
    if (cantidad > 30) descuento = 0.4;
    else if (cantidad > 20) descuento = 0.2;
    else if (cantidad > 10) descuento = 0.1;
    let total = cantidad * precioZapato * (1 - descuento);
    Swal.fire("Total a pagar","Total: $" + total.toFixed(2),"success");
}

function ejercicio06() {
    let horas = parseInt(prompt("Ingresa las horas trabajadas:"));
    if (isNaN(horas)) { Swal.fire("Error","Debes ingresar un número","error"); return; }
    let pago = horas <= 40 ? horas*20 : 40*20 + (horas-40)*25;
    Swal.fire("Sueldo","El sueldo semanal es $" + pago,"success");
}

function ejercicio07() {
    let tipo = prompt("Ingresa tipo de membresía (A,B o C):").toUpperCase();
    if (!["A","B","C"].includes(tipo)) { Swal.fire("Error","Tipo inválido","error"); return; }
    let total = parseInt(prompt("Ingresa total de la compra:"));
    if (isNaN(total)) { Swal.fire("Error","Debes ingresar un número","error"); return; }
    let descuento = tipo==="A"?0.1:tipo==="B"?0.15:0.2;
    Swal.fire("Total con descuento","$" + (total*(1-descuento)).toFixed(2),"success");
}

function ejercicio08() {
    let n1=parseInt(prompt("Nota 1:"));
    let n2=parseInt(prompt("Nota 2:"));
    let n3=parseInt(prompt("Nota 3:"));
    if (isNaN(n1)||isNaN(n2)||isNaN(n3)) { Swal.fire("Error","Notas inválidas","error"); return; }
    let promedio = (n1+n2+n3)/3;
    Swal.fire("Resultado", promedio>=6?"Aprobado":"Reprobado","info");
}

function ejercicio09() {
    let sueldo = parseInt(prompt("Sueldo actual:"));
    if (isNaN(sueldo)) { Swal.fire("Error","Debes ingresar un número","error"); return; }
    let aumento = sueldo>2000?sueldo*0.05:sueldo*0.1;
    Swal.fire("Aumento","Monto del aumento: $"+aumento.toFixed(2),"success");
}

function ejercicio10() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (isNaN(numero)) { Swal.fire("Error","Debes ingresar un número","error"); return; }
    Swal.fire("Resultado",numero%2===0?"Par":"Impar","info");
}
function ejercicio11() {
    let a = parseInt(prompt("Número 1:"));
    let b = parseInt(prompt("Número 2:"));
    let c = parseInt(prompt("Número 3:"));
    if (isNaN(a)||isNaN(b)||isNaN(c)) { Swal.fire("Error","Debes ingresar números","error"); return; }
    let mayor = a;
    if(b>mayor) mayor=b;
    if(c>mayor) mayor=c;
    Swal.fire("Resultado","El mayor es "+mayor,"info");
}

function ejercicio12() {
    let a=parseInt(prompt("Número 1:"));
    let b=parseInt(prompt("Número 2:"));
    if (isNaN(a)||isNaN(b)) { Swal.fire("Error","Debes ingresar números","error"); return; }
    Swal.fire("Resultado","El mayor es "+(a>b?a:b),"info");
}

function ejercicio13() {
    let letra = prompt("Ingresa una letra:").toLowerCase();
    if (!letra || letra.length !== 1) { Swal.fire("Error","Ingresa solo una letra","error"); return; }
    Swal.fire("Resultado", "Es vocal: "+["a","e","i","o","u"].includes(letra),"info");
}

function ejercicio14() {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 9:"));
    if (isNaN(numero) || numero<1 || numero>9) { Swal.fire("Error","Número inválido","error"); return; }
    let esPrimo = numero>1;
    for(let i=2;i<numero;i++){ if(numero%i===0){ esPrimo=false; break; } }
    Swal.fire("Resultado", esPrimo?"Es primo":"No es primo","info");
}

function ejercicio15() {
    let cm = parseInt(prompt("Ingresa centímetros:"));
    let lb = parseInt(prompt("Ingresa libras:"));
    if (isNaN(cm)||isNaN(lb)) { Swal.fire("Error","Valores inválidos","error"); return; }
    let pulgadas = cm/2.54;
    let kg = lb*0.453592;
    Swal.fire("Resultado","Pulgadas: "+pulgadas.toFixed(2)+"\nKilogramos: "+kg.toFixed(2),"info");
}

function ejercicio16() {
    let num = parseInt(prompt("Ingresa un número (1-7):"));
    if (isNaN(num) || num<1 || num>7) { Swal.fire("Error","Número inválido","error"); return; }
    let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    Swal.fire("Resultado",dias[num-1],"info");
}

function ejercicio17() {
    let h = parseInt(prompt("Ingresa la hora (0-23):"));
    let m = parseInt(prompt("Ingresa los minutos (0-59):"));
    let s = parseInt(prompt("Ingresa los segundos (0-59):"));

    if(isNaN(h)||isNaN(m)||isNaN(s) || h<0||h>23 || m<0||m>59 || s<0||s>59){
        Swal.fire("Error","Hora inválida","error");
    } else {
        s += 1;
        if(s === 60){ s = 0; m += 1; }
        if(m === 60){ m = 0; h += 1; }
        if(h === 24){ h = 0; }

        Swal.fire("Resultado","La hora un segundo después es: "+
            (h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s),"info");
    }
}

function ejercicio18() {
    let cantidad = parseInt(prompt("Número de CDs a vender:"));
    if (isNaN(cantidad) || cantidad<0) { Swal.fire("Error","Número inválido","error"); return; }
    let precio = cantidad<=9?10:cantidad<=99?8:cantidad<=499?7:6;
    let total = cantidad*precio;
    let ganancia = total*0.0825;
    Swal.fire("Resultado","Total: $"+total+"\nGanancia: $"+ganancia.toFixed(2),"info");
}

function ejercicio19() {
    const empleados = {56:56,64:64,80:80,48:48};
    let id = parseInt(prompt("ID empleado:"));
    let dias = parseInt(prompt("Días trabajados:"));
    if (isNaN(id)||isNaN(dias)||dias<0||dias>6||!empleados[id]) { Swal.fire("Error","Datos inválidos","error"); return; }
    let total = empleados[id]*dias;
    Swal.fire("Resultado","Debe pagar: $"+total,"info");
}

function ejercicio20() {
    let valores = [0,0,0,0];
    let pares = 0;
    let mayor = 0;

    // Pedir los 4 números
    for(let i = 0; i < 4; i++){
        valores[i] = parseInt(prompt("Ingrese el número " + (i+1) + ":-"));
        if(isNaN(valores[i])) { 
            Swal.fire("Error","Debe ingresar un número válido","error");
            return;
        }
    }

    // Inicializar mayor con el primer valor
    mayor = valores[0];

    // Procesar los números
    for(let i = 0; i < 4; i++){
        if(valores[i] % 2 === 0){ pares++; }
        if(valores[i] > mayor){ mayor = valores[i]; }
    }

    // Operaciones adicionales
    let cuadrado = (valores[2] % 2 === 0) ? valores[1] * valores[1] : null;
    let media = (valores[0] < valores[3]) ? (valores[0] + valores[1] + valores[2] + valores[3]) / 4 : null;

    Swal.fire("Resultados",
        "Cantidad de pares: " + pares +
        "\nMayor: " + mayor +
        (cuadrado !== null ? "\nCuadrado del segundo: " + cuadrado : "") +
        (media !== null ? "\nMedia de los 4: " + media : ""),
        "info"
    );
}


function ejercicio21() {
    let n = parseInt(prompt("Ingresa un número para factorial:"));
    if (isNaN(n) || n<0) { Swal.fire("Error","Número inválido","error"); return; }
    let fact = 1;
    for(let i=2;i<=n;i++){ fact *= i; }
    Swal.fire("Resultado","Factorial: "+fact,"info");
}

function ejercicio22() {
    let n = parseInt(prompt("Suma de los n primeros números, ingresa n:"));
    if (isNaN(n) || n<1) { Swal.fire("Error","Número inválido","error"); return; }
    let suma = 0;
    for(let i=1;i<=n;i++) suma += i;
    Swal.fire("Resultado","Suma: "+suma,"info");
}

function ejercicio23() {
    let n = parseInt(prompt("Ingresa n:"));
    if (isNaN(n) || n<1) { Swal.fire("Error","Número inválido","error"); return; }
    let suma = 0;
    for(let i=1;i<=n;i+=2) suma += i;
    Swal.fire("Resultado","Suma impares <= n: "+suma,"info");
}

function ejercicio24() {
    let suma = 0;
    for(let i=2;i<=1000;i+=2) suma += i;
    Swal.fire("Resultado","Suma pares hasta 1000: "+suma,"info");
}

function ejercicio25() {
    let n = parseInt(prompt("Factorial de n (método alternativo):"));
    if (isNaN(n) || n<0) { Swal.fire("Error","Número inválido","error"); return; }
    let fact = 1;
    let i = n;
    while(i>1){ fact *= i; i--; }
    Swal.fire("Resultado","Factorial: "+fact,"info");
}

function ejercicio26() {
    let a = parseInt(prompt("Dividendo:"));
    let b = parseInt(prompt("Divisor:"));
    if (isNaN(a)||isNaN(b)||b===0) { Swal.fire("Error","Datos inválidos","error"); return; }
    let cociente=0;
    let resto=a;
    while(resto>=b){ resto-=b; cociente++; }
    Swal.fire("Resultado","Cociente: "+cociente+"\nResto: "+resto,"info");
}

function ejercicio27() {} 

function ejercicio28() {
    let suma = 0, i = 1;
    do { suma += i; i++; } while(i<=100);
    Swal.fire("Resultado","Suma primeros 100 números: "+suma,"info");
}

function ejercicio29() {
    let suma = 0, i = 1;
    while(i<=100){ suma += i; i++; }
    Swal.fire("Resultado","Suma primeros 100 números: "+suma,"info");
}

function ejercicio30() {
    let suma = 0;
    for(let i=1;i<=100;i++) suma += i;
    Swal.fire("Resultado","Suma primeros 100 números: "+suma,"info");
}

function ejercicio31() {
    let pares = 0, impares = 0;
    for(let i = 0; i < 10; i++){
        let n = parseInt(prompt("Ingrese número " + (i+1)));
        if(isNaN(n)){ Swal.fire("Error","Número inválido","error"); return; }
        if(n % 2 === 0) pares++; else impares++;
    }
    let mediaPares = pares / 10;
    let mediaImpares = impares / 10;
    Swal.fire("Resultados","Media pares: " + mediaPares + "\nMedia impares: " + mediaImpares,"info");
}

function ejercicio32() {
    let poblaciones = [];
    for(let i = 0; i < 11; i++){
        let p = parseInt(prompt("Ingrese población de la ciudad " + (i+1)));
        if(isNaN(p) || p<0){ Swal.fire("Error","Número inválido","error"); return; }
        poblaciones[i] = p;
    }
    let mayor = poblaciones[0];
    let ciudad = 1;
    for(let i = 1; i < 11; i++){
        if(poblaciones[i] > mayor){ mayor = poblaciones[i]; ciudad = i+1; }
    }
    Swal.fire("Resultado","La ciudad con más población es la número: " + ciudad + " con " + mayor + " personas","info");
}

function ejercicio33() {
    let continuar = true;
    while(continuar){
        let resp = prompt("¿Desea continuar? (si/no)").toLowerCase();
        if(resp==="no"){ continuar=false; Swal.fire("Resultado","Programa finalizado","info"); }
        else if(resp!=="si"){ Swal.fire("Error","Respuesta inválida","error"); }
    }
}

function ejercicio34() {
    let tablas = "";
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            tablas += i+"x"+j+"="+(i*j)+"\n";
        }
        tablas += "\n";
    }
    Swal.fire("Tablas del 1 al 9","<pre>"+tablas+"</pre>","info");
}

function ejercicio35() {
    let numeros = [];
    for(let i=0;i<20;i++){
        let n = parseInt(prompt("Ingresa número "+(i+1)+":"));
        if(isNaN(n)){ Swal.fire("Error","Número inválido","error"); return; }
        numeros.push(n);
    }
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    Swal.fire("Resultado","Mayor: "+mayor+"\nMenor: "+menor,"info");
}

function ejercicio36() {
    let n = parseInt(prompt("Ingrese cantidad de términos de Fibonacci:"));
    if(isNaN(n) || n<=0){ Swal.fire("Error","Número inválido","error"); return; }
    let a = 0, b = 1, serie = [a];
    for(let i=1;i<n;i++){
        serie.push(b);
        let temp = b;
        b = a + b;
        a = temp;
    }
    Swal.fire("Serie Fibonacci",serie.join(", "),"info");
}

function ejercicio37() {
    let a = parseInt(prompt("Ingrese primer número:"));
    let b = parseInt(prompt("Ingrese segundo número:"));
    if(isNaN(a)||isNaN(b)||a<=0||b<=0){ Swal.fire("Error","Número inválido","error"); return; }
    let x = a, y = b;
    while(y != 0){
        let r = x % y;
        x = y;
        y = r;
    }
    Swal.fire("Resultado","El M.C.D de "+a+" y "+b+" es: "+x,"info");
}

function ejercicio38() {
    let n = parseInt(prompt("Ingrese número a verificar:"));
    if(isNaN(n) || n<=0){ Swal.fire("Error","Número inválido","error"); return; }
    let suma = 0;
    for(let i=1;i<n;i++){
        if(n % i === 0) suma += i;
    }
    Swal.fire("Resultado", n===suma ? "Es un número perfecto" : "No es un número perfecto","info");
}

function ejercicio39() {
    let n = parseInt(prompt("Ingrese número de términos para aproximar Pi (Gregory-Leibniz):"));
    if(isNaN(n) || n<=0){ Swal.fire("Error","Número inválido","error"); return; }
    let pi = 0;
    for(let i=0;i<n;i++){
        pi += (i%2===0 ? 1 : -1) * (4/(2*i+1));
    }
    Swal.fire("Resultado","Aproximación de Pi: " + pi,"info");
}

function ejercicio40() {
    let n = parseInt(prompt("Ingrese número de términos para aproximar Pi (Nilakantha):"));
    if(isNaN(n) || n<=0){ Swal.fire("Error","Número inválido","error"); return; }
    let pi = 3;
    let signo = 1;
    for(let i=1;i<=n;i++){
        let a = 2*i;
        pi += signo * (4/(a*(a+1)*(a+2)));
        signo *= -1;
    }
    Swal.fire("Resultado","Aproximación de Pi: " + pi,"info");
}
