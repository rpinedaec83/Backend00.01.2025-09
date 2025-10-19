// 3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso  Ejercicio03
	
    Definir numero, ultimaCifra Como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    ultimaCifra = numero MOD 10
	
    Si ultimaCifra = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número no termina en 4."
    FinSi
FinProceso


