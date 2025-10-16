Proceso Ejercicio_18
	// 18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y 
	//	distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
	//	(supongamos un único producto de una única marca) por cantidad. 
	//	Los precios son:
	//		$10. Si se compran unidades separadas hasta 9.
	//		$8. Si se compran entre 10 unidades hasta 99.
	//		$7. Entre 100 y 499 unidades.
	//		$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo 
	//en Pseint que dado un número de CDs a vender calcule el precio total para el 
	//cliente y la ganancia para el vendedor.
	
	Definir cantidad_a_vender, precio_unitario, total, ganancia Como Real
	
	Escribir "Ingrese la cantidad de CDs a vender:"
	Leer cantidad_a_vender
	
	Si cantidad_a_vender >= 1 Y cantidad_a_vender <= 9 Entonces
		precio_unitario = 10
	Sino
		Si cantidad_a_vender >= 10 Y cantidad_a_vender <= 99 Entonces
			precio_unitario = 8
		Sino
			Si cantidad_a_vender >= 100 Y cantidad_a_vender <= 499 Entonces
				precio_unitario = 7
			Sino
				Si cantidad_a_vender >= 500 Entonces
					precio_unitario = 6
				Sino
					Escribir "Cantidad inválida. Debe ser mayor que 0."
				FinSi
			FinSi
		FinSi
	FinSi

	total = cantidad_a_vender * precio_unitario
	ganancia = total * 0.0825

	Escribir "Precio total para el cliente: $", total
	Escribir "Ganancia para el vendedor: $", ganancia
FinProceso
