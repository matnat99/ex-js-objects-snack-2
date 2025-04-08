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

// Code Question 2

{
  const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
  };

  const secondBurger = { ...hamburger };
  secondBurger.ingredients[0] = "Salad";

  console.log(hamburger.ingredients[0]); // ?
  console.log(secondBurger.ingredients[0]); // ?
}

/*
  P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
  Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
  In console verrà stampato per due volte "Salad" perché secondBurger è un nuovo oggetto ma una shallow copy dell'oggetto hamburger e quando
  viene modificato l'elemento con indice 0 dell' array ingredients in secondBurger si modifica anche in hamburger perché ingredients è un altro
  livello di annidamento
  
  Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
  3
  */
