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

// Code Question 3

{
  const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
      name: "Anonymous Chef",
      restaurant: {
        name: "Hyur's Burgers",
        address: "Main Street, 123",
        isOpen: true,
      },
      age: 29,
    },
  };

  const secondBurger = structuredClone(hamburger);
  const thirdBurger = structuredClone(hamburger);
}

/*
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
9
*/

// Code Question 4

{
  const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
      console.log(`Ecco ${num} hamburger per te!`);
    },
  };

  const restaurant = {
    name: "Hyur's Burgers",
    address: {
      street: "Main Street",
      number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
  };
}

/*
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Il metodo migliore per clonare l'oggetto chef è la shallow copy perché può copiare anche funzioni interne a un oggetto

Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
Per clonare l'oggetto restaurant il metodo migliore è structuredClone perché fa una copia profonda 
e può copiare anche oggetti complessi annidati nell'oggetto da clonare
*/

//  Code Question 5 (Bonus)

{
  const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
      name: "Anonymous Chef",
      restaurant: {
        name: "Hyur's Burgers",
        address: "Main Street, 123",
        isOpen: true,
      },
      age: 29,
    },
  };

  const newRestaurant = { ...hamburger.maker.restaurant };
  newRestaurant.name = "Hyur's II";
  newRestaurant.address = "Second Street, 12";
  const secondBurger = { ...hamburger };
  secondBurger.maker.restaurant = newRestaurant;
  secondBurger.maker.name = "Chef Hyur";

  console.log(hamburger.maker.name); // ?
  console.log(secondBurger.maker.name); // ?
  console.log(hamburger.maker.restaurant.name); // ?
  console.log(secondBurger.maker.restaurant.name); // ?
}

/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
In console verranno stampati per due volte "Chef Hyur" e "Hyur's II"

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
5
*/
