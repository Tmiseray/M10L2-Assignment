
const products = ["milk", "cheese", "bread", "eggs", "bacon", "coffee", "creamer", "sugar", "pasta", "alfredo", "marinara", "chicken", "meatballs"];

const prices = [4.99, 3.99, 6.49, 2.99, 5.99, 8.99, 7.99, 3.49, 5.49, 4.49, 4.49, 9.49, 9.99];

const isLoggedIn = true;


function shop() {
    if (isLoggedIn) {
        console.log("You may add items to your cart!")
        console.log("Available Products:")
        for (let i = 0; i < products.length; i++) {
            while (i < products.length) {
                console.log(`${i+1}: ${products[i]}`)
                i++
            };
        }
        
        let cart = []
        let p = [1, 2, 4, 5, 9, 11, 13]

        for (let i = 0; i < p.length; i++) {
            cart.push(products[p[i] - 1]);
        }
        
        return displayCart(cart);
    } else {
        console.log("You must log in before adding items to your cart.");
    }
}

function displayCart(cart) {
    console.log("Cart Products:")
    for (let i = 0; i < cart.length; i++) {
        console.log(`${cart[i]}`);
    }
    return totalCart(cart);
};

function totalCart(cart) {
    let totalCost = 0
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (cart[i] === products[j]) {
                    totalCost += prices[j];
            }
        }
    }
    console.log(`Total Cost of Cart: $${totalCost.toFixed(2)}`);
};


console.log(shop());