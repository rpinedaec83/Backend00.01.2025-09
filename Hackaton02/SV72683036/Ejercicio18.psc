Proceso Ejercicio18
	//acer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
	//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
	//$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. 
	//Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Definir cantidadCDs Como Entero
    Definir precioUnitario, precioTotal, gananciaVendedor Como Real
	
	Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidadCDs
	
	
	si cantidadCDs >= 500 Entonces
		precioUnitario <-6
	SiNo
		si cantidadCDs >= 100 Entonces
			precioUnitario <-7
		SiNo
			si cantidadCDs >= 10 Entonces
				precioUnitario <-9
			SiNo
				si cantidadCDs >= 1 Entonces
					precioUnitario <-10
				FinSi
			FinSi
			
		FinSi
		
	FinSi
	

	
	
	precioTotal <- cantidadCDs * precioUnitario
	gananciaVendedor <- precioTotal * 0.0825
	
	
	Escribir "PRECIO TOTAL para el Cliente: ", precioTotal
	Escribir "GANANCIA para el Vendedor : ", gananciaVendedor
	
FinProceso
