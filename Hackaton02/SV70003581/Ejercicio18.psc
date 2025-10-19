//	18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
//		Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//		$10. Si se compran unidades separadas hasta 9.
//		$8. Si se compran entre 10 unidades hasta 99.
//		$7. Entre 100 y 499 unidades.
//		$6. Para mas de 500 unidades.
//	La ganancia para el vendedor es de 8,25 % de la venta.
//	Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ejercicio18
	
	Definir cant Como Entero
	
	Escribir "Ingrese cantidad de CDs:"
	Leer cant
	
	Si cant >= 500 Entonces
		Escribir "Total a pagar: $" cant * 6 " | Ganancia de venta: $" (cant * 6) * 0.0825
	SiNo
		Si cant >=100 Entonces
			Escribir "Total a pagar: $" cant * 7 " | Ganancia de venta: $" (cant * 7) * 0.0825
		SiNo
			Si cant >=10 Entonces
				Escribir "Total a pagar: $" cant * 8 " | Ganancia de venta: $" (cant * 8) * 0.0825
			Sino
				Escribir "Total a pagar: $" cant * 10 " | Ganancia de venta: $" (cant * 10) * 0.0825
			FinSi
		FinSi
	FinSi
	
FinProceso