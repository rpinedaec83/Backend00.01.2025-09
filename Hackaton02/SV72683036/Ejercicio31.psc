Proceso Ejercicio31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	
	definir num,i,sumaPares, sumaImpares,contPares, contImpares como entero
	Definir mediaPares, mediaImpares Como Real
	
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número #", i, ":"
        Leer num
        
        Si num MOD 2 = 0 Entonces
            sumaPares <- sumaPares + num
            contPares <- contPares + 1
        SiNo
            sumaImpares <- sumaImpares + num
            contImpares <- contImpares + 1
        FinSi
        
    FinPara
	
	Si contPares > 0 Entonces
        mediaPares <- sumaPares / contPares
        Escribir "Media de Pares: ", mediaPares
    SiNo
        Escribir "No se puede calcular la media de pares."
    FinSi
	
	Si contImpares > 0 Entonces
        mediaImpares <- sumaImpares / contImpares
        Escribir "Media de Impares: ", mediaImpares, 
    SiNo
        Escribir "No se puede calcular la media de impares."
    FinSi
	
FinProceso
