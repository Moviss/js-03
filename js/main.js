"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;

// Podstawy tablic
// ----------------

// const colors = ["Red", "Pink", "Blue"];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[4]); // undefined

// colors[1] = "Green";
//
// console.log(colors);
// console.log(colors.length);
//
// const lastElementIndex = colors.length - 1;
// console.log(colors[lastElementIndex]);


// Iteracje
// ----------------

// for (let i = 0; i < colors.length; i += 1) {
//   console.log(colors[i]);
// }

// for (const color of colors) {
//   console.log(color);
// }
//
// for (const char of WELCOME_MESSAGE) {
//   console.log(char);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Nie znaleźliśmy takiego klienta w bazie danych!";
//
// for (const client of clients) {
// // W każdej iteracji sprawdzamy, czy dany element tablicy jest identyczny
// // do imienia którego szukamy.
// // Jeśli tak, zapisujemy w message wiadomość o sukcesie
// // a następnie użyjemy instrukcji break, aby przerwać dalsze poszukiwanie
//   if (client === clientNameToFind) {
//     message = "Klient z takim imieniem jest w bazie danych!";
//     break;
//   }
// }
//
// console.log(message); // "Klient z takim imieniem jest w bazie danych!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Dla liczb mniejszych niż threshold wykonana zostanie instrukcja continue,
// dzięki czemu obecny obrót pętli zostaje przerwany
// i przechodzimy do następnej iteracji.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//
//   console.log(`Liczba większa niż ${threshold}: ${numbers[i]}`);
// }

// 'Liczba większa niż 15: 18'
// 'Liczba większa niż 15: 29'
// 'Liczba większa niż 15: 34'


// Przypisywanie do zmiennych - wartość i referencja
// ---------------------------------------------------


// let a = 5;
// let b = a;
//
// console.log(a);
// console.log(b);
//
// a = 10;
//
// console.log(a);
// console.log(b);


// const a = ["Red"];
// const b = a;
//
// console.log(a);
// console.log(b);
//
// a.push("Blue");
// console.log(a);
// console.log(b);
//
// const template = {
//   name: "",
//   age: undefined
// };
//
// const x = template;
//
// x.name = "Marek";
//
// console.log(template);



// Metody tablicowe
// ----------------


// split() i join()
// ----------------

// const color = "Green";
//
// console.log(color.split(""));
//
// const sentence = "Lubię kolor zielony";
//
// console.log(sentence.split(" "));
//
// const words = ["Lubię", "kolor", "zielony"];
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("_"));


// indexOf()
// ----------------

// const colors = ["red", "blue", "green", "brown", "yellow"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("purple"));


// includes()
// ----------------


// console.log(colors.includes("blue"));
// console.log(colors.includes("purple"));

// const forbiddenColors = ["gold", "silver", "black"];
//
// const userColor = "silver";
//
// const hasForbiddenColor = forbiddenColors.includes(userColor);
//
// if (hasForbiddenColor) {
//   console.log(`${userColor} is forbidden.`);
// }


// Metody push(), pop() , unshift() i shift()
// ------------------------------------------


// const numbers = [];
//
// numbers.push(1);
// console.log(numbers);
// numbers.push(2);
// console.log(numbers);
// numbers.push(3,4, 5, 6);
// console.log(numbers);
//
// numbers.unshift(0);
// console.log(numbers);
//
// numbers.pop();
// console.log(numbers);
//
// numbers.shift();
// console.log(numbers);


// Metoda slice()
// ----------------


// console.log(colors.slice(1, 4));
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(-3));


// Metoda splice()
// ----------------


// console.log(colors);
// const deletedColors = colors.splice(0, 2);

// colors.splice(2, 0, "gold", "black");

// colors.splice(1, 1, "black", "gold");

// console.log(colors);
// console.log(deletedColors);


// Metoda concat()
// ----------------


// const additionalColors = ["gold", "silver", "black"];
//
// const newColors = colors.concat(additionalColors);
// const newColors2 = additionalColors.concat(colors);
//
// console.log(newColors);
// console.log(newColors2);
