Algoritmo Hora
	Leer h,m,s
	s<-s+1
	Si s=60 Entonces s<-0; m<-m+1 FinSi
	Si m=60 Entonces m<-0; h<-h+1 FinSi
	Si h=24 Entonces h<-0 FinSi
	Escribir h,":",m,":",s
FinAlgoritmo
