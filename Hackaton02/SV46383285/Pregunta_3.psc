Algoritmo terminaCuatro
	Definir numero Como Entero
	Definir texto Como Caracter
	definir ultimocaracter Como Caracter
	Escribir 'Ingrese un número';
	Leer numero;
	
	texto <- ConvertirATexto(numero)
	ultimocaracter <- Subcadena(texto, Longitud(texto), Longitud(texto))
	
	si ConvertirANumero(ultimocaracter) = 4
		Escribir  "El ultimo dígito es 4."
	SiNo
		Escribir "El ultimo dígito no es 4."
	FinSi
	
FinAlgoritmo
