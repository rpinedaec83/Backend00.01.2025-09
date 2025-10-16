Proceso mayorDeDosNumeros
    Definir num1, num2 Como Real
    Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2
	
    Si num1 > num2 Entonces
        Escribir "El mayor es: ", num1
    Sino
        Si num2 > num1 Entonces
            Escribir "El mayor es: ", num2
        Sino
            Escribir "Ambos numeros son iguales."
        FinSi
    FinSi
FinProceso