Proceso Ejercicio11
	
	// 11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	
	Definir num1, num2, num3, mayor Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Si num1 >= num2 Y num1 >= num3 Entonces
        mayor = num1
    Sino
        Si num2 >= num1 Y num2 >= num3 Entonces
            mayor = num2
        Sino
            mayor = num3
        FinSi
    FinSi
	
    Escribir "El número mayor es: ", mayor
	
FinProceso
