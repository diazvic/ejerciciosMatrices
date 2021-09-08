//Definí una función generarGrilla que tome por parámetro un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

// const array = [1, 2, 3, 4, 5, 6];

// const obtenerNumeroAlAzar = (array) => {
// 	return Math.floor(Math.random() * array.length);
// };

// const numeroAlAzar = obtenerNumeroAlAzar(array);
// console.log("El numero al azar que obtuve fue: ", numeroAlAzar);
// console.log(
// 	"El elemento que corresponde al index",
// 	numeroAlAzar,
// 	"es:",
// 	array[numeroAlAzar]
// ); //accedo al elemento del array

// const generarGrilla = (filas, columnas, items) => {
// 	let resultado = [];

// 	for (let i = 0; i < filas; i++) {
// 		const numeroAlAzar = obtenerNumeroAlAzar(columnas);
// 		console.log(numeroAlAzar);
// 	}
// 	return resultado;
// };

// console.log(generarGrilla(5, 2, ["a", "b", "c"]));

// const obtenerNumeroAlAzar = (array) => {
// 	return Math.floor(Math.random() * array.length);
// };

// const generarArrayAlAzar = (columnas, items) => {
// 	let resultado = [];

// 	console.log(obtenerNumeroAlAzar(items)); //veo cuantos elementos hay en mi array
// 	for (let i = 0; i < columnas; i++) {
// 		const numeroAlAzar = obtenerNumeroAlAzar(items);

// 		resultado.push(items[numeroAlAzar]);
// 		console.log(items[obtenerNumeroAlAzar(items)]);
// 	}

// 	return resultado;
// };

// console.log(generarArrayAlAzar(10, ["a", "b", "c", "d"]));

const obtenerNumeroAlAzar = (array) => {
	return Math.floor(Math.random() * array.length);
};
const generarGrilla = (filas, columnas, items) => {
	let arrayNuevo = [];

	for (let i = 0; i < filas; i++) {
		let arraySecundario = [];

		for (let j = 0; j < columnas; j++) {
			const numeroAlAzar = obtenerNumeroAlAzar(items);
			arraySecundario.push(items[numeroAlAzar]);
		}
		arrayNuevo.push(arraySecundario);
	}
	return arrayNuevo;
};

console.log(generarGrilla(2, 3, [1, 2, 3]));

console.log(
	generarGrilla(8, 8, ["🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩 "])
);
