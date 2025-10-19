Proceso mayorDeTresNumeros
    Definir a, b, c, mayor Como Real
    Escribir "Ingrese tres numeros:"
    Leer a, b, c
	
    mayor = a
    Si b > mayor Entonces
        mayor = b
    FinSi
    Si c > mayor Entonces
        mayor = c
    FinSi
	
    Escribir "El mayor es: ", mayor
FinProceso