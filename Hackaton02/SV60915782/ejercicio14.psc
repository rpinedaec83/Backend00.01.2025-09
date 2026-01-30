Algoritmo Primo
	Leer n
	cont<-0
	Para i<-1 Hasta n Hacer
		Si n MOD i = 0 Entonces cont<-cont+1 FinSi
	FinPara
	Si cont=2 Entonces
		Escribir "Primo"
	SiNo
		Escribir "No primo"
	FinSi
FinAlgoritmo
