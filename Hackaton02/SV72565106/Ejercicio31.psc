Proceso Ejercicio31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, 
	//sólo se ingresará diez números.
	Definir num, sumaPares, sumaImpares, contPares, contImpares, i Como Entero
    Definir mediaPares, mediaImpares Como Real
	
    sumaPares = 0
    sumaImpares = 0
    contPares = 0
    contImpares = 0
	
    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
		
        Si num MOD 2 = 0 Entonces
            sumaPares = sumaPares + num
            contPares = contPares + 1
        Sino
            sumaImpares = sumaImpares + num
            contImpares = contImpares + 1
        FinSi
    FinPara
	
    Si contPares > 0 Entonces
        mediaPares = sumaPares / contPares
    Sino
        mediaPares = 0
    FinSi
	
    Si contImpares > 0 Entonces
        mediaImpares = sumaImpares / contImpares
    Sino
        mediaImpares = 0
    FinSi
	
    Escribir "Media de los números pares: ", mediaPares
    Escribir "Media de los números impares: ", mediaImpares
	
FinProceso
