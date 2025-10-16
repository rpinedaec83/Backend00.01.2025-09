//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren.
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
//y si son más treinta zapatos se otorgará un 40% de descuento.
//El precio de cada zapato es de $80.

Proceso Ejercicio05
	
	Definir cantidad Como Entero
	
	Escribir "Ingrese la cantidad que desea comprar:"
	Leer cantidad
	
	Si cantidad >= 10 Entonces
		total = cantidad * 0.9 * 80	
	Sino
		total = cantidad * 80
	FinSi
		
	Si cantidad >= 20 Entonces
		total = cantidad * 0.8 * 80
	FinSi
	
	Si cantidad >= 30 Entonces
		total = cantidad * 0.6 * 80
	FinSi
	
	Escribir "Total: " total
	
FinProceso