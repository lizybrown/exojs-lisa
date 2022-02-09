// Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
// (une sorte de calculatrice simplifiée).
// Objectif :
// - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat isNaN
// - Proposez à l’utilisateur de recommencer \n\n

 
// var ready = confirm("Voulez vous faire un calcul ?"); 


alert("Bienvenu dans la fonction calculatrice :)");





var result;

  function addition(a,b){
      result=a+b
      return result
  }

  function soustraction(a,b){
    result=a-b
    return result
}

function multiplication(a,b){
    result=a*b
    return result
   
}

function division(a,b){
    result=a/b
    return result
 
}

function choixDeChiffre(){
  var a;
  while(isNaN(a)){
    a = prompt("choisis un chiffre")
  }
  a=parseInt(a)
  return a;
}

function choixDeChiffre2(){
  var b;
  while(isNaN(b)){
    b = prompt("choisis un chiffre")
  }
  b=parseInt(b)
  return b;
}




calcul = prompt ("\n addition \n soustraction \n multiplication \n division")

switch (calcul){
case "addition" :
  alert (addition(choixDeChiffre(),choixDeChiffre2()));
  break;
case "soustraction" :
  alert (soustraction(choixDeChiffre(),choixDeChiffre2()));
  break;
case "multiplication" :
  alert (multiplication(choixDeChiffre(),choixDeChiffre2()));
  break;
case "division" :
  alert (division (choixDeChiffre(),choixDeChiffre2()));
  break;
default :
  alert ("voulez-vous exécuter un autre calcul?");

}

// var recommencer;
// recommencer = prompt("\n je souhaite faire un autre calcul \n je souhaite fermer le programme")

// switch (recommencer){
//   case "je souhaite faire un autre calcul"
// }

// var choix = true;

// while(choix === true){
// //demande un choix de calcul + - / *
// function choix_de_calcul() {
//   var choix_de_calcule = prompt(
//     "1- addition \n 2- soustraction \n 3- multiplication \n4- division"
//   );
// //tu le verifie 
// choix_de_calcul = confirm
//   }

// // tu demande un chiffre 

// function demande_un_chiffre() {
//   var chiffreone = prompt ("entre un premier chiffre")
// }

// function demande__un_deuz() {
//   var chiffredeux = prompt ("entre un deuxieme chiffre")
// }

// //verif



// //tu demande un second chiffre 

//   choix = confirm("voulez vous réutilisé la calculette");

// }