Algoritmo treintayocho
	Definir num, i, sumaDivisores Como Entero
    Escribir "Ingrese un número: "
    Leer num
	
    sumaDivisores <- 0
	
    Para i <- 1 Hasta num - 1 Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            sumaDivisores <- sumaDivisores + i
        FinSi
    FinPara
	
    Si sumaDivisores = num Entonces
        Escribir "El número es PERFECTO."
    Sino
        Escribir "El número NO es perfecto."
    FinSi
FinAlgoritmo
