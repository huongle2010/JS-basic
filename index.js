//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
//let a = 4;
//let b = 5;
//let c = a + b;
//console.log(c);

//Afficher la chaine de caractère suivante en majuscule
//const team = 'avengers';
// console.log(team.toUpperCase());

//afficher la première lettre de la chaine de caractère suivante
//const team = 'avengers';
//console.log(team[0]);

//afficher la chaine de caractère suivante exepté la première lettre.
//const team = 'avengers';
//console.log(team.substring(1));

//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
// const firstName = 'Tony';
// const lastName = 'Stark';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
// const team = 'aveNgers';
//=> Avengers
// 
// const teamMaj= team[0].toUpperCase() + team.substring(1).toLowerCase();
// console.log(teamMaj);

//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2
// const villes = ["Paris", "Rennes", "Avignon", "Nice", "Lyon"];
// console.log (villes[2]);
// villes[5] = "Marseille"
// console.log(villes);
// villes.splice(2, 1);
// console.log(villes);

//Comme tu le sais sans doute, pour parcourir un tableau,
// il faut bBoucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//éléments au carré et afficher le tableau.

// const array1 = [2, 4, 8];
// array1 .forEach ((element) => {
//    console.log(element*element)

// });

// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
// const promo = [12, 13, 17, 3, 14, 18];
// sum= 0;
// promo .forEach ((element) => {
    // sum = sum + element}
// );
// console.log(sum/6);

//les conditions

//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18
// const age = 30;
// if (age >= 18) {
//     console.log("vous pouvez voter");
// }
//  else {
//     console.log("vous ne pouvez pas voter");
// }

// Afficher la date d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est en 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin
// const date = new Date();
// const time = date.getHours();
// console.log(date);
// if (5 < time < 17){
//     console.log("Bonjour");
// } else {
//     console.log("Bonsoir");
// }

//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
// let a = 3;
// let b = 4;
// const add = (num1, num2) => {
//     let res = num1 + num2;
//     return res;
// };
// console.log(add (a, b))

//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

// const square = (i) => {
//     let res = i * i; 
//     return res;
//   };
//   console.log(square (5))
  
// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];



