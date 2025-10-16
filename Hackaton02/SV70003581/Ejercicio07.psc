//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
// sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//				
//				Tipo A 10% de descuento
//				Tipo B 15% de descuento
//				Tipo C 20% de descuento

//No especifica lo que se quiere mostrar, por lo que mostrará una simulación de dscto aplicado a un precio

Proceso Ejercicio07
	Definir tipo_usuario Como Caracter
	Definir precio Como Real
	Escribir "Ingrese el monto total:"
	Leer precio
	Escribir "Ingrese el tipo de miembro:"
	Leer tipo_usuario
	
	Segun tipo_usuario Hacer
		"a":
			Escribir "Total final: s/. " precio * 0.90
		"b":
			Escribir "Total final: s/. " precio * 0.85
		"c":
			Escribir "Total final: s/. " precio * 0.80
		De Otro Modo:
			Escribir "Total final: s/. " precio
	Fin Segun
FinProceso