Proceso Ejercicio07
	//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
	//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	
//	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	
	Definir totalCompra, descuento, montoAPagar Como Real
    Definir tipoMembresia Como Caracter
    
    Escribir "Ingrese el total de la compra de helado: $"
    Leer totalCompra
    
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
    
    descuento= 0
    
    Segun Mayusculas(tipoMembresia) Hacer
        "A":
            descuento = totalCompra * 0.10 
            
        "B":
            descuento = totalCompra * 0.15 
            
        "C":
            descuento = totalCompra * 0.20 
           
        De Otro Modo:
            Escribir "Tipo de membresía inválida. No se aplica descuento."
            
    FinSegun
    
    
    montoAPagar = totalCompra - descuento
    
    Escribir "Total de la compra: $", totalCompra
    Escribir "Monto del descuento: $", descuento
    Escribir "Monto final a pagar: $", montoAPagar
    
FinProceso
