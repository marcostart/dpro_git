class Data {
    constructor(id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
}

products = [new Data(1, "Mélange original 200g 500 yens", 500), new Data(2, "Mélange original 500g 900 yens", 900), new Data(3, "Mélange spécial 200g 700 yens", 700), new Data(4, "Mélange spécial 500g 1200 yens", 1200)]

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function calc(){
    if (purchases.length == 0){
        return null;
    }
    let postage;
    let sum = 0;
    for(let index = 0; index < purchases.length; index++) {
        sum += purchases[index].price * purchases[index].number;
      }
      if (sum == 0 || sum >= 3000) {
        postage = 0
      } else if (sum < 2000){
        postage = 500
      } else {
        postage = 250
      }
      window.alert(`Total des produits :\n ${display()}\n\nCoût total : ${sum}; Les frais d'expédition s'élèvent à : ${postage} donc le montant total est : ${sum+postage}`);
      purchases = [];
      priceElement.value= "";
      numberElement.value = "";
    
}

function add(){
    const id = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    if (id && number){
        let index = products.findIndex(product => product.id === id);
        let sum =0;
        const purchase = {
            price: products[index].price,
            number: number,
            name: products[index].name
        };
        index = purchases.findIndex(product => product.name === purchase.name)
        if (index == -1){
            purchases.push(purchase);
        }
        else {
            purchases[index].number += purchase.number
        }
        for(let index = 0; index < purchases.length; index++) {
            sum += purchases[index].price * purchases[index].number;
        }
        alert(`Un produit ajouté.\n${display()}\n\nTotal: ${sum}`)
        priceElement.value= "";
        numberElement.value = "";
    }
    
}

function display(){
    let chaine = ""
    for(let index = 0; index < purchases.length; index++) {
        chaine += `Nom : ${purchases[index].name}; Prix: ${purchases[index].price}; Quantité: ${purchases[index].number} : Montant: ${purchases[index].price * purchases[index].number}\n`
    }

    return chaine
}