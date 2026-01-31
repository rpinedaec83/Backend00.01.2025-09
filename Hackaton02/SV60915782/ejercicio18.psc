Algoritmo CDs
	Leer n
	Si n<=9 Entonces p<-10
	Si n>=10 Y n<=99 Entonces p<-8
	Si n>=100 Y n<=499 Entonces p<-7
	Si n>=500 Entonces p<-6
	total<-n*p
	ganancia<-total*0.0825
	Escribir total, ganancia
FinAlgoritmo
