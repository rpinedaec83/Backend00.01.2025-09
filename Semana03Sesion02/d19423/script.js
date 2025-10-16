console.log("Inicio de la aplicacion")

let arrHobbies = ["Aeromodelismo", "Gunpla", 9.99, true, [55,66]];

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

let objPersona={
    nombre: "Roberto",
    apellido: "Pineda",
    isSoltero : true,
    hobbies: [
        "Aeromodelismo", "Gunpla"
    ],
    padre:{
        nombre:"Rene"
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
}else if(segundoNumero == 30){
    alert("La segunda condición se cumplio")
}
else{
    alert("Las condiciones no se cumplieron")
}

if(primerNumero === segundoNumero){
    alert("La condición si se cumplio")
}else{
    alert("La condición no se cumplio")
}