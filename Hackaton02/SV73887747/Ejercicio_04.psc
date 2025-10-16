Proceso Ejercicio_04
	// 4. Hacer un algoritmo en Pseint que lea tres números 
	//	enteros y los muestre de menor a mayor.
	
Definir num1, num2, num3, menor, medio, mayor Como Entero

   Escribir "Ingrese el primer número:"
   Leer num1
   Escribir "Ingrese el segundo número:"
   Leer num2
   Escribir "Ingrese el tercer número:"
   Leer num3

   Si num1 <= num2 Y num1 <= num3 Entonces
       menor = num1
       Si num2 <= num3 Entonces
           medio = num2
           mayor = num3
       Sino
           medio = num3
           mayor = num2
       FinSi
   Sino
       Si num2 <= num1 Y num2 <= num3 Entonces
           menor = num2
           Si num1 <= num3 Entonces
               medio = num1
               mayor = num3
           Sino
               medio = num3
               mayor = num1
           FinSi
       Sino
           menor = num3
           Si num1 <= num2 Entonces
               medio = num1
               mayor = num2
           Sino
               medio = num2
               mayor = num1
           FinSi
       FinSi
   FinSi

   Escribir "Los números ordenados de menor a mayor son: ", menor, ", ", medio, ", ", mayor
	
FinProceso
