Algoritmo tresNumerosEnteros
	Definir numero1 Como Entero
	Definir numero2 Como Entero
	Definir numero3 Como Entero
	Definir primero Como Entero
	Definir segundo Como Entero
	Definir tercero Como Entero
	
	Escribir "Ingrese el primer número:";
	Leer numero1;
	Leer numero2;
	Leer numero3;
	
	si numero1 <= numero2 y numero1 <= numero3 Entonces
		si numero2 <= numero3 
			primero <- numero1
			segundo <- numero2
			tercero <- numero3
			Escribir primero," , " , segundo ," , ", tercero
		SiNo
			primero <- numero1
			segundo <- numero3
			tercero <- numero2
			Escribir primero," , " , segundo ," , ", tercero
		FinSi
	FinSi
	
	si numero2 <= numero1 y numero2 <= numero3 Entonces
		si numero1 <= numero3 
			primero <- numero2
			segundo <- numero1
			tercero <- numero3
			Escribir primero," , " , segundo ," , ", tercero
		SiNo
			primero <- numero2
			segundo <- numero3
			tercero <- numero1
			Escribir primero," , " , segundo ," , ", tercero
		FinSi
	FinSi
	
	si numero3 <= numero2 y numero3 <= numero1 Entonces
		si numero1 <= numero2 
			primero <- numero3
			segundo <- numero1
			tercero <- numero2
			Escribir primero," , " , segundo ," , ", tercero
		SiNo
			primero <- numero3
			segundo <- numero2
			tercero <- numero1
			Escribir primero," , " , segundo ," , ", tercero
		FinSi
	FinSi
		
FinAlgoritmo
