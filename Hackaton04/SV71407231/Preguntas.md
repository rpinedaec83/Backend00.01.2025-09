# ¿Cómo defines una función?
Se puede declarar de distintas formas, por ejemplo:
### Declaracion de función:
    function saludar(nombre){
        return `Hola, ${nombre}`;
    }
### Expresión de función:
    const saludar = function(nombre){
        return `Hola, ${nombre}`;
    }
### Arrow function 
    const saludar = (nombre) => {
        console.log(`Hola, ${nombre});
    }


# ¿Hasta cuantos argumentos puedes declarar en una función?

No hay límite técnico, pero se recomienda usar pocos (máximo 3–4) para mantener claridad segun el libro Clean Code de Robert C. Martin 
0 argumentos -> ideal
1 argumentos -> aceptable
2 argumentos -> razonable
3 argumentos -> deberia evitarse.