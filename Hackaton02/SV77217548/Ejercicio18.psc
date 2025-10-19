Proceso Ejercicio18
	//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
	//(supongamos un único producto de una única marca) por cantidad. Los precios son:
    //$10. Si se compran unidades separadas hasta 9.
	//$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	Definir n Como Entero
    Definir precioUnitario, total, ganancia Como Real
	
	Repetir
		Escribir "Ingrese la cantidad de CDs:"
		Leer n
		
		Si n < 0 Entonces
			Escribir "Ingrese una cantidad valida."
		FinSi
		
	Hasta Que n >= 0
    
	Si n > 500 Entonces
		precioUnitario <- 6
	SiNo 
		Si n >= 100 Entonces
			precioUnitario <- 7
		SiNo 
			Si n >= 10 Entonces
				precioUnitario <- 8
			Sino
				precioUnitario <- 10
			FinSi
		FinSi
	FinSi
		
	total <- n * precioUnitario
	ganancia <- total * 0.0825
		
	Escribir "Precio unitario: $", precioUnitario
	Escribir "Total a pagar: $", total
	Escribir "Ganancia del vendedor (8.25%): $", ganancia

FinProceso
