console.log("Inicio de la aplicacion")

let arrHobbies = ["Aeromodelismo", "Gunpla", 9.99, true, [55, 66]];

console.log(arrHobbies[3])

arrHobbies[2] = 100.99;

console.log(arrHobbies.length);

arrHobbies.push("Juan");

console.log(arrHobbies);
arrHobbies.pop();
console.log(arrHobbies);

arrHobbies.shift();
console.log(arrHobbies);
arrHobbies.unshift("Pedro")
console.log(arrHobbies);

console.log(arrHobbies.toString())
console.log(arrHobbies.join('|'))

let strData = "Pedro,Gunpla,100.99,true,55,66";

let arrData = strData.split(',');
console.log(arrData);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Applekkk");

console.log(position)

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(first);

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element)
}

for (const key in numbers) {
    if (!Object.hasOwn(numbers, key)) continue;
    const element = numbers[key];
    console.log(element)
}

numbers.forEach(element => {
    console.log(element)
});

let objPersona = {
    nombre: "Roberto",
    apellido: "Pineda",
    isSoltero: true,
    hobbies: [
        "Aeromodelismo", "Gunpla"
    ],
    padre: {
        nombre: "Rene"
    },
    madre: {
        nombre: "Miriam"
    }
};

console.log(objPersona.madre.nombre)

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);


let primerNumero = 21;
let segundoNumero = "21";

if (primerNumero < 20) {
    alert("La condición si se cumplio")
} else if (segundoNumero == 30) {
    alert("La segunda condición se cumplio")
}
else {
    alert("Las condiciones no se cumplieron")
}

if (primerNumero === segundoNumero) {
    alert("La condición si se cumplio")
} else {
    alert("La condición no se cumplio")
}


if (primerNumero < 20 && segundoNumero == 30) {
    alert("La condición si se cumplio")
}
else {
    alert("Las condiciones no se cumplieron")
}

let opcion = Number.parseInt(prompt("Escribe un numero del 1 al 10"));

switch (opcion) {
    case 1:
        alert(opcion)
        break;
    case 2:
        alert(opcion)
        break;
    case 3:
        alert(opcion)
        break;
    case 4:
        alert(opcion)
        break;
    case 5:
        alert(opcion)
        break;

    default:
        alert("No se escogio ningun numero del 1 al 5")
        break;
}

let bandera = true;

let i = 0
while (bandera) {
    
    i++;
    console.log(i);
    if(i===20)bandera=false;
}


console.log("Inicio de la calculadora");

bandera = true;

while (bandera) {
    let primerNumero = Number.parseInt(prompt("Digita el primer numero"));
    let segundoNumero = Number.parseInt(prompt("Digita el segundo numero"));
    let opcion = Number.parseInt(prompt(`Digita la operacion: 
        1 para sumar, 
        2 para restar, 
        3 para multiplicar 
        o 4 para dividir, 
        si desea salir digita 0`))
    if(opcion===0) bandera = false;

    let resultado = 0;
    let opcionValida = 1;

    switch (opcion) {
        case 1:
            resultado = primerNumero + segundoNumero;
            break;
        case 2:
            resultado = primerNumero - segundoNumero;
            break;
        case 3:
            resultado = primerNumero * segundoNumero;
            break;
        case 4:
            resultado = primerNumero / segundoNumero;
            break;
        case 0:
            bandera = false;
            break;
        default:
            alert("Opcion no valida")
            opcionValida = 1
            break;
    }
    if(opcionValida===0){
        alert(`El resultado es ${resultado}`)
    }
}