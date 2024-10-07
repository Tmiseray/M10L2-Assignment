const products = ["milk", "cheese", "bread", "eggs", "bacon", "coffee", "creamer", "sugar", "pasta", "alfredo", "marinara", "chicken", "meatballs"]

const prices = [4.99, 3.99, 6.49, 2.99, 5.99, 8.99, 7.99, 3.49, 5.49, 4.49, 4.49, 9.49, 9.99]

let isLoggedIn = false

let cart = []

function displayProducts(products) {
    console.log("Available Products:")
    for (let i = 0; i < products.length; i++) {
        while (i < products.length) {
            console.log(`${i+1}: ${products[i]}`)
            i++
        }
    };
};

function addProduct(cart, i) {
    if (products) {
        cart += products[i]
        return cart;
    };
};

function totalCart(cart, products, prices) {
    let totalCost = 0
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (cart[i] == products[j]) {
                totalCost += prices[j]
                return totalCost
            };
        };
    };
};

function displayCart(cart) {
    for (let i = 0; i < cart.length; i++) {
        return `Product: ${cart[i]}`;
    };
};

function shop(isLoggedIn = true, cart) {
    if (isLoggedIn) {
        console.log("You may add items to your cart!")
        console.log(displayProducts(products))
        console.log(addProduct(cart, 5));
        console.log(addProduct(cart, 3));
        console.log(addProduct(cart, 7));
        console.log(addProduct(cart, 13));
        console.log(displayCart(cart));
        console.log(totalCart(cart, products, prices));
    } else {
        console.log("You must log in before adding items to your cart.");
    };
};
