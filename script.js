// Code Question 1

{
  const hamburger = { name: "Cheese Burger", weight: 250 };
  const secondBurger = hamburger;
  secondBurger.name = "Double Cheese Burger";
  secondBurger.weight = 500;

  console.log(hamburger.name); // ?
  console.log(secondBurger.name); // ?
}

/* 
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
In console verrà stampato "Double Cheese Burger" per due volte perché in secondBurger viene assegnata la referenza dell'oggetto hamburger
e quando vengono modificate le proprietà di secondBurger si modificano anche quelle di hamburger

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 
1
*/
