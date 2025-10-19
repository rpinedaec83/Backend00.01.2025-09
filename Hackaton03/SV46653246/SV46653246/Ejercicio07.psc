Proceso Ejercicio07
	//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	
	Definir cantidadHelado, precioTotal Como Entero
	Definir membresia Como Caracter
	
	Repetir
		
	Escribir "----------------------"
	Escribir "Precio de helado 10usd"
	Escribir "----------------------"
	Escribir "Ingrese Categoria de membresia"
	Leer membresia	
	Escribir "----------------------"
	Escribir "Ingrese cantidad de heladas"
	Leer cantidadHelado	
	
	preciohelado = 10
	
	Si membresia = "A"
		Entonces
		precioTotal= cantidadHelado*10*0.9
	SiNo
		si	membresia = "B"
			Entonces
			precioTotal= cantidadHelado*10*0.85
		SiNo
			si membresia = "C"
				Entonces
				precioTotal= cantidadHelado*10*0.8	
			SiNo
				si membresia <> "A" o membresia <> "B" o membresia <>"C"
					Entonces
					Escribir "Membresia no válida"
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir "El precio total es: " precioTotal " USD"
	
Hasta Que nunca
	
FinProceso
